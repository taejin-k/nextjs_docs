import { Metadata } from "next";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  first: ReactNode;
  second: ReactNode;
};

export const metadata: Metadata = {
  title: "ParallelRoutes Page",
};

const ParallelRoutesLayout = (props: Props) => {
  const { children, first, second } = props;

  return (
    <div>
      ParallelRoutesLayout {children} {first} {second}
    </div>
  );
};

export default ParallelRoutesLayout;
