import React, { useState } from "react";

const panelStyle: React.CSSProperties = {
  position: "fixed",
  top: "0",
  right: "0",
  width: 350,
  height: "100vh",
  background: "#fff",
  border: "1px solid #ccc",
  borderRadius: "8px 0 0 8px",
  boxShadow: "-2px 0 10px rgba(0,0,0,0.2)",
  display: "flex",
  flexDirection: "column",
  zIndex: 99999,
  overflow: "hidden",
  fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
  color: "#111",
};

const headerStyle: React.CSSProperties = {
  background: "#1877f2",
  color: "white",
  padding: "16px",
  fontWeight: "bold",
  fontSize: "16px",
  borderBottom: "1px solid #ddd",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const contentStyle: React.CSSProperties = {
  flex: 1,
  padding: "16px",
  overflowY: "auto",
};

const toggleButtonStyle: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  right: "0",
  background: "#1877f2",
  color: "white",
  border: "none",
  padding: "12px 8px",
  cursor: "pointer",
  borderRadius: "8px 0 0 8px",
  zIndex: 100000,
  transform: "translateY(-50%)",
  fontSize: "16px",
};

export default function CommentChat() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <button
        style={toggleButtonStyle}
        onClick={() => setIsOpen(true)}
        title="Open Comment Chat"
      >
        💬
      </button>
    );
  }

  return (
    <div style={panelStyle} id="ta-chat">
      <div style={headerStyle}>
        <span>Comment Chat</span>
        <button
          onClick={() => setIsOpen(false)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            fontSize: "18px",
            padding: "4px",
          }}
          title="Close"
        >
          ×
        </button>
      </div>
      <div style={contentStyle}>
        <h3 style={{ margin: "0 0 16px 0", color: "#1877f2" }}>
          Facebook Groups Extension
        </h3>
        <p style={{ margin: "0 0 16px 0", lineHeight: "1.5" }}>
          This sidebar is now active on Facebook pages. You can use it to interact with Facebook groups and posts.
        </p>
        <div style={{
          background: "#f0f2f5",
          padding: "12px",
          borderRadius: "8px",
          marginBottom: "16px"
        }}>
          <strong>Status:</strong> Connected to Facebook
        </div>
        <div style={{
          background: "#e3f2fd",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #1877f2"
        }}>
          <strong>Ready for integration!</strong><br />
          Add your Facebook groups posting features here.
        </div>
      </div>
    </div>
  );
}
