import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Sales from './pages/Sales';
import Footer from './components/Footer';
import Bankink from './pages/Bankink';

const App = () => {
  return (
    <Router>
      {/* Container utama dengan flex dan min-h-screen */}
      <div className="flex flex-col min-h-screen">
        {/* Container untuk sidebar dan konten utama */}
        <div className="flex flex-1 ">
          {/* Sidebar */}
          <div className="w-64 "> {/* Sesuaikan lebar sidebar */}
            <Sidebar />
          </div>

          {/* Konten utama yang bisa di-scroll */}
          <main className="flex-1 p-4 ml-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Sales" element={<Sales />} />
              <Route path="/Bankink" element={<Bankink />} />
            </Routes>
          </main>
        </div>

        {/* Footer dengan lebar penuh */}
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </Router>
    
  );
};

export default App;
