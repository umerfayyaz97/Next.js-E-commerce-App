import { SignedIn } from "@clerk/clerk-react";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { RedirectUrl } from "@clerk/nextjs/dist/types/server";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up"],

  afterAuth(auth, req) {
    if (!auth && req.url === "/Cart") {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
  },
  // afterAuth(auth, req) {
  // if (auth && req) {
  //   return; // return redirectToSignIn({ returnBackUrl: req.url });
  // }
  // },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

// "/Male", "/Female", "/Kids", "/All-Products"
