import "../styles/globals.css";


export default function RootLayout({children}:{children:React.ReactNode}) {

  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <title>MLVis</title>
      </head>

      <body>
        {children}
      </body>

    </html>
  )
}
