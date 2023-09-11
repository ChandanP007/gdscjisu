import Nav from "./nav";
import Hero from "./hero";
import About from "./about";
import Footer from "./footer";
import Team from "./team";
import Faq from "./faq";
import Partners from "./partners";
import Stats from "./dscstats";
import Upcoming from "./upcoming";
import Domain from "./domains";


function Mapp(){
    return(
        <>
            <Nav/>
            <Hero/>
            <Upcoming />
            <Domain />
            <About/>
            <Stats />
            <Team />
            <Partners/>
            <Faq />
            <Footer/>
        </>
    )
}

export default Mapp;