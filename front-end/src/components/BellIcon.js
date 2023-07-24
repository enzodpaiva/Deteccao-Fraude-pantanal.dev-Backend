import React, { useState, useEffect } from 'react';
import './BellIcon.css';
import error_icon from "../assets/error.png";


const NotificationIcon = () => {
  const [showNotification, setShowNotification] = useState(true);
  const [notificationCount, setNotificationCount] = useState(0);

  const handleNotification = (amount) => {
    setNotificationCount(amount);
    setShowNotification(true);
  };


  const fetchFraudes = async () => {
    const response = await fetch('http://localhost:5000/quantidade-fraudes');
    if (response.ok) {
    const data = await response.json();
    handleNotification(data.quantidadeFraudes);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchFraudes, 500);
    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className="bell-icon-container">
      <img class="bell-icon" src={error_icon} width="100" height="100" alt="Bell Icon"/>
      {showNotification && (
        <div className="notification-badge">
          <span>{notificationCount}</span>
        </div>
      )}
    </div>
  );
};

export default NotificationIcon;


// // NotificationIcon.js
// import React from 'react';
// import { FaBell } from 'react-icons/fa';

// const BellIcon = ({ notifications, onNotificationClick }) => {
//   return (
//     <div className="notification-icon" onClick={() => onNotificationClick()}>
//       <FaBell />
//       {/* {notifications.length > 0 && <span className="notification-count">{notifications.length}</span>} */}
//     </div>
//   );
// };

// export default BellIcon;



// components/NotificationIcon.js
// import React, { useState } from 'react';
// import { FiBell } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
// import notifications from '../data/notifications';

// const NotificationIcon = () => {
//   const [showNotifications, setShowNotifications] = useState(false);

//   return (
//     <div className="notification-icon">
//       <div onClick={() => setShowNotifications(!showNotifications)}>
//         <FiBell size={24} />
//         {notifications.length > 0 && (
//           <div className="notification-badge">{notifications.length}</div>
//         )}
//       </div>
//       {showNotifications && (
//         <div className="notification-list">
//           {notifications.map((notification) => (
//             <Link key={notification.id} to={notification.link}>
//               {notification.text}
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default NotificationIcon;
