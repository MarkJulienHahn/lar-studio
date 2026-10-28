import Nav from "../../components/Nav";
import Cookies from "../../components/Cookies";
import "./globals.css";

import { getCookies } from "../../sanity/sanity-utils";
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "./seo";

export const metadata = {
  metadataBase: new URL("https://www.larstudio.de"),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  icons: {
    icon: '/icon.ico',
  },
};

export default async function RootLayout({ children }) {
  const cookies = await getCookies();

  return (
    <html lang="de">
      <body>
        <Nav />
        <Cookies cookies={cookies} />
        {children}
      </body>
    </html>
  );
}

export const revalidate = 10;
