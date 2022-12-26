import React from "react";
import { useNavigate } from "react-router-dom";
import Headers from "../headers/Headers";
import styles from "./ErrorFallback.module.scss";

export function ErrorFallback() {
  return (
    <div role="alert" className={styles.errorFallback}>
      <Headers type={Headers.Type.H2}>Something went wrong:</Headers>
    </div>
  );
}

export function onReset() {
  const navigate = useNavigate();
  return navigate("/");
}
