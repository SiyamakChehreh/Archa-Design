import { useState } from "react";
import { useSignupMutation } from "../store/index";

export const SignupForm = ({ onClose }: { onClose: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const [signup, { isLoading }] = useSignupMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const res = await signup({ email, password }).unwrap();
      console.log("Signup success:", res);
      onClose();
    } catch (err: any) {
      console.error(err);
      setError(err.data?.message || "Signup failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
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
      <input
        onChange={(e) => setRepeatPassword(e.target.value)}
        value={repeatPassword}
        type="password"
        placeholder="Repeat Password"
        className="p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-indigo-400 text-white py-2 rounded hover:bg-indigo-600 transition-all duration-700 font-lalezar"
      >
        عضویت
      </button>
    </form>
  );
};
