import React from "react";

export const AppEmailInput = ({ disabled = false }) => {
  const [error, setError] = React.useState(null);
  const [email, setEmail] = React.useState("");

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const handleBlur = () => {
    if (!isValidEmail(email)) {
      setError("Please provide a valid email address");
    } else {
      setError(null);
    }
  };
  const handleChange = (event) => {
    setEmail(event.target.value);
    if (error) {
      setError(null);
    }
  };

  const inputStyle = {
    backgroundColor: error ? "#f2ddda" : "",
    color: error ? "#ed614c" : "",
    borderColor: error ? "#FF0000" : "",
  };

  const errorMessageStyle = {
    color: "red",
    fontSize: "14px",
    marginLeft: "10px",
    marginTop: "10px",
  };
  return (
    <>
      {error && <span style={errorMessageStyle}>{error}</span>}
      <div className="input-container">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="Your email address..."
            style={inputStyle}
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div style={{ width: "100%" }}>
          <button
            className={` ${disabled ? "error-state" : ""}`}
            type="submit"
            disabled={!email}
          >
            Notify me
          </button>
        </div>
      </div>
    </>
  );
};
