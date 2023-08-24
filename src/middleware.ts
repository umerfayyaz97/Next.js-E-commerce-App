import { SignedIn } from "@clerk/clerk-react";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { RedirectUrl } from "@clerk/nextjs/dist/types/server";
import { NextResponse } from "next/server";

export default authMiddleware({
  afterAuth(auth, req, evt) {
    // Redirect users who aren't authenticated to the sign-in page,
    // except for public routes.
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    // Lock the "success" page if the user is not authenticated.
    // Redirect to sign-in, except for the "cancel" page.
    if (!auth.userId && req.nextUrl.pathname === "/success") {
      return redirectToSignIn({ returnBackUrl: "/Cart" });
    }
  },

  publicRoutes: [
    "/",
    "/sign-in",
    "/sign-up",
    "/Male",
    "/Female",
    "/Kids",
    "/All-Products",
  ],

  // afterAuth(auth, req) {
  //   if (!auth && req.url === "/Cart") {
  //     return redirectToSignIn({ returnBackUrl: req.url });
  //   }
  // },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

//
