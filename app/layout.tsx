import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

const archivo = Archivo({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Mastering Prompting - Speak AI | Learn to Command AI Like a Pro",
  description:
    "Stop getting generic AI responses. Learn to think clearly, prompt precisely, and unlock real value from AI. The definitive guide for professionals, freelancers, and digital workers.",
  keywords:
    "AI prompting, prompt engineering, AI communication, ChatGPT, AI tools, business AI, productivity",
  authors: [{ name: "Speak AI" }],
  openGraph: {
    title: "Mastering Prompting - Speak AI",
    description: "Learn to command AI and get better results",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.className} ${archivo.variable}`}
    >
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
