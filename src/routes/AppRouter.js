import ListComponent from "../components/ListComponent";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import DetailProduct from "../components/DetailProduct";
import NavBarComponent from "../components/NavBarComponent";


function AppRouter() {
  return (
    <div >
      <Router>
      <NavBarComponent/>
   
        <Routes>
          <Route path="/" element={<ListComponent/>}/>
          <Route path='/product/:id' element={<DetailProduct/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>  
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
