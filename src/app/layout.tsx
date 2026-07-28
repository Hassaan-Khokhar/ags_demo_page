import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arqam Grammar Schools | Excellence in Education",
  description: "Arqam Grammar Schools - Excellence in Education",
  icons: {
    icon: "https://arqamgrammarschools.edu.pk/storage/images/qH7mU6W117jPzS2a7tJdID32kGikF0k09Y8a35e7.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-[#f7f9fb] text-[#191c1e]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
