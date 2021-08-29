import { useSelector } from "react-redux";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const userEmail = useSelector((state) => state.auth.email);
  return (
    <main className={classes.profile}>
      <h2>{userEmail}</h2>
    </main>
  );
};

export default UserProfile;
