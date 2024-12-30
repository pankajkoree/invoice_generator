"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/users/signup", user);
      toast.success("Successfully signed up");
      router.push("/login");
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
            Create your account
          </h1>
          <p className="text-slate-500">
            Create your profile in less than 2 minutes
          </p>
        </div>

        {/* credentials filling section */}
        <form
          className="relative flex flex-col xl:w-[90%] gap-4"
          onSubmit={onSignup}
        >
          {/* username */}
          <div className="relative flex flex-col gap-2">
            <Label className="text-[16px]">Username</Label>
            <Input
              className="relative flex border-2 border-gray-400 focus:border-purple-500 focus:border-2"
              type="text"
              placeholder="enter your fullname"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              required
            />
          </div>
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

          <Button variant="signup">Signup</Button>
          <p className="relative flex justify-center gap-1">
            Already have an account?{" "}
            <Link href="/login" className="hover:underline text-blue-400">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
