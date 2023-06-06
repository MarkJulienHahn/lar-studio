import Nav from "../../components/Nav";
import "./globals.css";

export const metadata = {
  title: "Studio Lar",
  description: "Architecture, Design and Products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
