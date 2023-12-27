import { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`container px-5 2xl:px-[120px] ${className} mx-auto`}>
      {children}
    </div>
  );
};

export default Container;
