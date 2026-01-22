import { useEffect, useRef } from "react";
import { Html5Qrcode, Html5QrcodeSupportedFormats } from "html5-qrcode";

export default function BarcodeScanner({ onDetected }) {
  const scannerRef = useRef(null);

  useEffect(() => {
    let html5QrcodeScanner;

    const startScanner = async () => {
      try {
        const devices = await Html5Qrcode.getCameras();
        if (devices && devices.length) {
          html5QrcodeScanner = new Html5Qrcode("reader");
          scannerRef.current = html5QrcodeScanner;
          
          await html5QrcodeScanner.start(
            { facingMode: "environment" },
            {
              fps: 10,
              qrbox: { width: 250, height: 250 },
              formatsToSupport: [ Html5QrcodeSupportedFormats.EAN_13, Html5QrcodeSupportedFormats.UPC_A ]
            },
            (decodedText) => {
              html5QrcodeScanner.stop().then(() => {
                onDetected(decodedText);
              }).catch(err => console.error(err));
            },
            () => {}
          );
        }
      } catch (err) {
        console.error("Error starting scanner", err);
      }
    };

    startScanner();

    return () => {
      if (scannerRef.current) {
        scannerRef.current.stop().catch(err => console.error("Failed to stop scanner", err));
      }
    };
  }, [onDetected]);

  return <div id="reader" className="w-full h-full object-cover"></div>;
}