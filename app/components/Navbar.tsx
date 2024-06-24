import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../components/myLogo2.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={logo}
        alt="logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <Link href="/" className="text-primary text-xl font-semibold">
        BinkNextJs
      </Link>
      <Link href="/">Home</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
