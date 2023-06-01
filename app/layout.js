import './globals.css'


export const metadata = {
  title: 'Quiz Star',
  description: 'This is a quiz app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#000925] overflow-x-hidden" >{children}</body>
    </html>
  )
}
