import {Inter,  Roboto} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from './../components/Footer';



// const inter = Inter({
//   weight: [`400`,`500`,`700`],
//   subsets: ["latin"],
  
// });
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})
export const metadata = {
  title:{
    default: "Next Meals",
    template: "%s | Next Meals"
  },
  description: "A simple meal planner app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={roboto.className}
      >
        <Navbar/>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
