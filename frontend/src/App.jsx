import Footer from "./components/Footer"
import SignUpAsGuest from "./components/SignUpAsGuest"
import Header from "./components/header"
import { server } from './mocks/server.js'

function App() {
  if (process.env.NODE_ENV === 'development') {
    server.start();
  }
  return(
    <div>
      <Header/>
      <DisplayAdmin/>
      <Footer/>
    </div>
  )
}

export default App
