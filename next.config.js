/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  // async middleware() {
  //   const auth = await import("./middleware");
  //   return auth.default;
  // },
};

module.exports = nextConfig;
