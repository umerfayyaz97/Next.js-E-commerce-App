import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
  afterAuth(auth, req) {
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
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

//
