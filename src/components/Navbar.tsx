"use client";

import Arrow from "@/icons/Arrow";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-10 bg-grey-900/50 backdrop-blur-lg transform-gpu">
      <Container className="flex justify-between items-center py-4">
        <Link href={"/"}>
          <Image src={"/logo.png"} width={28} height={28} alt="app-logo" />
        </Link>
        <Link
          href={"/suggest-me"}
          className={`${
            pathname === "/suggest-me" ? "text-grey-100" : "text-grey-200"
          } font-semibold text-base flex items-center gap-2`}
        >
          <span>Suggest me</span>
          <div className="animate-bounce-right">
            <Arrow
              stroke={pathname === "/suggest-me" ? "#C3C8D4" : "#A8AEBF"}
            />
          </div>
        </Link>
      </Container>
    </nav>
  );
};

export default Navbar;
