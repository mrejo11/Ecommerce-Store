import HomePage from "./components/DataFetch";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import { Github } from "lucide-react";
// import { ModeToggle } from "./toggleMode"
export default function Home() {
  return (
    <div >
     
      <LandingPage />
      <HomePage />
      <Footer />
      <div className="flex justify-center bg-gray-200 text-xs py-2">
        copyright ©2025 techzone-re.netlify.app <span className="font-bold ml-2">Source CodeIn</span>
        <a
          href="https://github.com/mrejo11/Ecommerce-Store"
          className="text-blue-400 hover:underline text-xl ml-2"
        >
          <Github className="bg-gray-800 rounded-full "/>
        </a>
      </div>
    </div>
  )
}
