import '@/styles/globals.css';

export const metadata = {
  title: 'Frontend Mentor | Body Mass Index Calculator',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/public/images/favicon-32x32.png" />
        <link
          href="public/fonts/Inter-VariableFont_slnt,wght.ttf"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
