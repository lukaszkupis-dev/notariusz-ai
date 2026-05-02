import './globals.css'

export const metadata = {
  title: 'Notariusz w świecie AI',
  description: 'Portal dla nowoczesnych notariuszy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
