import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  if (variant === "light") {
    return (
      <Image
        src="/logo.png"
        alt="All Wired Up Idaho"
        width={1838}
        height={2580}
        className={className}
        priority
      />
    );
  }

  // dark: cream-colored logo for use on brand blue backgrounds
  return (
    <Image
      src="/logo-cream.png"
      alt="All Wired Up Idaho"
      width={1838}
      height={2580}
      className={className}
      priority
    />
  );
}
