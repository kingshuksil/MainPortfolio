
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Clients from "@/components/ui/Clients";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/ui/RecentProjects";
import { navItems } from "@/Data";
import { FaHome } from "react-icons/fa";


export default function Home() {
  return (
    <main className="reletive bg-black-100 flex justify-center items-center flex-col 
     mx-auto sm:px-10 px-5 ">
      <div className="">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid/>
        <RecentProjects/>
        <Clients/>
        <Experience/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  )
}
    