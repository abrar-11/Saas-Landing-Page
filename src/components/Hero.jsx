import React from 'react'
import HeroImg from "../assets/SectionImages/Hero.png"
import profileIcons from "../assets/Logos/profileIconsList.png"
import Button from './Button'
const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between space-x-5 py-10">
            <div className="flex flex-col space-y-4">
                <h1 className="text_heading text-6xl">
                    Increase your followers on social media
                </h1>
                <p className="text-md text_color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odit, quasi dicta dolorum facilis praesentium ea pariatur quisquam eaque ipsam?</p>
                <Button type="blah"
                size= "medium"

                    isIcon={true}

                >Get Started</Button>

                <div className="w-44">
                    <img src={profileIcons} alt="" />
                </div>
                <p className="text-md text_color">Lorem ipsum dolor sit amet consectetur adipisicing eaesentium ea pariatur quisquam eaque ipsam?</p>
            </div>
            <div className="">
                <img src={HeroImg} alt="" />
            </div>
        </div>
    )
}

export default Hero