import { useState } from "react";
import { useLoginMutation } from "../store/index";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/index";

export const LoginForm = ({ onClose }: { onClose: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await login({ email, password }).unwrap();
      console.log("Login success:", res);

      dispatch(loginSuccess({ token: res.token, email }));
      onClose();
    } catch (err: any) {
      console.error(err);
      setError(err.data?.message || "Login failed.");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-center">Log In</h2>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Email"
        className="p-2 border rounded"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
        className="p-2 border rounded"
      />
      {error && <p className="text-red-300 text-sm font-boldonse">{error}</p>}
      <button
        disabled={isLoading}
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-700 font-lalezar transition-all duration-700"
      >
        {isLoading ? "...در حال ورود به حساب کاربری" : "ورود"}
      </button>
    </form>
  );
};
