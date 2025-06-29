import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";

const Login = () => {
  const [signState, setSignState] = useState("Đăng Nhập");

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="Logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState === "Đăng Kí" ? (
            <input type="text" placeholder="Tên đăng nhập" />
          ) : (
            <> </>
          )}

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mật khẩu" />
          <button type="submit">Đăng Nhập</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Nhớ mật khẩu</label>
            </div>
            <p>
              Cần giúp đỡ ?  <a href="/help">Liên hệ hỗ trợ</a>
            </p>
          </div> 
        </form>
        <div className="form-switch">
            {signState === "Đăng Nhập" ?<p>
            Mới sử dụng Netflix? <span onClick={() => setSignState("Đăng Kí")}>Đăng ký ngay</span>
          </p> :  <p>
            Đã có tài khoản? <span onClick={() => setSignState("Đăng Nhập")}>Đăng nhập</span>
          </p> }
        </div>
      </div>
    </div>
  );
};

export default Login;
