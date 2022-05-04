import React, { useState } from "react";
import { UserContext } from './context/userContext';
import { UserContextType } from './@types/user';

import "./styles/LoginPage.css";

import { standardApi } from './apis';


function LoginPage() {
  const { saveUser } = React.useContext(UserContext) as UserContextType;

  // React States
  const [errorMessages, setErrorMessages] = useState({name: "", message: ""});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "invalid username",
    pass: "invalid username or invalid password"
  };

  const handleSubmit = (event: any) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    console.log(uname.value)

    // Find user login info
    standardApi<{ message: string}>(`/auth/${uname.value}/${pass.value}`, "GET")
    .then(({ message }) => {
      console.log(message);
      setIsSubmitted(true);
      saveUser({username: uname.value, password: pass.value, loggedIn: true})
    })
    .catch((error) => {
      setErrorMessages({ name: "pass", message: errors.pass });
      console.log("FEHLER")
    });
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name:string) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export { LoginPage };