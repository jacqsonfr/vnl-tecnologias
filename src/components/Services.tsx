import { Server, Wifi, Shield, Camera, Phone, Globe } from "lucide-react"

const services=[
{icon:Server,title:"Servidores"},
{icon:Wifi,title:"Internet e Fibra"},
{icon:Shield,title:"Firewall"},
{icon:Camera,title:"CFTV"},
{icon:Phone,title:"VoIP"},
{icon:Globe,title:"Hospedagem"}
]

export default function Services(){

return(

<section id="servicos" className="py-24 px-6 bg-gray-50">

<h2 className="text-3xl font-bold text-center mb-16 text-[#0B1F3A]">
Nossos Serviços
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

{services.map((s)=>{

const Icon=s.icon

return(

<div
key={s.title}
className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-[#1F5FAF]"
>

<Icon className="text-[#1F5FAF] mb-4"/>

<h3 className="font-semibold text-lg mb-2 text-[#0B1F3A]">
{s.title}
</h3>

<p className="text-gray-600 text-sm">
Soluções profissionais para empresas e residências.
</p>

</div>

)

})}

</div>

</section>

)
}