import Nav from "../../components/Nav";
import Cookies from "../../components/Cookies";
import "./globals.css";

import { getCookies } from "../../sanity/sanity-utils";

export const metadata = {
  title: "LAR STUDIO",
  description: "Architecture, Design and Products",
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
