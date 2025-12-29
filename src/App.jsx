import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Quests from "./components/Quests";
import Blogs from "./components/Blogs";
import Blog0 from "./components/Blogs/Blog0";
import Blog1 from "./components/Blogs/Blog1";
import Footer from "./components/Footer";
function App() {
  return (
    <>
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quests" element={<Quests />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/blog0" element={<Blog0 />} />
        <Route path="/blogs/blog1" element={<Blog1 />} />
      </Routes>

      <Footer /></div>
    </>
  );
}

export default App;
