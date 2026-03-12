export default function Contact(){

return(

<section id="contato" className="py-24 px-6 bg-gray-100">

<h2 className="text-3xl font-bold text-center mb-10">

Entre em contato

</h2>

<form className="max-w-xl mx-auto flex flex-col gap-4">

<input
className="border p-3 rounded"
placeholder="Nome"
required
/>

<input
className="border p-3 rounded"
placeholder="Email"
type="email"
required
/>

<textarea
className="border p-3 rounded"
placeholder="Mensagem"
required
/>

<button
className="bg-blue-900 text-white p-3 rounded"
>

Enviar

</button>

</form>

</section>

)
}