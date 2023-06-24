import './globals.css'

export const metadata = {
  title: 'Anthony | Portfolio',
  description: 'Created by Anthony Dulguime',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body>   
        {children}</body>
    </html>
  )
}
