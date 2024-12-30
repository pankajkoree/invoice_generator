"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Signup = () => {
  return (
    <div className="relative flex flex-col xl:w-[30%] xl:h-[70%] xl:left-[20%] text-slate-800 bg-green-400 items-center">
      {/* heading and suggestion caption */}
      <div className="relative flex flex-col text-center">
        <h1 className="text-xl font-semibold">Create your account</h1>
        <p>Create your profile in less than 2 minutes</p>
      </div>

      {/* credentials filling section */}
      <div className="relative flex flex-col w-full">
        {/* username */}
        <div className="relative flex flex-col xl:w-[90%] left-[5%]">
          <Label>Username</Label>
          <Input type="text" placeholder="enter your fullname" required />
        </div>
        {/* email */}
        <div>
          <Label>Email</Label>
          <Input type="text" placeholder="enter your email" required />
        </div>
        {/* password */}
        <div>
          <Label>Password</Label>
          <Input
            type="text"
            placeholder="must be at least 8 characters"
            minLength={8}
            required
          />
        </div>
      </div>

      {/* OAuth */}
      <div></div>
    </div>
  );
};

export default Signup;
