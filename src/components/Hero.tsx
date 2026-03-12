import { motion } from "framer-motion"

export default function Hero(){

return(

<section className="bg-gradient-to-br from-[#0B1F3A] to-[#1F5FAF] text-white pt-40 pb-32 px-6 text-center">

<img
src="/logo-vnl.jpeg"
className="mx-auto w-24 mb-8"
/>

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
className="text-4xl md:text-6xl font-bold mb-6"
>

Soluções Tecnológicas Inteligentes

</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.3}}
className="max-w-xl mx-auto mb-10 text-lg text-blue-100"
>

Infraestrutura de rede, segurança, servidores e soluções digitais para empresas e residências.

</motion.p>

<motion.a
href="#contato"
initial={{scale:0.9}}
animate={{scale:1}}
className="bg-white text-[#1F5FAF] font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition"
>

Solicitar Orçamento

</motion.a>

</section>

)
}