import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Mobile crash captured:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-emerald-50 p-6">
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-6 text-center">
            <h2 className="text-lg font-bold text-emerald-700 mb-2">
              Something went wrong
            </h2>
            <p className="text-sm text-emerald-600">
              Please reload the page. The AI service may be unavailable.
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
