import { UserButton } from "@clerk/nextjs/app-beta";
import Link from "next/link";

import React from "react";

const page = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
export default page;
