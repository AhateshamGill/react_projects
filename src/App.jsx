
// import List from './List'

// import NewComponent from "./NewComponent"
// import UseRef from "./useRaf/UseRef"
// import UseReducer from "./useReducer/UseReducer"
// import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes,Route, Form } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import TodoList from "./Todo/TodoList"
import UseEffectBasics from "./useEffect_HooK/UseEffectBasics"
import CleanUpFunction from "./useEffect_HooK/CleanUpFunction"
import Operators from "./Short Circuits/Operators"
import Form1 from "./ControledForm/Form1"
import ObjectState from "./ControledForm/ObjectState"
import ObjectForm from "./ControledForm/ObjectForm"
function App() {

  return (
  <>
    {/* //  <List />
    // <NewComponent />
    // <UseRef />
    // <UseReducer /> */}
    {/* <Home /> */}
    {/* <Router>
    <Navbar />
    <Routes>
      <Route path="/home" element = {<Home/>} />
      <Route path="/about-us" element = {<AboutUs/>} />
      <Route path="/services" element = {<Services/>} />
      <Route path="/portfolio" element = {<Portfolio/>} />
      <Route path="*" element = 'Page Not Found' />
    </Routes>
    </Router> */}
    {/* <TodoList /> */}
    {/* <UseEffectBasics /> */}
    {/* <CleanUpFunction /> */}
    {/* <Operators /> */}
    {/* <Form1 /> */}
    {/* <ObjectState /> */}
    <ObjectForm />
    </>
  )
}

export default App
