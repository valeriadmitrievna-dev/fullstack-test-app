import { getStringWithNormalSpaces } from "./helpers";

export const validateUsername = (username: string) => {
  if (!username) {
    return "Username is required";
  } else if (getStringWithNormalSpaces(username).length < 6) {
    return "Username length should be 6 or greater";
  } else {
    return false;
  }
};

export const validateName = (name: string) => {
  if (!name) {
    return "Name is required";
  } else if (getStringWithNormalSpaces(name).length < 4) {
    return "Name length should be 4 or greater";
  } else {
    return false;
  }
};

export const validatePassword = (password: string) => {
  if (!password) {
    return "Password is required";
  } else if (getStringWithNormalSpaces(password).length < 6) {
    return "Password length should be 6 or greater";
  } else {
    return false;
  }
};

export const validateTaskTitle = (title: string) => {
  if (!title) {
    return "Title is required";
  } else if (getStringWithNormalSpaces(title).length < 4) {
    return "Title length should be 4 or greater";
  } else {
    return false;
  }
};