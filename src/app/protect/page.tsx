import { UserButton } from "@clerk/nextjs/app-beta";

import React from "react";

const page = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
export default page;
