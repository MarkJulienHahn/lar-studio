import Nav from "../../components/Nav";
import Cookies from "../../components/Cookies";
import "./globals.css";

import { getCookies } from "../../sanity/sanity-utils";

export const metadata = {
  title: "Studio Lar",
  description: "Architecture, Design and Products",
  icons: {
    icon: '/icon.ico',
  },
};

export default async function RootLayout({ children }) {
  const cookies = await getCookies();

  return (
    <html lang="en">
      <body>
        <Nav />
        <Cookies cookies={cookies} />
        {children}
      </body>
    </html>
  );
}

export const revalidate = 10;
