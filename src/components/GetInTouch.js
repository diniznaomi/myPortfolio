import React, { useState } from "react";
import * as Unicons from '@iconscout/react-unicons'
import { Link } from "react-router-dom";


export default function GetInTouch(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangeSubject = (event) => {
        setSubject(event.target.value);
    };

    const handleChangeMessage = (event) => {
        setMessage(event.target.value);
    };

    const sendMessage = () => {
        var link = 'mailto:' 
                    + "nalindsaydm@gmail.com" +
                    '?subject=' + encodeURIComponent(subject) +
                    '&body=' + encodeURIComponent(message);

        window.location.href = link;
    };


    return(
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="contact">
        <div className="container">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Get In Touch !</h3>

                <p className="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-[30px]">
                <div className="lg:col-span-8">
                    <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                        <form>
                            <div className="grid lg:grid-cols-12 lg:gap-5">
                                <div className="lg:col-span-6 mb-5">
                                    <input 
                                        name="name" 
                                        id="name" 
                                        type="text" 
                                        className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" 
                                        placeholder="Nome :"
                                        value={name}
                                        onChange={handleChangeName}
                                    />
                                </div>

                                <div className="lg:col-span-6 mb-5">
                                    <input 
                                        name="email" 
                                        id="email" 
                                        type="email" 
                                        className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" 
                                        placeholder="Email :"
                                        value={email}
                                        onChange={handleChangeEmail}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1">
                                <div className="mb-5">
                                    <input 
                                        name="subject" 
                                        id="subject" 
                                        className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" 
                                        placeholder="Assunto :"
                                        value={subject}
                                        onChange={handleChangeSubject}
                                    />
                                </div>

                                <div className="mb-5">
                                    <textarea 
                                        name="comments" 
                                        id="comments" 
                                        className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-28 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" 
                                        placeholder="Mensagem :"
                                        value={message}
                                        onChange={handleChangeMessage}
                                    />       
                                </div>
                            </div>
                            <button 
                                type="submit" 
                                id="submit" 
                                name="send" 
                                onClick={sendMessage}
                                className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md h-11 justify-center flex items-center"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>

                <div className="lg:col-span-4">
                    <div className="lg:ms-8">
                        <div className="flex">
                            <div className="icons text-center mx-auto">
                                <Unicons.UilPhone className=" block rounded text-2xl dark:text-white mb-0"/>
                            </div>

                            <div className="flex-1 ms-6">
                                <h5 className="text-[17px] dark:text-white mb-2 font-medium">Phone</h5>
                                <Link to="tel:+152534-468-854" className="text-slate-400 text-[15px]">+152 534-468-854</Link>
                            </div>
                        </div>

                        <div className="flex mt-4">
                            <div className="icons text-center mx-auto">
                                <Unicons.UilEnvelope className=" block rounded text-2xl dark:text-white mb-0"/>
                            </div>

                            <div className="flex-1 ms-6">
                                <h5 className="text-[17px] dark:text-white mb-2 font-medium">Email</h5>
                                <Link to="mailto:contact@example.com" className="text-slate-400 text-[15px]">contact@example.com</Link>
                            </div>
                        </div>

                        <div className="flex mt-4">
                            <div className="icons text-center mx-auto">
                                <Unicons.UilMapMarker className=" block rounded text-2xl dark:text-white mb-0"/>
                            </div>

                            <div className="flex-1 ms-6">
                                <h5 className="text-[17px] dark:text-white mb-2 font-medium">Location</h5>
                                <p className="text-slate-400 text-[15px] mb-2">C/54 Northwest Freeway, Suite 558, Houston, USA 485</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}