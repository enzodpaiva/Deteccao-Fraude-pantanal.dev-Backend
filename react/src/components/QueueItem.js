// src/components/ItemFila.js

import React from "react";
import "./QueueItem.css";

const ItemFila = ({ valor, estado, hora }) => {
  return (
    <div className="item-fila">
      <div className="item-info">
        <span>Valor: {valor}</span>
        <span>Estado: {estado}</span>
        <span>Hora: {hora}</span>
      </div>
    </div>
  );
};

export default ItemFila;
