import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-loading-skeleton/dist/skeleton.css'
import Homepage from './components/Homepage';
import AddEmail from './components/AddEmail'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Toaster />
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/addemail" element={<AddEmail />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
