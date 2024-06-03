import toast, { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import AddEmail from './components/AddEmail'


function App() {
  return (
    <>
    <Toaster />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/addemail" element={<AddEmail />} />

    </Routes>
    </>
  );
}

export default App;
