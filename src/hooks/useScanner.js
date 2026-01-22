import { Html5Qrcode, Html5QrcodeSupportedFormats } from "html5-qrcode";
import { useRef } from "react";

export const useScanner = (onResult) => {
  const scannerRef = useRef(null);
  const stableCount = useRef(0);
  const lastCode = useRef(null);

  const start = async () => {
    const scanner = new Html5Qrcode("barcode-reader");
    scannerRef.current = scanner;

    const cams = await Html5Qrcode.getCameras();
    await scanner.start(
      cams[cams.length - 1].id,
      {
        fps: 10,
        qrbox: { width: 260, height: 160 },
        formatsToSupport: [
          Html5QrcodeSupportedFormats.EAN_13,
          Html5QrcodeSupportedFormats.UPC_A
        ]
      },
      (code) => {
        if (code === lastCode.current) stableCount.current++;
        else {
          lastCode.current = code;
          stableCount.current = 1;
        }
        if (stableCount.current >= 2) {
          scanner.stop();
          onResult(code);
        }
      }
    );
  };

  const stop = async () => {
    await scannerRef.current?.stop();
    scannerRef.current?.clear();
  };

  return { start, stop };
};