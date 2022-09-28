import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/input";
import Page from "../../components/page";
import s from "./index.module.scss";
import { ReactComponent as Error } from "../../assets/error.svg";
import { validatePassword, validateUsername } from "../../utils/validation";
import { useAppDispatch } from "../../redux/hooks";
import { signInThunk } from "../../redux/thunks";
import Loader from "../../components/loader";
import { ApiError } from "../../types/services";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setUsername(event.target.value);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setPassword(event.target.value);
  };

  const handleSignIn = async () => {
    setError(null);

    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);
    if (usernameError) setError(usernameError);
    else if (passwordError) setError(passwordError);
    else {
      setLoading(true);
      dispatch(
        signInThunk({
          username,
          password,
        })
      ).then(({ payload }) => {
        setLoading(false);
        if ((payload as ApiError).error) setError((payload as ApiError).error);
      });
    }
  };

  return (
    <Page className={s.page}>
      <div className={s.form}>
        {loading ? (
          <Loader className={s.loader} />
        ) : (
          <>
            <h1 className={s.title}>Welcome Back!</h1>
            <p className={s.text}>
              To keep connected with us please login with your personal info
            </p>
            <Input
              id="username"
              className={s.input}
              value={username}
              onChange={handleChangeUsername}
              label="username"
            />
            <Input
              id="password"
              className={s.input}
              value={password}
              onChange={handleChangePassword}
              label="password"
              type="password"
            />
            {!!error && (
              <p className={s.error}>
                <Error />
                <span>{error}</span>
              </p>
            )}
            <div className={s.row}>
              <button className={s.button} onClick={handleSignIn}>
                sign in
              </button>
              <Link to="/signup" className={s.link}>
                sign up
              </Link>
            </div>
          </>
        )}
      </div>
    </Page>
  );
};

export default SignIn;
