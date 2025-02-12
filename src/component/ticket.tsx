import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { v4 as uuidv4 } from 'uuid';

const TicketGenerator: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [ticketId, setTicketId] = useState<string | null>(null);

  const generateTicket = () => {
    const uniqueId = uuidv4();
    setTicketId(uniqueId);
  };

  return (
    <div>
      <h2>Ticket Generator</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
      />
      <button onClick={generateTicket}>Generate Ticket</button>

      {ticketId && (
        <div>
          <h3>Ticket for: {userName}</h3>
          <QRCodeCanvas value={`Name: ${userName}, Ticket ID: ${ticketId}`} size={200} />
        </div>
      )}
    </div>
  );
};

export default TicketGenerator;
