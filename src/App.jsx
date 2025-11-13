import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./index.css";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* <Home /> */}
         <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}
