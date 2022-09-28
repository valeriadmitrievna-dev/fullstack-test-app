import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/input";
import Page from "../../components/page";
import s from "./index.module.scss";
import { ReactComponent as Error } from "../../assets/error.svg";
import { useAppDispatch } from "../../redux/hooks";
import {
  validateName,
  validatePassword,
  validateUsername,
} from "../../utils/validation";
import { signUpThunk } from "../../redux/thunks";
import Loader from "../../components/loader";
import { ApiError } from "../../types/services";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setName(event.target.value);
  };
  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setUsername(event.target.value);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setPassword(event.target.value);
  };

  const handleSignUp = async () => {
    setError(null);

    const nameError = validateName(name);
    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);
    if (nameError) setError(nameError);
    else if (usernameError) setError(usernameError);
    else if (passwordError) setError(passwordError);
    else {
      setLoading(true);
      dispatch(
        signUpThunk({
          name,
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
            <h1 className={s.title}>Hello, Friend!</h1>
            <p className={s.text}>
              Enter your personal details and start journey with us
            </p>
            <Input
              id="name"
              className={s.input}
              value={name}
              onChange={handleChangeName}
              label="name"
            />
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
            {error && (
              <p className={s.error}>
                <Error />
                <span>{error}</span>
              </p>
            )}
            <div className={s.row}>
              <button className={s.button} onClick={handleSignUp}>
                sign up
              </button>
              <Link to="/signin" className={s.link}>
                sign in
              </Link>
            </div>
          </>
        )}
      </div>
    </Page>
  );
};

export default SignUp;
