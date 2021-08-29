import { useDispatch } from "react-redux";
import { useState } from "react";
import classes from "./Auth.module.css";
import { authActions } from "../store/authSlice";
const Auth = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const emailChangeHandler = (e) => {
    let newEmail = e.target.value;
    setEmail(newEmail);
  };
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login({ email: email }));
  };
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={emailChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
