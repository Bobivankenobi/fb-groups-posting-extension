import React from "react";

const panelStyle: React.CSSProperties = {
  position: "fixed",
  bottom: "20px",
  right: "10px",
  width: 350,
  height: "95%",
  background: "#fff",
  border: "1px solid #ccc",
  borderRadius: 8,
  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  display: "flex",
  flexDirection: "column",
  zIndex: 99999,
  overflow: "hidden", // parent stays hidden; inner content scrolls
  fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
  color: "#111",
};

export default function CommentChat() {




  return (
    <div style={panelStyle} id="ta-chat">
      <h1>BOILERPLATE</h1>
    </div>
  );
}
