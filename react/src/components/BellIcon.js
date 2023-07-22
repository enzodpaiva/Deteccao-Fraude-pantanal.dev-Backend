import React, { useState } from 'react';
import './BellIcon.css';
import error_icon from "../assets/error.png";

const BellIcon = () => {
  const [showNotification, setShowNotification] = useState(true);
  const [notificationCount, setNotificationCount] = useState(0);

  const handleNotification = () => {
    setNotificationCount((prevCount) => prevCount + 1);
    setShowNotification(true);

    // Defina aqui a lógica para lidar com a notificação (por exemplo, enviar para a API, mostrar uma mensagem, etc.)
    // Neste exemplo, estamos apenas aumentando o contador e mostrando a notificação temporariamente.

    // Define o tempo (em milissegundos) que a notificação ficará visível antes de ser ocultada
  };

  return (
    <div className="bell-icon-container">
      {/* <svg
        className="bell-icon"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleNotification}
      >
      </svg> */}
      <img class="bell-icon" src={error_icon} width="100" height="100" alt="Bell Icon" onClick={handleNotification} />
      {showNotification && (
        <div className="notification-badge">
          <span>{notificationCount}</span>
        </div>
      )}
    </div>
  );
};

export default BellIcon;