import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Wallets from './pages/Wallets';
import CreateWallets from './pages/CreateWallets';
import MintTasks from './pages/MintTasks';
import TransferEther from './components/TransferEther';
import CreateMintTask from './pages/CreateMintTask';
import { ToastContainer } from 'react-toastify';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <header className='shadow shadow-black'>
        {/* <Header /> */}
      </header>
      <div className='App'>
        <div className='flex'>
          <Sidebar />
          <div className='content p-6'>
            <Routes>
              <Route exact path='/' element={<Home />}/>
              <Route path="/wallets" element={<Wallets />} />
              <Route path="/transfer" element={<TransferEther />} />
              <Route path='/wallet/create' element={<CreateWallets />} />
              <Route path='/minttasks' element={<MintTasks />} />
              <Route path='/minttask/create' element={<CreateMintTask />} />
            </Routes>
          </div>
        </div>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
