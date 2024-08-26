import React from 'react';

export default function Top({avatar, name, username, date}) {
  function formatDateString(dateStr) {
    const date = new Date(dateStr);
    const options = {day: '2-digit', month: 'short', year: 'numeric'};
    const formattedDate = date.toLocaleDateString('en-GB', options);
    return formattedDate;
  }

  return (
    <div className="top">
      <img src={avatar} alt="avatar" className="avatar" />
      <div className="user-info">
        <div>
          <p className="user">{name}</p>
          <p className="username">@{username}</p>
        </div>
        <p className="date">Joined {formatDateString(date)}</p>
      </div>
    </div>
  );
}
