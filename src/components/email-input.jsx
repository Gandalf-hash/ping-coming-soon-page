import React from "react";

export const AppEmailInput = ({ disabled = false }) => {
  const [error, setError] = React.useState(null);
  const [email, setEmail] = React.useState("");

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const handleBlur = () => {
    if (!isValidEmail(email)) {
      setError("Valid Email Required");
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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError("Valid Email Required");
    }
  };

  const inputStyle = {
    backgroundColor: error ? "#f2ddda" : "",
    color: error ? "#ed614c" : "",
    borderColor: error ? "#FF0000" : "",
  };
  return (
    <form className="input-container" onSubmit={handleFormSubmit}>
      <div>
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
      <div className="button-div">
        <button
          className={` ${disabled ? "error-state" : ""}`}
          type="submit"
          disabled={!email}
        >
          Notify me
        </button>
      </div>
    </form>
  );
};
