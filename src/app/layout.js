import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "../styles/globals.css";

export const metadata = {
  title: "Dyadic Research",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam minus nam soluta voluptatibus id.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
