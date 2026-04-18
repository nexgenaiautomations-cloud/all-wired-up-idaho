import Image from "next/image";

interface LogoProps {
  variant?: "nav" | "full";
  className?: string;
}

export function Logo({ variant = "nav", className = "" }: LogoProps) {
  if (variant === "full") {
    return (
      <Image
        src="/logo.jpg"
        alt="All Wired Up Idaho"
        width={950}
        height={1685}
        className={className}
        priority
      />
    );
  }

  // nav: landscape crop showing "ALL WIRED UP IDAHO" + lower Idaho outline
  return (
    <Image
      src="/logo-nav.jpg"
      alt="All Wired Up Idaho"
      width={950}
      height={809}
      className={className}
      priority
    />
  );
}
