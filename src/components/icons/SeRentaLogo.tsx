import React from "react";

type IconProps = {
  size?: number;
  color?: string;
};

export const SeRentaIcon = ({
  size = 36,
  color = "currentColor",
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* pin */}
      <path
        d="M32 2C20 2 10 12 10 24c0 14 22 38 22 38s22-24 22-38C54 12 44 2 32 2z"
        fill={color}
      />

      {/* círculo interior */}
      <circle
        cx="32"
        cy="24"
        r="14"
        fill={color}
      />

      {/* casa */}
      <path
        d="M24 26 L32 20 L40 26 V36 H34 V30 H30 V36 H24 Z"
        fill="#000"
      />
    </svg>
  );
};

type LogoProps = {
  /** Tamaño del ícono. Default brand: 36px */
  iconSize?: number;
  /** Tamaño del texto. Default brand: 20px */
  fontSize?: number;
  /** Color del ícono. Default: "currentColor" */
  color?: string;
};

export const SeRentaLogo = ({
  iconSize = 36,
  fontSize = 20,
  color = "currentColor",
}: LogoProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <SeRentaIcon
        size={iconSize}
        color={color}
      />
      <span
        style={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontSize,
          fontWeight: 600,
          letterSpacing: -0.5,
          lineHeight: 1,
        }}
      >
        SE RENTA
      </span>
    </div>
  );
};
