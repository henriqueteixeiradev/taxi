import Image from "next/image";
import { Logo } from "@/components/partials/Logo";
import { Heading } from "@/components/partials/Heading";
import { WaveButton } from "@/components/partials/WaveButton";

export default function OneStagePage() {
  return (
    <section className="flex flex-col items-center px-8 relative">
      <div className="mt-20">
        <Logo intent="small" />
      </div>

      <div className="mt-[5.438rem]">
        <Image
          src="/img/taxi_car_front.png"
          alt="taxi car front"
          width={292}
          height={292}
          quality={100}
          priority
        />
      </div>

      <div className="w-full mt-[4.375rem]">
        <Heading level={1} color={"primary"} font={"black"}>
          Multiplied
        </Heading>
        <Heading level={2} font={"bold"}>
          earnings
        </Heading>
        <p className="text-base max-w-[196px] mt-2">
          Perceive up to 3 times the amount of the ride
        </p>
      </div>

      <WaveButton />
    </section>
  );
}
