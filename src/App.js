import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import AddEmail from './components/AddEmail'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/addemail" element={<AddEmail />} />

    </Routes>
    </>
  );
}

export default App;
