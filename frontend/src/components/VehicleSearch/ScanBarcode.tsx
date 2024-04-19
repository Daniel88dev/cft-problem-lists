import { useState } from "react";
import { BrowserBarcodeReader } from "@zxing/library";

const BarcodeScanner = () => {
  const [result, setResult] = useState("");

  const scanBarcode = async () => {
    const codeReader = new BrowserBarcodeReader();
    try {
      const result = await codeReader.decodeFromInputVideoDevice(
        undefined,
        "video"
      );
      setResult(result.getText());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={scanBarcode}>Scan Barcode</button>
      <p>{result}</p>
    </div>
  );
};

export default BarcodeScanner;
