import React, { useState } from "react";
import * as Unicons from '@iconscout/react-unicons'
import { Link } from "react-router-dom";
import { sendEmail } from "./../service";


export default function GetInTouch() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [city, setCity] = useState(null);
    const [subject, setSubject] = useState(null);
    const [message, setMessage] = useState(null);
    const [showError, setShowError] = useState(false);
    const [errors, setErrors] = useState([]);
    const [sentMessage, setSentMessage] = useState(false);


    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "city":
                setCity(value);
                break;
            case "subject":
                setSubject(value);
                break;
            case "message":
                setMessage(value);
                break;
            default:
                break;
        }
    };

    const validateForm = () => {
        let formIsValid = true;
        const errorsList = [];

        if (!name) {
            errorsList.push("Nome é obrigatório");
            formIsValid = false;
        }

        if (!email) {
            errorsList.push("Email é obrigatório");
            formIsValid = false;
        }

        if (!subject) {
            errorsList.push("Assunto é obrigatório");
            formIsValid = false;
        }

        if (!message) {
            errorsList.push("Mensagem é obrigatória");
            formIsValid = false;
        }

        setErrors(errorsList);
        setShowError(!formIsValid);
        setSentMessage(formIsValid);

        return formIsValid;
    };

    const sendMessage = (event) => {
        event.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            sendEmail({
                name: name,
                email: email,
                city: city,
                subject: subject,
                message: message
            });
            // Limpar os campos após o envio bem-sucedido
            setName('');
            setEmail('');
            setCity('');
            setSubject('');
            setMessage('');
            setShowError(false);
            setSentMessage(true);
        }
    };


    return (
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="contact">
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Estou aqui para ajudar!</h3>

                    <p className="text-slate-400 max-w-xl mx-auto text-[15px]">Entre em contato agora mesmo para esclarecer todas as suas dúvidas e iniciar sua jornada rumo à excelência digital.</p>
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
                                            placeholder="Nome * :"
                                            value={name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="lg:col-span-6 mb-5">
                                        <input
                                            name="email"
                                            id="email"
                                            type="email"
                                            className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                                            placeholder="Email * :"
                                            value={email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1">
                                <div className="mb-5">
                                        <input
                                            name="city"
                                            id="city"
                                            className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                                            placeholder="Cidade :"
                                            value={city}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <input
                                            name="subject"
                                            id="subject"
                                            className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                                            placeholder="Assunto * :"
                                            value={subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-5">
                                        <textarea
                                            name="message"
                                            id="message"
                                            className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-28 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                                            placeholder="Mensagem * :"
                                            value={message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid lg:grid-cols-12">
                                    <div className="lg:col-span-3">
                                        <button
                                            type="submit"
                                            id="submit"
                                            name="send"
                                            onClick={sendMessage}
                                            className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md h-11 justify-center flex items-center"
                                        >
                                            Enviar
                                        </button>

                                    </div>
                                    <div className="lg:col-span-8">
                                        {showError &&
                                            (
                                                <p className="text-red-600 text-sm">Por favor, preencha todos os campos obrigatórios:<br/>{errors[0]}</p>
                                            )
                                        }
                                        {sentMessage &&
                                            (
                                                <p className="text-green-600 text-sm">Mensagem enviada!</p>
                                            )
                                        }
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="lg:ms-8">
                            <div className="flex">
                                <div className="icons text-center mx-auto">
                                    <Unicons.UilPhone className=" block rounded text-2xl dark:text-white mb-0" />
                                </div>

                                <div className="flex-1 ms-6">
                                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">Phone</h5>
                                    <Link to="tel:+152534-468-854" className="text-slate-400 text-[15px]">+152 534-468-854</Link>
                                </div>
                            </div>

                            <div className="flex mt-4">
                                <div className="icons text-center mx-auto">
                                    <Unicons.UilEnvelope className=" block rounded text-2xl dark:text-white mb-0" />
                                </div>

                                <div className="flex-1 ms-6">
                                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">Email</h5>
                                    <Link to="mailto:contact@example.com" className="text-slate-400 text-[15px]">contact@example.com</Link>
                                </div>
                            </div>

                            <div className="flex mt-4">
                                <div className="icons text-center mx-auto">
                                    <Unicons.UilMapMarker className=" block rounded text-2xl dark:text-white mb-0" />
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