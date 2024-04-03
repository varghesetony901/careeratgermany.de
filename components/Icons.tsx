import { LucideProps } from "lucide-react";

export const Icons = {
  logo: (props: LucideProps) => (
    <img
      src="/logo.jpg"
      alt="Logo"
      className="w-56"
    />
  ),
  smallLogo: (props: LucideProps) => (
    <img
      src="/logoSmall.jpg"
      alt="LogoSmall"
      className="w-10 "
    />
  ),
};
