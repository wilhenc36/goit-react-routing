import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About';
import Blogs from './pages/Blogs';
import NotFound from './pages/NotFound';
import './App.css';
import Blog from "./components/Blog";
import History from "./pages/History";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="history" element={<History />} />
        </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:idblog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
