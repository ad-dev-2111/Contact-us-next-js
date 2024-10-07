import "./globals.css";
import Link from "next/link";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto">
            <Link href="/" className="text-white mx-4">
              Home
            </Link>
            <Link href="/contact" className="text-white mx-4">
              Contact Us
            </Link>
          </div>
        </nav>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
