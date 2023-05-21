import './globals.css'
import { Inter } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { cloneElement } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, props }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       {children}
        {/* <UserProvider>
            {cloneElement(children, props)}
        </UserProvider> */}
      </body>
    </html>
  )
}
// import './globals.css'
// import Link from 'next/link'
// export const metadata = {
//   title: 'tets1 ',
//   description: 'Generated by create next app',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//       <header>
//       <Link href="/renderData">test </Link>
//       </header>
//         {children}
//       </body>
//     </html>
//   )
// }