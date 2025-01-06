import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Root Page",
};

const RootLayout = (props: Props) => {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <div>Root Layout</div> {children}
      </body>
    </html>
  );
};

export default RootLayout;
