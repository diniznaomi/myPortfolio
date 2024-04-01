import React, { useState } from "react";
import Lightbox from 'react-18-image-lightbox';
import '../../node_modules/react-18-image-lightbox/style.css';
import { Carousel } from "./Carousel";

const images = [
    "/images/works/TraveSon1.png",
    "/images/works/TraveSon2.png",
    "/images/works/TraveSon3.png",
];

const imagesDonto = [
    "/images/works/Donto1.png",
    "/images/works/Donto2.png",
    "/images/works/Donto3.png",
    "/images/works/Donto4.png",
    "/images/works/Donto5.png",
    "/images/works/Donto6.png",
    "/images/works/Donto7.png",
];

const imageAdv = [
    "/images/works/adv.png",
    "/images/works/adv2.png",
    "/images/works/adv3.png",
    "/images/works/adv4.png",
    "/images/works/adv5.png",
    "/images/works/adv6.png",
    "/images/works/adv9.png",
    "/images/works/adv10.png",
]


export default function Projects() {
    const [photoIndex, setActiveIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);


    const handleCLick = (index) => {
        setActiveIndex(index)
        setOpen(!isOpen);
    }

    return (
        <>
            <section className="relative md:py-24 dark:bg-slate-800 py-16" id="project">

                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Alguns dos meus projetos...</h3>

                        {/* <p className="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p> */}
                    </div>


                    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px] justify-center items-center">
                        <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                            <Carousel slides={images} />
                            <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                                <span className="block text-sm text-yellow-500">Hospedagem</span>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                          <Carousel slides={imagesDonto} />
                            <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500 bg-gradient-to-b">
                                <span className="block text-sm text-yellow-500">Clínica</span>
                            </div>                            
                        </div>

                        <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                         <Carousel slides={imageAdv}/>
                            <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                                <span className="block text-sm text-yellow-500">Advocacia</span>
                            </div>
                        </div>

                        {/* <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                            <img src="/images/works/5.jpg" alt="" />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                            <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                                <Link2 to="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Motos Theme</Link2>
                                <span className="block text-sm text-slate-400">Landing</span>
                            </div>

                            <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                                <Link2 to="#" onClick={() => handleCLick(3)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilCamera width={16} /></Link2>
                            </div>
                            </div>                    
                        */}
                    </div>
                </div>
            </section>
            {/* {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setOpen(false)}
                    onMovePrevRequest={() =>
                        setActiveIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setActiveIndex((photoIndex + 1) % images.length)
                    }
                />
            )} */}
        </>

    )
}