
//import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';
import axios from "axios"

function App() {
  axios.post("https://chat-app-rouge-five.vercel.app/",) 
  return (
   <> 
      <Toaster/>
       <main >
        <Outlet/>
       </main>
   </>
  );
}

export default App;
