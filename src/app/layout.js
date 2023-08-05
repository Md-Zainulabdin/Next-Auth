import AuthProvider from './component/AuthProvider/page'
import './globals.css'

export default function RootLayout({ children, session }) {
  return (
    <AuthProvider>
      <html lang="en">
        <head>
          <title>
            Next-Auth
          </title>
        </head>
        <body className='bg-[#fdfffc]'>
          {children}
        </body>
      </html>
    </AuthProvider>
  )
}
