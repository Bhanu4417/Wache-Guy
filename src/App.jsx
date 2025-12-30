import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Quests from "./components/Quests";
import Blogs from "./components/Blogs";
import Blog0 from "./components/Blogs/Blog0";
import Blog1 from "./components/Blogs/Blog1";
import Footer from "./components/Footer";
import Blog2 from "./components/Blogs/Blog2";
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
        <Route path="/blogs/blog2" element={<Blog2 />} />
      </Routes>

      <Footer /></div>
    </>
  );
}

export default App;
