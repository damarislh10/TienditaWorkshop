import ListComponent from "../components/ListComponent";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import DetailProduct from "../components/DetailProduct";

function AppRouter() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<ListComponent/>}/>
          <Route path='/product/:id' component={<DetailProduct/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>  
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
