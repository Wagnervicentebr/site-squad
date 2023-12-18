import Header from "@/components/Header"
import "../styles/globals.css"
import Footer from "@/components/Footer"
import React from "react"

export const metadata = {
  title: 'Squad Premium',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

          <Footer />
      </body>
    </html>
  )
}
