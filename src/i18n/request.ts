import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale) {
    const headersList = await headers();
    const intlLocale = headersList.get("x-next-intl-locale");
    const pathname = headersList.get("x-invoke-path") ?? headersList.get("x-pathname") ?? "";
    const firstSegment = pathname.split("/")[1];
    if (intlLocale && (routing.locales as readonly string[]).includes(intlLocale)) {
      locale = intlLocale;
    } else if (firstSegment && (routing.locales as readonly string[]).includes(firstSegment)) {
      locale = firstSegment;
    }
  }

  if (!locale || !(routing.locales as readonly string[]).includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
