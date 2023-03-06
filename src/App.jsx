import React from "react";
import { Faqs, Hero, Navbar, Partners, SectionLayout } from "./components/index";



const App = () => {

    return (
        <div className="web_container">

            <Navbar />
            <Hero />
            <Partners />
            <Faqs />
            <SectionLayout />


        </div >
    );
};

export default App;
