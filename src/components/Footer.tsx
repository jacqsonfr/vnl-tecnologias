export default function Footer(){

return(

<footer className="bg-[#0B1F3A] text-white py-10 text-center">

<img
src="/logo-vnl.jpeg"
className="w-16 mx-auto mb-4"
/>

<p className="text-sm text-gray-300">
© {new Date().getFullYear()} VNL Tecnologias
</p>

</footer>

)
}