import React from 'react'
import Button from './Button';

const Navbar = () => {
    const navItems = [
        {
            link: "product",
            isDropDown: true,
        },
        {
            link: "packages",
            isDropDown: true,
        },
        {
            link: "blog",
            isDropDown: false,
        },
        {
            link: "testimonials",
            isDropDown: false,
        },
    ];
    return (
        <div className="flex-col flex md:flex-row space-y-5 md:space-y-0 items-center justify-between py-4 ">
            <div className="logo ">ArShakir</div>
            <div className="flex items-center justify-center space-x-4  w-full">
                {navItems.map((item, index) => {
                    return (
                        <div
                            className="flex items-center text-sm space-x-1"
                            key={index}
                        >
                            <span className="">{item.link}</span>

                            {item.isDropDown && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            )}
                        </div>
                    );
                })}
            </div>


            <div className="flex items-center justify-end space-x-5 ">
                <Button type="secondary" >Sign in</Button>
                <Button type="primary" >Start free</Button>
            </div>
        </div>
    )
}

export default Navbar