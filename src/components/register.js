import { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { postAuth } from "../redux/action/authAction";

const Register = () => {
  const { status } = useSelector((state) => state);
  console.log("status register", status);

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [data, setData] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      password: password,
    };

    dispatch(postAuth(payload));

    // setData(statusRegister.data);
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <label id="email">Email</label>
      <input
        placeholder="Email"
        type="text"
        id="email"
        name="email"
        onChange={(e) => handleEmail(e)}
      ></input>
      <label id="password">Password</label>
      <input
        placeholder="Password"
        type="text"
        id="password"
        name="password"
        onChange={(e) => handlePassword(e)}
      ></input>
      <button onClick={(e) => handleSubmit(e)}>Register</button>
      {!!status.token && "Register Berhasil"}
    </div>
  );
};

export default Register;
