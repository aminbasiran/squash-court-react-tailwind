import Layout from "./components/Layout/Layout"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <div className="p-8">
        <Layout>
          <Main/>
        </Layout>
      </div>
      <Footer/>
    </>
  )
}

export default App
