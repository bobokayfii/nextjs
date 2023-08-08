"use client";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { login } from "@/redux/slices/authSlice";

const Login = () => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const loginUser = async () => {
    let user = { username: "daler", password: "16061606" };
    dispatch(login({ user, router }));
  };
  return (
    <div className="text-center">
      <input type="text" placeholder="username" className="w-1/2 border mb-3" />
      <br />
      <input
        type="password"
        placeholder="password"
        className="w-1/2 border mb-3"
      />
      <br />
      <button onClick={loginUser} disabled={loading}>
        {loading ? "...loading" : "Login"}
      </button>
    </div>
  );
};

export default Login;
