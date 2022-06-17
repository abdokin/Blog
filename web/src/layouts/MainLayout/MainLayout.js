import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'
const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col divide-y overflow-hidden bg-black py-6 text-white">
      <Header />
      <main className="flex-grow justify-items-start gap-0 divide-x overflow-hidden sm:flex">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
