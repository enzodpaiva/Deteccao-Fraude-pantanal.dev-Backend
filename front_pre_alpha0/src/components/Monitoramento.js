// src/Monitoramento.js

import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import moment from "moment";
import "./Monitoramento.css"; // Arquivo de estilo

const Monitoramento = () => {
  const [transacoes, setTransacoes] = useState([]);

  // Simulando dados de transações
  const transacoesExemplo = [
    { id: 1, valor: 50.0, data: "2023-07-18T09:00:00" },
    { id: 2, valor: 80.0, data: "2023-07-18T10:30:00" },
    { id: 3, valor: 100.0, data: "2023-07-18T12:15:00" },
    // Adicione mais transações aqui...
  ];

  const gerarDadosExemplo = () => {
    const dados = [];
    const dataInicial = moment().subtract(30, "days"); // 30 dias atrás

    for (let i = 0; i < 30; i++) {
      const data = dataInicial.clone().add(i, "days");
      const quantidade = Math.floor(Math.random() * 100) + 1; // Valor aleatório entre 1 e 100
      const valor = Math.random() * 1000; // Valor aleatório entre 0 e 1000

      dados.push({ data: data.format("YYYY-MM-DD"), quantidade, valor });
    }

    return dados;
  };

  // Popula os gráficos com dados de exemplo ao iniciar a aplicação
  useEffect(() => {
    const dadosExemplo = gerarDadosExemplo();
    setTransacoes(dadosExemplo);
  }, []);
  
  const calcularValorMedio = () => {
    const somaValores = transacoes.reduce((total, transacao) => total + transacao.valor, 0);
    return (somaValores / transacoes.length).toFixed(2);
  };

  const calcularValorMinimo = () => {
    return transacoes.length > 0 ? Math.min(...transacoes.map((transacao) => transacao.valor)).toFixed(2) : "N/A";
  };

  const calcularValorMaximo = () => {
    return transacoes.length > 0 ? Math.max(...transacoes.map((transacao) => transacao.valor)).toFixed(2) : "N/A";
  };

  return (
    <div className="monitoramento">
      <div className="painel-informacoes">
        <div className="painel-item">
          <h3>Valor Médio</h3>
          <span>{calcularValorMedio()}</span>
        </div>
        <div className="painel-item">
          <h3>Valor Mínimo</h3>
          <span>{calcularValorMinimo()}</span>
        </div>
        <div className="painel-item">
          <h3>Valor Máximo</h3>
          <span>{calcularValorMaximo()}</span>
        </div>
        <div className="painel-item">
          <h3>Quantidade de Transações</h3>
          <span>{transacoes.length}</span>
        </div>
      </div>
      <div className="graficos">
        <div className="grafico">
          <h3>Quantidade de Transações ao Longo do Tempo</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={transacoes} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="data" />
              <YAxis />
              <Legend />
              <Line type="monotone" dataKey="quantidade" name="Quantidade" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="grafico">
          <h3>Valor das Transações ao Longo do Tempo</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={transacoes} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="data" />
              <YAxis />
              <Legend />
              <Line type="monotone" dataKey="valor" name="Valor" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Monitoramento;
