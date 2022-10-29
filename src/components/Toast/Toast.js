import { useState, useEffect } from 'react';
import './Toast.css';

function Toast({ toastList, position, autoDelete, autoDeleteTime }) {
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, autoDeleteTime);

    return () => {
      clearInterval(interval);
    }

  }, [toastList, autoDelete, autoDeleteTime, list]);

  function deleteToast(id) {
    const listItemIndex = list.findIndex((item) => item.id === id);
    const toastListItem = toastList.findIndex((item) => item.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  }

  return (
    <>
      <div className={`notification-container ${position}`}>
        {
          list.map((toast) =>
            <div
              key={toast.id}
              className={`toast toast_${toast.type} ${position}`}
            >
              <button className="toast__close-button" onClick={() => deleteToast(toast.id)}></button>
              <div title={toast.message}>
                <p className="toast__title">{toast.title}</p>
                <p className="toast__message">
                  {toast.message}
                </p>
              </div>
            </div>
          )
        }
      </div>
    </>
  );
}

export default Toast;
