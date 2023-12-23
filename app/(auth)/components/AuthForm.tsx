"use client";

import Button from "@/app/components/Button";
import { Input } from "@/app/components/inputs/input";
import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

type Varient = "REGISTER" | "LOGIN";

export const AuthForm = () => {
  const [varient, setVarient] = useState<Varient>("LOGIN");
  const [isLoading, setIsLloading] = useState(false);

  const toggleVarient = useCallback(() => {
    if (varient === "LOGIN") {
      setVarient("REGISTER");
    } else {
      setVarient("LOGIN");
    }
  }, [varient]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {};

  return (
    <div
      className="
           mt-6
           mx-auto
           sm:w-full
           sm:max-w-md
        "
    >
      <div
        className="
          bg-white
          px-4
          py-8
          shadow
          sm:rounded-lg
          sm:px-10
          "
          style={{boxShadow:"inset -5px -5px 9px rgba(94,104,121,0.2), inset 5px 5px 9px rgba(94,104,121,0.2)"}}
      >
        <form
          className="
              space-y-4
          "
          onSubmit={handleSubmit(onSubmit)}
        >
          {varient === "REGISTER" && (
            <Input id="name" label="Name" register={register} errors={errors} />
          )}

          <Input
            id="email"
            label="Email address"
            type="email"
            register={register}
            errors={errors}
          />

          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
          />

          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {varient === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div
              className="
                          absolute
                          inset-0
                          flex
                          items-center
                      "
            >
              <div
                className="
                              w-full border-t
                             border-gray-300"
              />
            </div>

            <div
              className="
                      relative
                      flex
                      justify-center
                      "
            >
              <span
                className="
                          bg-white
                           text-sm
                           px-2
                           text-gray-500
                          "
              >
                Or Continue with
              </span>
            </div>
          </div>
        </div>

        <div
          className="
                   mt-6
                   flex
                   gap-2
              "
        >
          <AuthSocialButton icon={BsGithub} onClick={() => {}} />
          <AuthSocialButton icon={BsGoogle} onClick={() => {}} />
              </div>
              
              <div className="
              flex
              gap:2
              justify-center
              text-sm
              mt-6
              px-2
              text-gray-500
              ">
                  <div>
                      {varient==='LOGIN'?'New to chat?':'Already user to chat'}
                  </div>

                  <div onClick={toggleVarient}
                  className="underline cursor-pointer"
                  >
                      {varient==='LOGIN'?'Create an account':'Login'}
                  </div>
              </div>
      </div>
    </div>
  );
};
