import Link from "next/link";
import Png from "@/public/images/logo.png";
import Image from "next/image";
import constants from "@/constants";
export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <img
        className="relative rounded-full"
        src="https://seerintelligence.com/images/logo.png"
        width={50}
        height={50}
        alt={constants.navbar.logo_alttext}
      />
    </Link>
  );
}
