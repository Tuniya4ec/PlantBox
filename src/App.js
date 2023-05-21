import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header/Header';
import Search from "./Components/Search";
import initialDetails from "./Data/initialDetails";
function App() {
  return (
      <div>
          <Header/>
          <div className="wrapper">
              <Search details={initialDetails}/>
          </div>
      </div>
  );
}

export default App;
