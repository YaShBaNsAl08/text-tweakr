import React from "react";

function Alert(props) {
  const capitalwords = (word) => {
    const l = word.toLowerCase();
    return l.charAt(0).toUpperCase() + l.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalwords(props.alert.type)}</strong>:
          {props.alert.message}
        </div>
      )}
    </div>
  );
}

export default Alert;
