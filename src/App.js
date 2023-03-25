import "./App.css";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";
import { useState } from "react";

function App() {
  const [link, setLink] = useState("");
  const [qrcodeLink, setQrcodeLink] = useState("");

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(
      link_url,
      {
        width: 600,
        margin: 3,
      },
      function (error, url) {
        setQrcodeLink(url);
      }
    );
  }

  function handleQrcode(event) {
    setLink(event.target.value);
    handleGenerate(event.target.value);
  }

  return (
    <div className="container">
      <h2>QR Code Generator</h2>
      <QRCode value={link} />
      <input
        className="input"
        placeholder="Place link here..."
        value={link}
        onChange={(event) => handleQrcode(event)}
      />

      <a href={qrcodeLink} download={`qrcode.png`}>
        Download QRCode
      </a>
      <p>© {new Date().getFullYear()} Copyright @Umar Ashraf</p>
    </div>
  );
}

export default App;
