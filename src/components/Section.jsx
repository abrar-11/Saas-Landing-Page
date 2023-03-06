import React from 'react'

import Button from './Button';

const Section = (props) => {
    return (
        <div className="flex items-center justify-between gap-6">
            <div className="flex flex-col space-y-4">
                <h1 className="text_heading text-4xl font-semibold">
                    {props.title}
                </h1>
                <p className="text-md text_color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odit, quasi dicta dolorum facilis praesentium ea pariatur quisquam eaque ipsam?</p>
                <Button type="primary"

                    isIcon={true}

                >{props.buttonText}</Button>


                <p className="text-md text_color">Lorem ipsum dolor sit amet consectetur adipisicing eaesentium ea pariatur quisquam eaque ipsam?</p>
            </div>
            <div className={`
            ${props.layoutStyle == "left" ?
             "" : "order-first"} bg-gray-600`}>
                <img src={props.img} alt="" />
            </div>
        </div>
    )
}

export default Section