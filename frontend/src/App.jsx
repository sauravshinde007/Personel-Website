import { BrowserRouter,Routes, Route  } from "react-router-dom";
import {Navbar,Footer} from './components';
import { SpeedInsights } from '@vercel/speed-insights/react';

//pages
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import MyWork from "./pages/MyWork";
//blog-pages
import Blogs from "./pages/Blogs";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NewBlog from "./pages/NewBlog";
import EditBlog from "./pages/EditBlog";
import BlogDetail from "./pages/BlogDetail";


const App = ()=> {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary min-h-screen flex flex-col">
          <Navbar />
          <div className="h-20"></div> {/* Spacer below navbar */}
          <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/my-work" element={<MyWork />} />

                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/new" element={<NewBlog />} />
                <Route path="/admin/edit/:id" element={<EditBlog />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:slug" element={<BlogDetail />} />
              </Routes>
          </main>
          
          <Footer />
      <SpeedInsights />
      </div>
      
    </BrowserRouter>
  )
}

export default App
