import { useRef, useEffect } from "react";

function Camera() {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ 
      video: { facingMode: "environment" } 
    })
    .then(stream => {
      videoRef.current.srcObject = stream;
    })
    .catch(err => {
      alert("Camera access denied");
      console.error(err);
    });
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: "100%", maxWidth: "350px", border: "1px solid black" }}
      />
    </div>
  );
}

export default Camera;
