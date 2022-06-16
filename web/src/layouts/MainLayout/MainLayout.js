import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'
const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="container w-full p-4 flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
