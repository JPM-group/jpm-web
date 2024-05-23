import { Urbanist, Prompt} from "next/font/google";
import "./globals.css";
import Nav from "./components/Navbar";

export const urbanist = Urbanist({ 
  subsets: ["latin"],
  variable: '--font-urbanist',
});
export const prompt = Prompt({ 
  subsets: ["latin"],
  weight: ['100','200', '300', '400', '700'],
  variable: '--font-prompt',
});

export const metadata = {
  title: "JPM Group",
  description: "Generated by create next app",
  keyword: "Interactive game event program",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${prompt.variable} ${urbanist.variable}`}>
      <Nav/>
      <body>{children}
      </body>
    </html>
  );
}
