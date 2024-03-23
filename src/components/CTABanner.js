import React from "react";
import { Link } from "react-router-dom";
export default function AddBanner() {
    return (
        <section className="py-20 w-full table relative bg-[url('../../assets/images/blog/white-paper.png')] bg-no-repeat bg-center bg-cover">
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 md:text-2xl text-xl text-white font-semibold">Estou disponível para projetos freelancers</h3>

                    <p className="text-white/80 max-w-xl mx-auto text-[15px]">Impulsione seu negócio para o sucesso. Vamos juntos alcançar novos patamares de <b>excelência e prosperidade digital</b>.</p>

                    <div className="relative mt-8">
                        <Link to="https://wa.me/5531995737924" className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md">
                            Faça contato
                            <img width={"22px"} height={"22px"} src="/images/icons/icons8-wpp.png" className="m-2" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}