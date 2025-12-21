import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
