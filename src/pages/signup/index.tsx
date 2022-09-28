import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/input";
import Page from "../../components/page";
import s from "./index.module.scss";
import { ReactComponent as Error } from "../../assets/error.svg";

const SignUp = () => {
  return (
    <Page className={s.page}>
      <div className={s.form}>
        <h1 className={s.title}>Hello, Friend!</h1>
        <p className={s.text}>
          Enter your personal details and start journey with us
        </p>
        <Input
          id="name"
          className={s.input}
          value="Valeria"
          onChange={() => {}}
          label="name"
        />
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
          <button className={s.button}>sign up</button>
          <Link to="/signin" className={s.link}>
            sign in
          </Link>
        </div>
      </div>
    </Page>
  );
};

export default SignUp;
