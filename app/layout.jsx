import { JetBrains_Mono, jetBrains_Mono} from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Pagetransition from "@/components/pagetransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"],
  Variable: "--font-jetbrainsMono",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"jetbrainsMono.Variable, "}>
        <Header/>
        
        <Pagetransition>{children} </Pagetransition>
        <StairTransition/>

        
        </body>
    </html>
  );
}