"use client";

import { useEffect, useMemo, useState } from "react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { EyeIcon, EyeOffIcon, X } from "lucide-react";
import Link from "next/link";
import { set } from "mongoose";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("customer");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({});

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateUsername = (username: string) => {
    return true;
  };

  const validateEmail = (email: string) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const validatePassword = (password: string) =>
    password.match(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    );

  const isUsernameInvalid = useMemo(() => {
    return validateUsername(username) ? false : true;
  }, [username]);

  const isEmailInvalid = useMemo(() => {
    if (email === "") return false;
    return validateEmail(email) ? false : true;
  }, [email]);

  const isPasswordInvalid = useMemo(() => {
    if (password === "") return false;
    return validatePassword(password) ? false : true;
  }, [password]);

  const isConfirmedPasswordInvalid = useMemo(() => {
    if (confirmedPassword === "") return false;
    return confirmedPassword === password ? false : true;
  }, [confirmedPassword, password]);

  useEffect(() => {
    setFormData({
      username,
      email,
      userType,
      password,
    });
  }, [username, email, userType, password]);

  const handleSubmit = async () => {
    const res = await fetch("/api/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json());
    console.log(formData, res);
  };

  return (
    <main className="w-96 flex justify-between">
      <Card className="w-full bg-[var(--light)] dark:bg-[var(--dark)]">
        <CardHeader className="flex p-4">
          <Link href="/" className="absolute top-4 right-4">
            <Button isIconOnly variant="light" size="sm">
              <X size={24} />
            </Button>
          </Link>
          <div className="w-full flex flex-col items-center gap-y-1">
            <p className="text-2xl font-bold">Sign Up</p>
            <p className="text-sm text-gray-500 font-medium">Make an account</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <form className="flex flex-col gap-y-4 w-full pb-4 px-4">
            <div className="flex gap-x-6 items-end">
              <Input
                value={username}
                onValueChange={setUsername}
                type="text"
                label="Username (Unique)"
                variant="underlined"
                isInvalid={isUsernameInvalid}
                errorMessage={isUsernameInvalid && "Please enter a valid email"}
                classNames={{
                  input: "text-base",
                  label: "text-base",
                }}
              />
              <Button className="bg-[var(--danger)] text-white text-base font-medium">
                Check
              </Button>
            </div>
            <Input
              value={email}
              onValueChange={setEmail}
              type="email"
              label="Email"
              variant="underlined"
              isInvalid={isEmailInvalid}
              errorMessage={isEmailInvalid && "Please enter a valid email"}
              classNames={{
                input: "text-base",
                label: "text-base",
              }}
            />
            <RadioGroup
              value={userType}
              onValueChange={setUserType}
              label="Select user type"
              color="default"
              orientation="horizontal">
              <Radio value="customer">Customer</Radio>
              <Radio value="seller">Seller</Radio>
            </RadioGroup>
            <Input
              value={password}
              onValueChange={setPassword}
              type={isVisible ? "text" : "password"}
              label="Password"
              variant="underlined"
              isInvalid={isPasswordInvalid}
              onCopy={(e) => e.preventDefault()}
              errorMessage={
                isPasswordInvalid &&
                "Password must contain at least 8 characters, one letter, one number and one special character"
              }
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}>
                  {isVisible ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                </button>
              }
              classNames={{
                input: "text-base",
                label: "text-base",
              }}
            />
            <Input
              value={confirmedPassword}
              onValueChange={setConfirmedPassword}
              type={isVisible ? "text" : "password"}
              label="Confirm Password"
              variant="underlined"
              isInvalid={isConfirmedPasswordInvalid}
              onCopy={(e) => e.preventDefault()}
              errorMessage={
                isConfirmedPasswordInvalid && "Passwords do not match"
              }
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}>
                  {isVisible ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                </button>
              }
              classNames={{
                input: "text-base",
                label: "text-base",
              }}
            />
            <Button
              onClick={handleSubmit}
              className="mt-2 text-medium font-medium bg-[var(--prim)] text-white">
              Sign Up
            </Button>
          </form>
        </CardBody>
        <Divider />
        <CardFooter className="w-full flex flex-col justify-center p-4">
          <p>
            Already have an account?
            <Link
              href="/auth/sign-in"
              className="ml-2 text-teal-700 font-medium hover:font-semibold">
              Sign In
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
};

export default SignUp;
