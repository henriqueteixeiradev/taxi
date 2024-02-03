"use client";

import { usePathname } from "next/navigation";

type SmallCircleEffectsShadowSVGProps = "small" | "normal";

export function SmallCircleEffectsShadowSVG({
  intent = "normal",
}: {
  intent?: SmallCircleEffectsShadowSVGProps;
}) {
  const usePath = usePathname();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={65}
      height={65}
      fill="none"
      className={usePath === "/" ? "pingpong-ball" : ""}
    >
      <g
        filter="url(#a)"
        className={intent === "small" ? "scale-[47.61%]" : ""}
      >
        <circle cx={32.5} cy={32.5} r={10.5} fill="#FFBC07" />
      </g>
      <defs>
        <filter
          id="a"
          width={63.336}
          height={63.336}
          x={0.832}
          y={0.832}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={0.252} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.737255 0 0 0 0 0.027451 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_0_28" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={0.504} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.737255 0 0 0 0 0.027451 0 0 0 1 0" />
          <feBlend
            in2="effect1_dropShadow_0_28"
            result="effect2_dropShadow_0_28"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={1.764} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.737255 0 0 0 0 0.027451 0 0 0 1 0" />
          <feBlend
            in2="effect2_dropShadow_0_28"
            result="effect3_dropShadow_0_28"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={3.528} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.737255 0 0 0 0 0.027451 0 0 0 1 0" />
          <feBlend
            in2="effect3_dropShadow_0_28"
            result="effect4_dropShadow_0_28"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={6.048} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.737255 0 0 0 0 0.027451 0 0 0 1 0" />
          <feBlend
            in2="effect4_dropShadow_0_28"
            result="effect5_dropShadow_0_28"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={10.584} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.737255 0 0 0 0 0.027451 0 0 0 1 0" />
          <feBlend
            in2="effect5_dropShadow_0_28"
            result="effect6_dropShadow_0_28"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect6_dropShadow_0_28"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
