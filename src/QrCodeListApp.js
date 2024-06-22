import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import QrCodeComponent from './QrCodeComponent';

function QrCodeListApp() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [qrValue, setQrValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim()) {
      const newList = [...list, inputValue.trim()];
      setList(newList);
      setQrValue(JSON.stringify(newList));
      setInputValue('');
    }
  };

   const handleRemoveItem = (index) => {
      const newList = list.filter((_, i) => i !== index);
      setList(newList);
      setQrValue(JSON.stringify(newList));
    };

   const handlePrint = () => {
      window.print();
    };

  return (
    <div style={{ padding: '20px' }}>
      <h1>QR Code List App</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add an item"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <h2>List</h2>
      <ul>
              {list.map((item, index) => (
                <li key={index}>
                  {item}
                  <button onClick={() => handleRemoveItem(index)}>Remove</button>
                </li>
              ))}
            </ul>
      <h2>QR Code</h2>
      {qrValue && (
              <div>
                <QrCodeComponent value={qrValue} />
                <button onClick={handlePrint}>Print QR Code</button>
              </div>
            )}
    </div>
  );
}

export default QrCodeListApp;