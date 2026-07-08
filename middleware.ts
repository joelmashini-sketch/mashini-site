import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/(fr|en|zh)/:path*",
    "/((?!api|_next|_vercel|apple-icon\\.png|icon\\.png|favicon\\.ico|.*\\..*).*)",
  ],
};
