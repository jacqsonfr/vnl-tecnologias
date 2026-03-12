import { Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar(){

const [open,setOpen]=useState(false)

return(

<nav className="fixed w-full bg-[#0B1F3A]/95 backdrop-blur text-white z-50">

<div className="max-w-7xl mx-auto flex justify-between items-center p-4">

<div className="flex items-center gap-3">

<img
src="/logo-vnl.jpeg"
className="w-10 h-10 object-contain"
/>

<h1 className="font-bold text-lg tracking-wide">
VNL Tecnologias
</h1>

</div>

<button
className="md:hidden"
onClick={()=>setOpen(!open)}
>
<Menu/>
</button>

<ul className="hidden md:flex gap-8 text-sm">

<li><a href="#sobre">Sobre</a></li>
<li><a href="#servicos">Serviços</a></li>
<li><a href="#contato">Contato</a></li>

</ul>

</div>

{open && (

<div className="md:hidden flex flex-col gap-4 p-4 bg-[#0B1F3A]">

<a href="#sobre">Sobre</a>
<a href="#servicos">Serviços</a>
<a href="#contato">Contato</a>

</div>

)}

</nav>

)
}