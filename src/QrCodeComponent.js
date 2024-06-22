import React from 'react';
import QRCode from 'qrcode.react';

function QrCodeComponent({ value }) {
  return (
    <div id="qr-code">
      <QRCode value={value} />
    </div>
  );
}

export default QrCodeComponent;