import "../styles/globals.css";


export default function RootLayout({children}:{children:React.ReactNode}) {

  return (
    <html className="scroll-smooth bg-mechanical-neutral" lang="en">
      <head>
        <title>MLVis</title>
      </head>

      <body>
        {children}
      </body>

    </html>
  )
}
