import React from 'react';

export default function Stat({head, body}) {
  return (
    <div className="stats-box">
      <span className="stat-name">{head}</span>
      <p className="stat">{body}</p>
    </div>
  );
}
