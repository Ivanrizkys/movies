import Arrow from "@/icons/Arrow";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-10 bg-[#121829]/50 backdrop-blur-lg transform-gpu">
      <Container className="flex justify-between items-center py-4">
        <Link href={"/"}>
          <Image src={"/logo.png"} width={28} height={28} alt="app-logo" />
        </Link>
        <Link
          href={"/suggest-me"}
          className="text-[#A8AEBF] font-semibold text-base flex items-center gap-2"
        >
          <span>Suggest me</span>
          <div className="animate-bounce-right">
            <Arrow />
          </div>
        </Link>
      </Container>
    </nav>
  );
};

export default Navbar;
