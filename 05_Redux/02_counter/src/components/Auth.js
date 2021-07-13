import { useDispatch } from "react-redux";
import { useRef } from "react";
import { authActions } from "../store/auth-slice";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const emailValue = emailRef.current.value.includes("@");
    const passwordValue = passwordRef.current.value.trim() !== "";
    if (emailValue && passwordValue) {
      dispatch(authActions.login());
    }
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogin}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordRef} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
