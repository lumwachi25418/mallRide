import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path ='/'element={<Layout>
                Home
            </Layout>}
            />
            
        </Routes>
        </BrowserRouter>
    )
}
export default Router