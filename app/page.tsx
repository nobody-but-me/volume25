
import Link from 'next/link';


function Video({episode, description, link, date}) {
    return (
	<div className="flex flex-row w-full p-5 rounded-lg  transition-all bg-white hover:shadow-xl hover:z-10 hover:-translate-y-3 cursor-pointer">
	    <a href={link} target="blank" className="flex flex-row w-full">
	        <div className="flex flex-col justify-center items-center mr-10 min-h-full flex flex-col justify-center items-center mr-10">
	            <div className="w-100 h-60 bg-[#ff0e26] rounded-lg flex flex-col justify-center"><img src="/full.jpeg" width="100%" className="" /></div>
	        </div>
	        <div className="w-full h-full flex flex-col justify-center text-black">
	             <span className="tracking-[.20em] text-xl font-black font-(family-name:--font-black)">
	                 Episódio #{episode}
	             </span>
	             <span className="tracking-[.20em] text-gray-400 text-xs font-thin font-(family-name:--font-black)">
	                 {date}
	             </span>
	             <p className="text-sm/7 text-justify mb-2 mt-2">
	                 {description}
	             </p>
	        </div>
	    </a>
	</div>
    );
}


function Profile({name}) {
    return (
	<div className="flex flex-col justify-center items-center">
	    <div className="bg-gray-300 inset-shadow-sm inset-shadow-gray-300 hover:shadow-lg hover:-translate-y-2 transition-all rounded-full w-25 h-25 m-2 flex flex-col justify-center items-center overflow-hidden cursor-pointer">
	         <div className="bg-gray-200 rounded-full w-10 h-10 relative top-5"></div>
	         <div className="bg-gray-200 rounded-full w-15 h-15 relative -bottom-5"></div>
	    </div>
	    <span className="w-auto tracking-[.20em] text-center text-gray-700 text-xs font-thin font-(family-name:--font-black)">
	        {name}
	    </span>
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
	        <Link className="w-35 tracking-[.25em] text-center text-white font-(family-name:--font-black)" href="#about">Sobre</Link> 
	        <Link className="w-35 tracking-[.25em] text-center text-white font-(family-name:--font-black)" href="#episodes">Episódios</Link> 
	        <Link className="w-35 tracking-[.25em] text-center text-white font-(family-name:--font-black)" href="#authors">Autores</Link> 
	        <Link className="w-45 tracking-[.25em] text-center text-white font-(family-name:--font-black)" href="/mp">Mundo Perdido...</Link> 
	    </nav>
	</nav>
    );
}

function Footer() {
    return (
	<section className="p-5 bg-[#f42f39] flex flex-col justify-center items-center mt-15">
	    <div className="h-full w-1/2 flex flex-row gap-15 justify-center items-center mb-8 mt-8">
	        <a href="/"><img src="logo.jpeg" className="w-52 h-30" alt="Volume 25" /></a>
	        <a href="https://www2.unesp.br/" target="blank"><img src="Logo_Unesp.svg.png" className="w-45 h-15" alt="Unesp Bauru" /></a>
	    </div>
	    <div className="w-1/2 grid grid-rows-2 grid-cols-3 gap-5">
	        <a href="#about" className="w-full text-white text-base/7 text-center"> Sobre </a>
	        <a href="#episodes" className="w-full text-white text-base/7 text-center"> Episódios </a>
	        <a href="#authors" className="w-full text-white text-base/7 text-center"> Autores </a>
	    </div>
	    <a href="/mp" className="w-1/6 text-white text-base/7 text-center"> Mundo Perdido... </a>
	</section>
    );
}

function Content() {
    return (
	<section className="h-full overflow-auto">
	    <section className="bg-[#f42f39] h-full flex flex-col">
	        <TopBar />
	        <div className="pl-20 h-full flex flex-row justify-center items-center">
	            <img src="/logo.jpeg" width="30%" alt="logo" className="" />
	        </div>
	        <div className="min-w-full flex flex-row justify-end items-center pr-3">
	            <a href="https://www.instagram.com/volume_025?igsh=MTN1enpsOWF3MW05YQ==" target="blank" className="hover:-translate-y-2 cursor-pointer transition-all"><img src="/instagram-logo.png" width="30px" /></a>
	            <a href="https://www.tiktok.com/@volume.025?_t=ZM-8zN6i7jgbrk&_r=1" target="blank" className="hover:-translate-y-2 cursor-pointer transition-all"><img src="/tiktok-logo.png" width="60px" /></a>
	            <a href="https://x.com/volume_025?t=yJtJ2kFSC5ldVU_tgRB6Wg&s=09" target="blank" className="hover:-translate-y-2 cursor-pointer transition-all"><img src="/twitter-logo.png" width="30px" /></a>
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
	    
	    <section id="authors" className="p-5 h-auto">
	        <p className="w-full tracking-[.20em] text-center text-xl font-black mb-5 font-(family-name:--font-black)">
	            Autores
	        </p>
	        <nav className="flex flex-row justify-center items-center">
	            <Profile name="Professora Karina Farías" />
	        </nav>
	        <nav className="h-auto grid grid-flow-row grid-rows-5 grid-cols-3">
	            <Profile name="Bruna Arcanjo da Silva Santos" />
	            <Profile name="Gabriel Augusto de Oliveira" />
	            <Profile name="Stéphanie de Nascimento Cardoso" />
	            <Profile name="Raíssa Lino Crisostomo" />
	            <Profile name="Daniel Nunes Teixeira" />
	            <Profile name="Beatriz Custódio dos Santos" />
	            <Profile name="Isabela de Oliveira Nascimento" />
	            <Profile name="Maria Eduarda Almeida de Moura Deodato" />
	            <Profile name="Clara Ferreira de Morais" />
	            <Profile name="Pedro Henrique Oliveira" />
	            <Profile name="Pedro Inacio Barbosa dos Santos" />
	            <Profile name="Ana Júlia de Souza" />
	            <Profile name="Mauricio Douglas Grecco Júnior" />
	            <Profile name="Sofia Novaes Teixeira Menezes" />
	            <Profile name="João Pedro Vito Passaroni" />
	            <Profile name="Enzo Reinaldo Kato" />
	            <Profile name="Danielle Ribeiro de Andrade" />
	            <Profile name="Rafael Rivera Fernandez Nunes" />
	            <Profile name="Andrés Rodrigo Herrera" />
	            <Profile name="Júlia Cardozo Santiago" />
	            <Profile name="Helena Singilo Torres da Silva" />
	        </nav>
	        <nav className="flex flex-row justify-center items-center">
	            <Profile name="Sthefany Victoria Nunes Gomes" />
	        </nav>
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
