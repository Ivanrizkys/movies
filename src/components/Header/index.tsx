import { ReactNode } from "react";

interface HeaderProps {
  title: string;
  children: ReactNode;
}

const Header = ({ title, children }: HeaderProps) => {
  return (
    <>
      <h1 className="text-grey-50 font-semibold text-5xl md:text-[64px]">
        {title}
      </h1>
      {children}
    </>
  );
};

export default Header;
