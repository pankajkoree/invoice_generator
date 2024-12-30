"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Login = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/users/login", user);
      if (response.status === 200) {
        toast.success("logged in successful")
        router.push("/");
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };
  return (
    <div className="flex items-center">
      <div className="relative flex flex-col xl:w-[22%] xl:left-[39%] top-[200px] text-slate-600 items-center gap-4 p-4 border-4 border-white rounded-xl bg-purple-100">
        {/* heading and suggestion caption */}
        <div className="relative flex flex-col text-center">
          <h1 className="text-2xl font-semibold text-slate-800">
            Login to your account
          </h1>
        </div>

        {/* credentials filling section */}
        <form
          className="relative flex flex-col xl:w-[90%] gap-4"
          onSubmit={onLogin}
        >
          {/* email */}
          <div className="relative flex flex-col gap-2">
            <Label className="text-[16px]">Email</Label>
            <Input
              className="relative flex border-2 border-gray-400 focus:border-purple-500 focus:border-2"
              type="text"
              placeholder="enter your email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>
          {/* password */}
          <div className="relative flex flex-col gap-2">
            <Label className="text-[16px]">Password</Label>
            <Input
              className="relative flex border-2 border-gray-400 focus:border-purple-500 focus:border-2"
              type="password"
              placeholder="must be at least 8 characters"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </div>

          <Button type="submit" variant="signup">Signup</Button>
          <p className="text-sm text-center mt-4 text-gray-700 dark:text-gray-300">
            Forgot{" "}
            <Link
              href={`/forgotCredentials`}
              className="text-blue-500 hover:underline"
            >
              username/password?
            </Link>
          </p>
          <p className="text-sm text-center text-gray-700 dark:text-gray-300">
            Don't have an account?{" "}
            <Link href={`/signup`} className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
