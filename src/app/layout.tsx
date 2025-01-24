import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";

import Navbar from "@/components/navbar/navbar.component";
import BootstrapClient from "@/components/bootstrap/bootstrap-loader.component";
import LinkOptions from "@/interfaces/navbar/navbar-options.interface";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Compara Carreras - Inicio",
  description: "Generated by create next app",
};

let linksOptions: LinkOptions[] = []

if (process.env.NODE_ENV === 'development')
  linksOptions = [
    {
      sectionName: 'Inicio',
      url: "/",
      title: "inicio"
    },
    {
      sectionName: 'Compara',
      url: "/compara",
      title: "Compara"
    },
    {
      sectionName: 'Las 10 más',
      url: "/las-10-mas",
      title: "Las 10 más"
    },
    {
      sectionName: 'Metodología',
      url: "/metodologia",
      title: "Metodología"
    },
    {
      sectionName: 'Preguntas Frecuentes',
      url: "/faq",
      title: "FAQ"
    },
  ]
else
  linksOptions = [
    {
      sectionName: 'Inicio',
      url: "/compara-carreras-v2",
      title: "inicio"
    },
    {
      sectionName: 'Compara',
      url: "/compara-carreras-v2/compara",
      title: "Compara"
    },
    {
      sectionName: 'Las 10 más',
      url: "/compara-carreras-v2/las-10-mas",
      title: "Las 10 más"
    },
    {
      sectionName: 'Metodología',
      url: "/compara-carreras-v2/metodologia",
      title: "Metodología"
    },
    {
      sectionName: 'Preguntas Frecuentes',
      url: "/compara-carreras-v2/faq",
      title: "FAQ"
    },
  ]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Import Google Icon Font */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar linksOptions={linksOptions} />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
