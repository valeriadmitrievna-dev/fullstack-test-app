import React from "react";
import ReactPortal from "../portal";
import s from "./index.module.scss";
import { ReactComponent as Close } from "../../assets/close.svg";

interface ModalProps {
  opened: boolean;
  close: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const Modal = ({ opened, close, children, title, className }: ModalProps) => {
  const bodyRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const body = document.body;
    if (opened && body) {
      body.style.overflow = "hidden";
    }

    return () => {
      body.style.overflowY = "auto";
    };
  }, [opened]);

  return (
    <ReactPortal wrapperId="modal-portal">
      <div className={s.overlay}>
        <div ref={bodyRef} className={s.body}>
          <div className={s.header}>
            {title}
            <button className={s.close} onClick={close}>
              <Close />
            </button>
          </div>
          {children}
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
