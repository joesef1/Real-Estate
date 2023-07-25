import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';


function App() {
  return (
  
    <BrowserRouter>
      <div id='app' >
        

            <Navbar/> 

                  <Routes>  
                  
                      <Route path="/" element={<Home />} />
                    
                      
                  </Routes>
            
      </div>


      </BrowserRouter>





// <BrowserRouter>
// <div id='app' className=' '>
  

//       <Navbar/> 

//             <Routes>  
            
//                 <Route path="/" element={<Home />} />
              
                
//             </Routes>
      
// </div>


// </BrowserRouter>
  );
}

export default App;
