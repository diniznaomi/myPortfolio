import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

export default function HeroOne() {
    return (
        <>
            <section className="relative pt-28 personal-wrapper overflow-hidden bg-amber-500/5" id="home">
                <div className="absolute inset-0" id="overlay"></div>
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                        <div>
                            <h4 className="font-bold lg:text-[40px] text-3xl lg:leading-normal leading-normal mb-4">Olá! Eu sou <br />
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        'Naomi',
                                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        'Desenvolvedora de sites',
                                        1200,
                                        'Analista de Sistemas',
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    className="typewrite text-amber-500"
                                    repeat={Infinity}
                                />
                            </h4>
                            <p className="text-slate-400 max-w-xl">Participo de projetos nacionais e internacionais, de pequenas e grandes escalas. Tendo experienciado todos os estágios do desenvolvimento web.</p>

                            <div className="mt-6">
                                <Link to="https://wa.me/5531993136451" target="_blank" className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md">
                                    Faça contato
                                    <img width={"22px"} height={"22px"} src="/images/icons/icons8-wpp.png" className="m-2" alt="" />
                                </Link>
                                {/* <Link to="" className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md ms-1">Download CV</Link> */}
                            </div>
                        </div>
                        <div className="relative p-6">
                            <img src="/images/hero/5.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="absolute block w-full h-auto bottom-[25px] z-1 left-0">
                    <span to="#about"><i className="mdi mdi-arrow-down absolute top-0 left-0 right-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i></span>
                </div>
            </div>
        </>
    )
} 