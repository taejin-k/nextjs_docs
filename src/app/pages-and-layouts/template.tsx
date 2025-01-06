"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

const PagesAndLayoutsTemplate = (props: Props) => {
  const { children } = props;

  const [value, setValue] = useState("");

  return (
    <div>
      PagesAndLayoutsTemplate{" "}
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <Link href="/pages-and-layouts/dashboard">Dashboard Page Link</Link>
      <Link href="/pages-and-layouts/list">List Page Link</Link>
      {children}
    </div>
  );
};

export default PagesAndLayoutsTemplate;
