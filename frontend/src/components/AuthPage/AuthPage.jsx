import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./AuthPage.css";
import "../AuthPage/AuthPage";

const AuthPage = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: null });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.username) {
      errors.username = "Username cannot be empty!";
    }

    if (!formData.email) {
      errors.email = "Email cannot be empty!";
    }

    if (!formData.password) {
      errors.password = "Password cannot be empty!";
    }

    return errors;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    axios
      .post("http://localhost:3000/api/users/authenticate", formData)
      .then((r) => {
        const user = { ...r.data, secret: formData.username };
        localStorage.setItem("user", JSON.stringify(user));
        props.onAuth(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>
        <div className="form-subtitle">Set a username to get started</div>

        {["username", "email", "password"].map((fieldName) => (
          <div className="auth" key={fieldName}>
            <div className="auth-label">
              {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
            </div>
            <input
              className="auth-input"
              name={fieldName}
              type={fieldName === "password" ? "password" : "text"}
              value={formData[fieldName]}
              onChange={handleChange}
            />
            {formErrors[fieldName] && (
              <div className="error-message">{formErrors[fieldName]}</div>
            )}
          </div>
        ))}

        <button className="auth-button" type="submit">
          Enter
        </button>
      </form>
    </div>
  );
};

AuthPage.propTypes = {
  onAuth: PropTypes.func.isRequired,
};

export default AuthPage;
