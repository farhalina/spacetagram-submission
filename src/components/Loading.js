import React from "react";

function Loading() {
  return (
    <div
      class="spinner-border"
      role="status"
      style={{ padding: 30, margin: 50 }}
    >
      <span class="sr-only"></span>
    </div>
  );
}

export default Loading;
