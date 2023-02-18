import React from "react";
import Header from "./components/Header.js";
import New from "./components/New.js";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Articles from "./components/Articles.js";

const Router= () =>{
    
    return(

        <BrowserRouter>

            <Header/>

            <Routes>
                <Route exact path="/" element={<New/>}></Route>
                <Route exact path="/articles" element={<Articles/>}></Route>
            </Routes>
        
        </BrowserRouter>

    );

};

export default Router;