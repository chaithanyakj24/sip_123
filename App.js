import{BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Destination from "./components/Destination";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle" 

const App=()=>{
  return(
    <>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
       <Route path="Destination" element={<Destination />} />
       <Route path="About" element={<About />} />
     </Route>
   </Routes>
 </BrowserRouter>
 </>
  )
};
export default App