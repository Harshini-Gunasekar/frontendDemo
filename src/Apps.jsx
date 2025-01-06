import React from "react";

import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

import UpdateUser from "./UpdateUser";
import User from "./User";
import Createuser from "./CreateUser";


const Apps = () => {
    return (
        <div>
            {/* <h1>hello apps</h1> */}
            <Router>
                <Routes>
                    <Route path="/" element={<User/>} />
                    <Route path="/create" element={<Createuser/>} />  
                    <Route path="/update/:id" element={<UpdateUser/>} />
                
                </Routes>
            </Router>    
        </div>
    );
};

export default Apps;