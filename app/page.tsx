
import Link from 'next/link';

function TopBar() {
    return (
	<nav className="shadow-xl flex flex-row items-center p-5 bg-[#f42f39] text-white z-10">
	    <div className="w-full h-full">
	        <img
	            src="/circle_logo.png" 
	            width={80}
	            height={80}
	            alt="volume25 circle logo"
	        />
	    </div>
	    <nav className="flex flex-row items-center gap-5">
	        <Link className="w-35 text-center font-black" href="#about">Sobre</Link> 
	        <Link className="w-35 text-center font-black" href="#episodes">Episódios</Link> 
	        <Link className="w-35 text-center font-black" href="#authors">Autores</Link> 
	        <Link className="w-35 text-center font-black" href="#about">Mundo Perdido...</Link> 
	    </nav>
	</nav>
    );
}

function Footer() {
    return (
	<div className="p-5 h-80 border-2 border-solid border-black">
	    Footer
	</div>
    );
}

function Content() {
    return (
	<section className="h-full overflow-auto">
	    <section className="bg-[#f42f39] h-full flex flex-col">
	        <TopBar />
	        <div className="pl-20 h-full flex flex-row justify-center items-center">
	            <img src="/logo.jpeg" width="30%" className="" />
	        </div>
	    </section>
	    
	    <section id="about" className="h-auto flex flex-row overflow-hidden">
	         <div className="w-full h-full">
	            <img src="/about.jpeg" className="relative " />
	         </div>
	         <div className="p-5 pl-10 pr-10 flex flex-col justify-center w-full min-h-full bg-white shadow-xl shadow-x1/30 shadow-black z-10">
	             <p className="tracking-[.20em] text-xl font-black mb-5 mt-5 font-(family-name:--font-black)">
	                 Sobre...
	             </p>
	             <p className="text-sm/7 text-justify mb-2 mt-2">
	                 Volume 25 é um programa criado pelos estudantes do segundo semestre de Jornalismo da Unesp!
	             </p>
	             <p className="text-sm/7 text-justify mb-2 mt-2">
	                 Com o principal objetivo de garantir que todos possam conhecer e atuar em cada área da produção de um programa ao
	                 vivo, os estudantes revezam as funções a cada episódio -- desde a produção, mídias socias, técnica e reportagem. 
	                 Dessa forma, todos os grupos participarão de todas as funções.
	             </p>
	             <p className="text-sm/7 text-justify mb-2 mt-2">
	                 Cada edição do programa irá focar em um tema específico escolhido pelos apresentadores da semana, com reportagens,
	                 e entrevistas ao vivo com convidados especiais.
	             </p>
	         </div>
	    </section>
	    
	    <section id="episodes" className="p-5 h-full">
	        Episodes
	    </section>
	    
	    <section id="authors" className="p-5 h-full">
	        Authors
	    </section>
	    
	    <Footer />
	</section>
    );
}

export default function Home() {
    return (
	<div className="h-screen w-screen overflow-hidden">
	    <Content />
	</div>
    );
}
