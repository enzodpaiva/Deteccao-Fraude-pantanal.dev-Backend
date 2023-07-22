// src/components/FilaDeProcessos.js

import React, { useState } from "react";
import ItemFila from "./QueueItem.js";
import "./ProcessesQueue.css";

const FilaDeProcessos = () => {
  const [fila, setFila] = useState([]);

  const adicionarItemFila = () => {
    if (fila.length >= 10) {
      // Se a fila já tiver 10 itens, remove o primeiro item (topo da fila)
      setFila((prevState) => prevState.slice(1));
    }

    const novoItem = {
      valor: Math.random(),
      estado: "Em espera",
      hora: new Date().toLocaleTimeString(),
    };

    setFila((prevState) => [...prevState, novoItem]);
  };

  return (
    <div className="fila-de-processos">
      <button onClick={adicionarItemFila}>Adicionar Item</button>
      <div className="itens-fila">
        {fila.map((item, index) => (
          <ItemFila key={index} valor={item.valor} estado={item.estado} hora={item.hora} />
        ))}
      </div>
    </div>
  );
};

export default FilaDeProcessos;
