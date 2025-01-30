import React from 'react'

const ServicesCard = ({
    bgColor,
    bgText,
    text1,
    text2,
    img,
    textColor,
    arrow,
    moreColor,
}) => {
    return (
        <div
            className={`w-full h-[500px] lg:h-80 rounded-xl ${bgColor} outline outline-1 outline-black shadow-[0px_5px_0px_0px_rgba(0,0,0,1)]`}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="p-10 flex flex-col justify-between h-full">
                    <div className="flex flex-col">
                        <h1
                            className={`text-3xl font-medium ${bgText} ${textColor} p-2 rounded-lg inline-block w-fit`}
                        >
                            {text1}
                        </h1>
                        <h1
                            className={`text-3xl font-medium ${bgText} ${textColor} p-2 rounded-lg inline-block w-fit`}
                        >
                            {text2}
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={arrow} alt="" />
                        <p className={`text-lg ${moreColor}`}>Learn More</p>
                    </div>
                </div>
                <div className="m-auto">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
