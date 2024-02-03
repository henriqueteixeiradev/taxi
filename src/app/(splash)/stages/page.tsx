"use client";

import Image from "next/image";
import { Logo } from "@/components/partials/Logo";
import { Heading } from "@/components/partials/Heading";
import { WaveButton } from "@/components/partials/WaveButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

const data = [
  {
    id: "1",
    title: "Multiplied",
    subtitle: "earnings",
    description: "Perceive up to 3 times the amount of the ride",
    image: "/img/taxi_car_front.png",
  },
  {
    id: "2",
    title: "Exceptional",
    subtitle: "bonuses",
    description: "Up to 100$ welcome bonus the fast week.",
    image: "/img/taxi_car_front_to_left.png",
  },
  {
    id: "3",
    title: "Quick",
    subtitle: "start",
    description: "Your registration is validate within 12 hours.",
    image: "/img/taxi_car_back_to_right.png",
  },
];

export default function StagesPages() {
  const [current, setCurrent] = useState(0);

  const router = useRouter();

  function handleNext() {
    setCurrent((prev) => {
      if (prev === data.length - 1) {
        router.push("/");
        return 0;
      } else {
        return prev + 1;
      }
    });
  }

  return (
    <section className="flex flex-col items-center px-8 relative">
      <div className="mt-20">
        <Logo intent="small" />
      </div>

      <div className="mt-[5.438rem] w-full min-h-[300px] flex justify-center items-center ">
        <Image
          src={data[current].image}
          alt="taxi car front"
          width={292}
          height={292}
          quality={100}
          priority
        />
      </div>

      <div className="flex items-center justify-between w-full mt-[4.375rem]">
        <div>
          <Heading level={1} color={"primary"} font={"black"}>
            {data[current].title}
          </Heading>
          <Heading level={2} font={"bold"}>
            {data[current].subtitle}
          </Heading>
          <p className="text-base max-w-[196px] mt-2">
            {data[current].description}
          </p>
        </div>

        <button
          onClick={handleNext}
          className="flex translate-x-[20px] z-10 items-center justify-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] shadow-white  rounded-full right-[10px] w-[4.938rem] h-[4.938rem]"
        >
          <svg
            width="30"
            height="50"
            viewBox="0 0 35 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M30 5L7 28L28.5 50.5"
              stroke="white"
              stroke-width="9"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>

      <WaveButton />
    </section>
  );
}
