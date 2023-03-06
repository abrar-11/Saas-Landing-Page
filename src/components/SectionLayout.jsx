import React from 'react'
import img1 from "../assets/SectionImages/ActiveFollowers.png"
import img2 from "../assets/SectionImages/DailyUsers.png"

import Section from './Section';
const SectionLayout = () => {
  return (
    <div className="space-y-32 mt-20">
      <Section
        title=" Get thousands of active followers"
        buttonText="Start Free"
        img={img1}
        layoutStyle="left"
      />
      <Section
        title="Daily Active users on social media"
        buttonText="Start Free"
        img={img2}
        layoutStyle="right"
      />


    </div>
  )
}

export default SectionLayout