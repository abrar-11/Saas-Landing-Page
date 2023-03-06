import React from "react";

const Button = (props) => {

    const buttonStyles = {
        'secondary': "bg-gray-50 text-gray-800",
        'primary': "bg_purple text-white",
        'blah': "bg-orange-600 text-white"

    }
    const buttonSizes = {
        'medium': "py-8 px-8 rounded",


    }
    // ${buttonSizes[props.size]}
    return (
        <button
            className={`min-w-[8rem] max-w-fit text-center py-2 text-sm flex items-center justify-center space-x-4 px-4
           
        ${buttonStyles[props.type]}
        
        `}
        >

            <span className=""> {props.children}</span>

            {props.isIcon && <span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg></span>
            }
        </button>
    );
};

export default Button;
