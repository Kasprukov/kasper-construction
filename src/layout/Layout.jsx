import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <main className="app__main" id="main" tabIndex={-1}>{children}</main>
      <Footer />
    </div>
  )
}
