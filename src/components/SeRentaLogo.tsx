import React from "react";
import { SeRentaIcon } from "@/components/icons/SeRentalogo";

type LogoProps = {
  /** Tamaño del ícono en px. Default: 36 */
  iconSize?: number;
  /** Tamaño del texto en px. Default: 20 */
  fontSize?: number;
  /** Color del ícono (fill). Default: "currentColor" */
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
