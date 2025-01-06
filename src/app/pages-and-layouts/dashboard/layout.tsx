import { Metadata } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Dashboard Page",
};

const DashboardLayout = (props: Props) => {
  const { children } = props;

  return <div>Dashboard Layout {children}</div>;
};

export default DashboardLayout;
