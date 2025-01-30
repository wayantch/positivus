import React, { useState } from "react";
import ServiceList from "./components/card/serviceList";
import ServicesCard from "./components/card/ServicesCard";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const Positivus = () => {
    const [openStep, setOpenStep] = useState(1);
    // Data Accordion
    const steps = [
        {
            id: 1,
            title: "Consultation",
            content:
                "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements. We will also explain our process and how we can help you achieve your goals.",
        },
        {
            id: 2,
            title: "Research and Strategy Development",
            content:
                "After the consultation, we will conduct research on your target audience and competitors to understand the market and identify opportunities. Based on the research, we will develop a tailored strategy for your business.",
        },
        {
            id: 3,
            title: "Implementation",
            content:
                "Once the strategy is developed, we will implement it by creating content, designing visual elements, and developing technology solutions. We will also set up analytics and tracking to measure the success of the campaign.",
        },
        {
            id: 4,
            title: "Monitoring and Optimization",
            content:
                "After the campaign is launched, we will continuously monitor the results and make adjustments as needed. We will also provide regular reporting and analysis to ensure that the campaign is meeting its goals.",
        },
        {
            id: 5,
            title: "Reporting and Communication",
            content:
                "We will provide regular reporting and communication to keep you informed of the campaign's progress. We will also be available to answer any questions you may have and provide support as needed.",
        },
        {
            id: 6,
            title: "Continual Improvement",
            content:
                "We will continuously evaluate and improve the campaign to ensure that it is meeting its goals and delivering the best possible results for your business. We will also stay up-to-date with the latest trends and best practices to ensure that our services are always of the highest quality.",
        },
    ];

    const Company = [
        {
            img: "/assets/images/company/Company logo.svg",
        },
        {
            img: "/assets/images/company/Company logo (1).svg",
        },
        {
            img: "/assets/images/company/Company logo (2).svg",
        },
        {
            img: "/assets/images/company/Company logo (3).svg",
        },
        {
            img: "/assets/images/company/Company logo (4).svg",
        },
    ];

    const About = [
        {
            text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
        },
        {
            text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
        },
        {
            text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
        },
    ];

    return (
        <div>
            <Navbar />
            <div className="px-6 lg:container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="space-y-4 lg:space-y-10 lg:w-[520px] ">
                        <h1 className="text-4xl lg:text-6xl font-medium">
                            Navigating the digital landscape for success
                        </h1>
                        <p>
                            Our digital marketing agency helps businesses grow
                            and succeed online through a range of services
                            including SEO, PPC, social media marketing, and
                            content creation.
                        </p>
                        <button className="px-8 py-4 rounded-lg text-white bg-darkPositivus hover:bg-transparent hover:border hover:border-black hover:text-darkPositivus transition-all duration-300">
                            Book a consultation
                        </button>
                    </div>
                    <div className="">
                        <img
                            src="/assets/images/Illustration.svg"
                            alt=""
                        />
                    </div>
                </div>

                <div className="flex flex-wrap gap-10 items-center justify-center lg:justify-between py-16">
                    {Company.map((company) => (
                        <img
                            src={company.img}
                            alt=""
                            className="hover:filter hover:brightness-100 filter brightness-0"
                        />
                    ))}
                </div>

                <div className="flex flex-wrap items-center gap-5 lg:gap-10 py-16">
                    <div className="">
                        <h1 className="text-5xl font-medium p-2 bg-primaryPositivus rounded-lg">
                            Services
                        </h1>
                    </div>
                    <div className="lg:w-[520px]">
                        <p>
                            At our digital marketing agency, we offer a range of
                            services to help businesses grow and succeed online.
                            These services include:
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {ServiceList.map((service, index) => (
                        <ServicesCard key={index} {...service} />
                    ))}
                </div>

                <div className="mt-24">
                    <div className="flex flex-wrap justify-between lg:items-center w-full h-[700px] lg:h-80 relative bg-accentPositivus rounded-[45px] p-16">
                        <div className="space-y-8 lg:w-1/3">
                            <h1 className="text-3xl font-medium">
                                Let’s make things happen
                            </h1>
                            <p>
                                Contact us today to learn more about how our
                                digital marketing services can help your
                                business grow and succeed online.
                            </p>
                            <button className="px-8 py-4 bg-darkPositivus rounded-lg text-white">
                                Get your free proposal
                            </button>
                        </div>
                        <img
                            src="/assets/images/about.svg"
                            alt=""
                            className="absolute lg:right-10 -bottom-5 "
                        />
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-5 lg:gap-10 py-16">
                    <div className="">
                        <h1 className="text-5xl font-medium p-2 bg-primaryPositivus rounded-lg">
                            Case Studies
                        </h1>
                    </div>
                    <div className="lg:w-[520px]">
                        <p>
                            Explore Real-Life Examples of Our Proven Digital
                            Marketing Success through Our Case Studies
                        </p>
                    </div>
                </div>

                <div className="w-full lg:h-80 text-white bg-darkPositivus rounded-[45px] p-16 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-32 text-lg relative">
                        {About.map((about, index) => (
                            <div key={index} className="relative">
                                <img
                                    src="/assets/icons/Line 3.svg"
                                    className="absolute right-[120px] top-52 lg:-right-16 lg:rotate-0 rotate-90"
                                    alt=""
                                />

                                <p>{about.text}</p>
                                <a
                                    href=""
                                    className="flex items-center gap-4 text-primaryPositivus mt-5"
                                >
                                    Learn More{" "}
                                    <span>
                                        <img
                                            src="/assets/icons/arrow.svg"
                                            alt=""
                                        />
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-5 lg:gap-10 py-16 mt-20">
                    <div className="">
                        <h1 className="text-5xl font-medium p-2 bg-primaryPositivus rounded-lg">
                            Our Working Process
                        </h1>
                    </div>
                    <div className="w-[290px]">
                        <p>
                            Step-by-Step Guide to Achieving Your Business Goals
                        </p>
                    </div>
                </div>

                <div className="w-full">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className={`w-full ${
                                openStep === step.id
                                    ? "lg:h-80 bg-primaryPositivus"
                                    : "h-auto bg-accentPositivus"
                            } rounded-[45px] p-12 outline outline-1 outline-black shadow-[0px_5px_0px_0px_rgba(0,0,0,1)] mb-10 `}
                        >
                            <div
                                className="flex items-center justify-between  cursor-pointer "
                                onClick={() =>
                                    setOpenStep(
                                        openStep === step.id ? null : step.id,
                                    )
                                }
                            >
                                <div className="flex flex-wrap items-center gap-5">
                                    <h1 className="text-6xl font-medium">
                                        {String(step.id).padStart(2, "0")}
                                    </h1>
                                    <p className="text-3xl font-medium">
                                        {step.title}
                                    </p>
                                </div>
                                <div className="hidden lg:block">
                                    <img
                                        src={`/assets/icons/${openStep === step.id ? "minus" : "Plus"}.svg`}
                                        alt="Toggle"
                                    />
                                </div>
                            </div>
                            {openStep === step.id && step.content && (
                                <p className="text-lg border-t border-black pt-10 mt-10">
                                    {step.content}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap items-center gap-5 lg:gap-10 py-16 mt-20">
                    <div className="">
                        <h1 className="text-5xl font-medium p-2 bg-primaryPositivus rounded-lg">
                            Contact Us
                        </h1>
                    </div>
                    <div className="w-[290px]">
                        <p>
                            Connect with Us: Let's Discuss Your Digital
                            Marketing Needs
                        </p>
                    </div>
                </div>

                <div className="w-full h-[900px] lg:h-auto bg-accentPositivus rounded-[45px] p-10 lg:p-16 overflow-hidden relative">
                    <img
                        src="/assets/images/contact.svg"
                        className="absolute lg:-right-80 -bottom-40 lg:bottom-12 right-0 lg:rotate-0 rotate-90"
                        alt=""
                    />
                    <div className="flex flex-wrap items-center gap-5 text-lg mb-10">
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="contact"
                                id="phone"
                                className="w-6 h-6 accent-[#B9FF66]"
                            />
                            <label htmlFor="contact">Say Hi</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="contact"
                                id="phone"
                                className="w-6 h-6 accent-[#B9FF66]"
                            />
                            <label htmlFor="contact">Get a Quote</label>
                        </div>
                    </div>

                    {/* Form */}
                    <form action="">
                        <div className="lg:w-[500px]">
                            <div className="mb-5">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full px-8 py-4 rounded-lg mt-2 outline outline-1 outline-black"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email">Email*</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full px-8 py-4 rounded-lg mt-2 outline outline-1 outline-black"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="message">Message*</label>
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    rows={8}
                                    className="w-full px-8 py-4 rounded-lg mt-2 outline outline-1 outline-black"
                                ></textarea>
                            </div>
                            <button className="bg-darkPositivus text-white w-full py-4 rounded-lg mt-10">
                                Send Message
                            </button>
                        </div>
                    </form>
                    {/* Form */}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Positivus;
