import Header from "@/components/Header"
import "../styles/globals.css"
import Footer from "@/components/Footer"

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
        {/* <div>
          <Header />
        </div> */}

        {children}

        <div>
          {/* <Footer /> */}
          Fotter
        </div>
      </body>
    </html>
  )
}
