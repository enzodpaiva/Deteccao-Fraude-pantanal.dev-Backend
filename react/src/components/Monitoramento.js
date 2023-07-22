// src/Monitoramento.js

import { LineChart, Line, XAxis, YAxis, Legend, ResponsiveContainer,  BarChart, Bar, CartesianGrid, Tooltip } from "recharts";
import "./Monitoramento.css";
import React, { useState, useEffect } from 'react';

const Monitoramento = () => {
  const [transacoes, setTransacoes] = useState([]);

  const fetchTransacao = async () => {
    const response = await fetch('http://localhost:5000/transacoes');
    if (response.ok) {
    const data = await response.json();
    setTransacoes((prevTransacoes) => [...prevTransacoes.slice(-100), data]); // Mantém apenas as últimas 10 transações
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchTransacao, 5000);
    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, []);

  const calcularValorMedio = () => {
    const somaValores = transacoes.reduce((total, transacao) => total + transacao.Amount, 0);
    return (somaValores / transacoes.length).toFixed(2);
  };

  const calcularValorMinimo = () => {
    return transacoes.length > 0 ? Math.min(...transacoes.map((transacao) => transacao.Amount)).toFixed(2) : "N/A";
  };

  const calcularValorMaximo = () => {
    return transacoes.length > 0 ? Math.max(...transacoes.map((transacao) => transacao.Amount)).toFixed(2) : "N/A";
  };

  const calcularValorTotal = () => {
    const somaValores = transacoes.reduce((total, transacao) => total + transacao.Amount, 0);
    return somaValores.toFixed(2);
  };

  return (
    <div className="monitoramento">
      <div className="painel-informacoes">
        <div className="total-value">
          <h3>Valor Total</h3>
          <span>R$ {calcularValorTotal()}</span>
        </div>
        <div className="average-value">
          <h3>Valor Médio</h3>
          <span>R$ {calcularValorMedio()}</span>
        </div>
        <div className="minimum-value">
          <h3>Valor Mínimo</h3>
          <span>R$ {calcularValorMinimo()}</span>
        </div>
        <div className="maximum-value">
          <h3>Valor Máximo</h3>
          <span>R$ {calcularValorMaximo()}</span>
        </div>
        <div className="transitions-amount">
          <h3>Quantidade de Transações</h3>
          <span>{transacoes.length}</span>
        </div>
      </div>
      <div className="graficos">
        <div className="grafico">
          <h3>Transações Fraudulentas</h3>
          <ResponsiveContainer width="100%" height={600}>
            <LineChart data={transacoes} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Class" />
              <YAxis />
              <Legend />
              <Line type="monotone" dataKey="Class" name="Transações Fraudulentas" stroke="#ff0000" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="grafico">
          <h3>Valor das Transações</h3>
          <ResponsiveContainer width="100%" height={600}>
            <LineChart data={transacoes} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Time" />
              <YAxis />
              <Legend />
              <Line type="monotone" dataKey="Amount" name="Valor médio das transações" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Monitoramento;