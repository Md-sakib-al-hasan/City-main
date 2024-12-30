import { useState } from 'react';
import { FaBell } from 'react-icons/fa';

const notificationsData = [
  { id: 1, message: 'You have a new message.' },
  { id: 2, message: 'Your order has been shipped.' },
  { id: 3, message: 'Your password was changed successfully.' },
];

const NotificationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Notification Icon */}
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
      >
        <FaBell className='absolute top-0 left-0 ' size={24} />
        {notificationsData.length > 0 && (
          <span className="absolute top-0 lg:right-[-15px] inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full">
            {notificationsData.length}
          </span>
        )}
      </button>

      {/* Notification Dropdown */}
      {isOpen && (
        <div className="absolute  lg:left-auto left-0 right-0 z-10 w-64 mt-2 bg-white border rounded-lg shadow-md">
          <div className="p-4 font-bold text-gray-700 border-b">Notifications</div>
          <ul className="max-h-48 overflow-auto">
            {notificationsData.length > 0 ? (
              notificationsData.map((notification) => (
                <li
                  key={notification.id}
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  {notification.message}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-sm text-gray-500">No notifications</li>
            )}
          </ul>
         
        </div>
      )}
    </div>
  );
};

export default NotificationMenu;
