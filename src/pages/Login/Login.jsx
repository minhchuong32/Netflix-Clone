import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";

const Login = () => {
  const [signState, setSignState] = useState("Đăng Nhập");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user_auth = async (event) => {
    event.preventDefault();
    try {
      if (signState === "Đăng Nhập") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (err) {
      console.error("Lỗi đăng ký/đăng nhập:", err);
    }
  };

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="Logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState === "Đăng Kí" ? (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Tên đăng nhập"
            />
          ) : (
            <> </>
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Mật khẩu"
          />
          <button onClick={user_auth} type="submit">
            {signState}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Nhớ mật khẩu</label>
            </div>
            <p>
              Cần giúp đỡ ? <a href="/help">Liên hệ hỗ trợ</a>
            </p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Đăng Nhập" ? (
            <p>
              Mới sử dụng Netflix?{" "}
              <span onClick={() => setSignState("Đăng Kí")}>Đăng ký ngay</span>
            </p>
          ) : (
            <p>
              Đã có tài khoản?{" "}
              <span onClick={() => setSignState("Đăng Nhập")}>Đăng nhập</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
