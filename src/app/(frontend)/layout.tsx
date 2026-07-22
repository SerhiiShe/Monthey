import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      {/* flex flex-col min-h-screen прижимает футер к низу экрана */}
      <body className="bg-white text-gray-900 antialiased flex flex-col min-h-screen">
        <Header />

        {/* Основной контент страницы (flex-grow позволяет ему занять всё свободное место) */}
        <div className="grow">{children}</div>

        <Footer />
      </body>
    </html>
  )
}
