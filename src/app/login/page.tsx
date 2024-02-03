"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import InputPhone from "@/components/partials/InputPhone";
import { Logo } from "@/components/partials/Logo";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";

const schema = z.object({
  phone: z.string(),
});

type FormValues = z.infer<typeof schema>;

const socialButtons = [
  {
    name: "Google",
    image: "/img/logo_google.png",
  },
  {
    name: "Facebook",
    image: "/img/logo_facebook.png",
  },
  {
    name: "Apple",
    image: "/img/logo_apple.png",
  },
  {
    name: "Instagram",
    image: "/img/logo_instagram.png",
  },
];

export default function LoginPage() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  function handleLogin(data: FormValues) {
    return alert(`Você esta logado com o telefone ${data.phone}`);
  }

  return (
    <section className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center mt-[9.688rem]">
        <Image
          src="/img/taxi_car_front_black_white.png"
          alt="Image taxi fron black and white"
          width={303}
          height={267}
          quality={100}
          priority
        />

        <Logo intent="small" />
      </div>

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col h-full flex-1 mt-[2.875rem]"
      >
        <label className="mx-8 mb-[1.563rem] text-xl font-bold" htmlFor="phone">
          Phone Number
        </label>

        <div className="px-8">
          <InputPhone
            error={errors.phone?.message || ""}
            code="+94"
            type="text"
            {...register("phone")}
          />
        </div>

        <div className="bg-brand-cards flex flex-col flex-1 mt-10 rounded-t-[40px] px-[55px]">
          <small className="text-[0.938rem] text-white/50 mt-4 text-center">
            or sign up with
          </small>

          <div className="flex gap-10 items-center w-full mt-[42px] justify-center">
            {socialButtons.map((button) => (
              <button
                className="shadow-social-button p-[10px] rounded-[15px]"
                key={button.name}
                type="button"
              >
                <Image
                  src={button.image}
                  alt={button.name}
                  width={30}
                  height={30}
                  quality={100}
                />
              </button>
            ))}
          </div>

          <button
            type="submit"
            className="uppercase font-bold text-xl bg-brand-primary py-4 rounded-[13px] mt-8 shadow-submit-button"
          >
            LOGIN
          </button>
        </div>
      </form>
    </section>
  );
}
