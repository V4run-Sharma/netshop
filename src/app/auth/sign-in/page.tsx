"use client";

import { useMemo, useState } from "react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import { EyeIcon, EyeOffIcon, X } from "lucide-react";
import Link from "next/link";

const SignIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateEmail = (email: string) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const validatePassword = (password: string) =>
    password.match(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    );

  const isEmailInvalid = useMemo(() => {
    if (email === "") return false;
    return validateEmail(email) ? false : true;
  }, [email]);

  const isPasswordInvalid = useMemo(() => {
    if (password === "") return false;
    return validatePassword(password) ? false : true;
  }, [password]);

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
            <p className="text-2xl font-bold">Sign In</p>
            <p className="text-sm text-gray-500 font-medium">
              Log in to your account
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <form className="flex flex-col gap-y-4 w-full pb-4 px-4">
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

            <Button className="mt-2 text-medium font-medium bg-[var(--prim)] text-white">
              Sign In
            </Button>
          </form>
        </CardBody>
        <Divider />
        <CardFooter className="w-full flex justify-center p-4">
          <p>
            Don't have an account?
            <Link
              href="/auth/sign-up"
              className="ml-2 text-teal-700 font-medium hover:font-semibold">
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
};

export default SignIn;
