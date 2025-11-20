import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.rtl.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App.jsx'
import About from './About.jsx'
import Page404 from './components/Page404.jsx';
import { BrowserRouter,Route, Routes } from "react-router";
import AddMovie from './AddMovie.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<App />} />
    <Route path="/about" element={<About />} />
    <Route path="/add-movie" element={<AddMovie />} />
    <Route path="*" element={<Page404 />} />
    

    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
