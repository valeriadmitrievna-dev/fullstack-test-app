import React from "react";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import s from "./index.module.scss";
import { ReactComponent as Settings } from "../../assets/settings.svg";
import { ReactComponent as Logout } from "../../assets/logout.svg";
import { Link } from "react-router-dom";
import { logout } from "../../redux/slice";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const dispatch = useAppDispatch();
  const header = classNames(s.header, className);
  const { user } = useAppSelector((state) => state.root);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={header}>
      <div>
        <p className={s.name}>{user?.name}</p>
        <p className={s.username}>@{user?.username}</p>
      </div>
      <div className={s.manage}>
        <Link to="/settings" className={s.icon}>
          <Settings />
        </Link>
        <button className={s.icon} onClick={handleLogout}>
          <Logout />
        </button>
      </div>
    </header>
  );
};

export default Header;
