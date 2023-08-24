import React from "react";
import style from "./styles.module.scss";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();

  return (
    <div className={style.container}>
      <h2>Login</h2>
    </div>
  );
}

export default Login;
