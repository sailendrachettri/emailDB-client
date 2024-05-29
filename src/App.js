import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/addemail" element={<Homepage />} />

    </Routes>
    </>
  );
}

export default App;
