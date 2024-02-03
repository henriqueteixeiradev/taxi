export function ArrowButtonSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={50}
      height={50}
      fill="none"
    >
      <path
        fill="url(#a)"
        d="M50 50h50v50H50z"
        transform="rotate(-180 50 50)"
      />
      <defs>
        <pattern
          id="a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#b" transform="scale(.0039)" />
        </pattern>
        <image
          xlinkHref="data:image/png;base64,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"
          id="b"
          width={256}
          height={256}
        />
      </defs>
    </svg>
  );
}
