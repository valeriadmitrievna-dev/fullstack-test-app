import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/input";
import Page from "../../components/page";
import s from "./index.module.scss";
import { ReactComponent as Error } from "../../assets/error.svg";

const SignIn = () => {
  return (
    <Page className={s.page}>
      <div className={s.form}>
        <h1 className={s.title}>Welcome Back!</h1>
        <p className={s.text}>
          To keep connected with us please login with your personal info
        </p>
        <Input
          id="username"
          className={s.input}
          value="lrvlrr"
          onChange={() => {}}
          label="username"
        />
        <Input
          id="password"
          className={s.input}
          value="1231231"
          onChange={() => {}}
          label="password"
          type="password"
        />
        <p className={s.error}>
          <Error />
          <span>some random error, for example invalid password</span>
        </p>
        <div className={s.row}>
          <button className={s.button}>sign in</button>
          <Link to="/signup" className={s.link}>
            sign up
          </Link>
        </div>
      </div>
    </Page>
  );
};

export default SignIn;
