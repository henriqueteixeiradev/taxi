import { LogoSVG } from "@/app/assets/LogoSVG";
import { SmallCircleEffectsShadowSVG } from "@/app/assets/SmallCircleEffectsShadowSVG";

type LogoProps = "small" | "normal";

export function Logo({ intent = "normal" }: { intent?: LogoProps }) {
  return (
    <div className="relative">
      <LogoSVG intent={intent} />

      <div
        className={`absolute ${
          intent === "normal" ? "-right-8 -top-12" : "-right-12 -top-2"
        }`}
      >
        <SmallCircleEffectsShadowSVG intent={intent} />
      </div>
    </div>
  );
}
