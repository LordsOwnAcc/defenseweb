import "./globals.css"
import type { Metadata } from "next"
import { Toaster } from "../components/toaster"
import  React from "react"

export const metadata: Metadata = {
  title: "DefensIQTech - World's First Smart Safety Ring",
  description:
    "Protect yourself with cutting-edge technology at your fingertips. DefensIQTech brings you the world's first smart safety ring.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

