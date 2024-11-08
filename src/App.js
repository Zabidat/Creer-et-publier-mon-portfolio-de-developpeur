import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Header from "./components/Header/Header"; 
import Home from "./components/pages/HOME/Home"; 
import Footer from "./components/Footer/Footer"; 


function App() { 
  return (
    <>
     
    {/*  Listes des routes */}  
    <BrowserRouter>
 
      <Header /> 

      <main>
     
        <Routes>
           {/* Contient toutes les routes configurés dans le site*/}

           <Route path="/"> 
              {/* Chemin en première et les autres vont le suivre */}

              <Route index element={<Home />}/> 

 
            </Route>

        </Routes> 

      </main>

      <Footer /> 
    
    </BrowserRouter>
      
   </>
 
  );
}

export default App;
