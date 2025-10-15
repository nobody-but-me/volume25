
import Link from 'next/link';


function Video({episode, description, link, date}) {
    return (
	<div className="flex flex-row w-full p-5 rounded-lg  transition-all bg-white hover:shadow-xl hover:z-10 hover:-translate-y-3 cursor-pointer">
	    <a href={link} target="blank" className="flex flex-row w-full">
	        <div className="flex flex-col justify-center items-center mr-10 min-h-full flex flex-col justify-center items-center mr-10">
	            <div className="w-100 h-60 bg-[#ff0e26] rounded-lg flex flex-col justify-center"><img src="/full.jpeg" width="100%" className="" /></div>
	        </div>
	        <div className="w-full h-full flex flex-col justify-center text-black">
	             <p className="tracking-[.20em] text-xl font-black font-(family-name:--font-black)">
	                 Episódio #{episode}
	             </p>
	             <p className="tracking-[.20em] text-gray-400 text-xs font-thin font-(family-name:--font-black)">
	                 {date}
	             </p>
	             <p className="text-sm/7 text-justify mb-2 mt-2">
	                 {description}
	             </p>
	        </div>
	    </a>
	</div>
    );
}

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
	    
	    <section id="episodes" className="p-20 h-auto">
	        <Video date="09/09/2025" episode={1} description="Estreando já como um clássico, o Volume 25 começa suas atividades com um bate-papo sobre a UEFA Champions League, a famosa Liga dos Campeões da Europa! A edição contou com a apresentação de Enzo Kato,  Mauricio Júnior e Pedro Oliveira, assim como com a participação especial de Antônio Vinicius, jornalista formado pela Unesp, lider da editoria de esportes da rádio Aure Verde Brasil e produtor do programa esportivo Aure Verde na área. " link="https://www.youtube.com/live/bN8k6hQGx_Q?si=81_Xpa9Slwjy9dYA" />
	        <Video date="23/09/2025" episode={2} description="Já no segundo episódio, o Volume 25 fala sobre a 49ª Amostra Internacional de Cinema em São Paulo, tendo como convidado especial o diretor e cineasta independente Marcelo Felipe Sampaio e com a apresentação de Bruna Arcanjo, Clara Moraes e Danielle Ribeiro. O episódio também contou com atualizações e cobertura dos fontes vendavais acontecidos na semana do programa." link="https://www.youtube.com/live/u-bKSx0JXVs?si=ZRY5U9NDigpSkx8N"/>
	        <Video date="07/10/2025 - Última edição." episode={3} description="O terceiro episódio do Volume 25 aborda o pertinente tema sobre a proibição de celulares em escolas e instituições de ensino, debatendo os lados positivos e negativos da restrição. O programa contou com os convidados Dariel Carvalho, professor e especialista em tecnologia educacional, Katia Chedid, psicopedagoga e neurocientista, e Karina Martins, diretora e representante da escola Professor Antônio Guedes de Azevedo. A apresentação foi realizada por Maria Eduarda Deodato e Helena Singilo." link="https://www.youtube.com/live/k7fffm6vc0k?si=7O37tKeGr1YyPIEh" />
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
