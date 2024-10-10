import Sidebar from "@/components/shared/Sidebar";
import Navbar from "../components/shared/Navbar"
import Hero from "@/components/shared/Hero";

export default function Home() {
  return (
    <div>

      {/*Navbar Section*/}
      <Navbar/>

      <div className="flex">

        {/*Sidebar Section*/}
        <Sidebar/>

        {/*Hero Section*/}
        <Hero/>

      </div>

      
    </div>
  );
}
