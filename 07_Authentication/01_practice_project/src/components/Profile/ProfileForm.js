import classes from "./ProfileForm.module.css";
import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
const ProfileForm = () => {
  const history = useHistory();
  const passwordRef = useRef();
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  const submitHandler = (e) => {
    e.preventDefault();
    const newPassword = passwordRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCn6n2J33ZYWQUN1mCeMXKvZqqiYqfJvY4",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          password: newPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid Password");
        } else {
          res.json();
        }
      })
      .then((data) => {
        history.replace("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={passwordRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
