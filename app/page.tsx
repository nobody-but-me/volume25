
import Image from "next/image";


function TopBar() {
    return (
	<nav className="flex flex-row p-5 border-2 border-solid border-black">
	    <div className="w-full h-full">
	        Volume 25
	    </div>
	    <nav>
	        Teste
	    </nav>
	</nav>
    );
}

function Footer() {
    return (
	<div className="p-5 border-2 border-solid border-black">
	    Footer
	</div>
    );
}

function Content() {
    return (
	<section className="h-full border-2 border-solid border-black">
	    <section className="p-5">
	        Content
	    </section>
	    <Footer />
	</section>
    );
}

export default function Home() {
    return (
	<div className="h-screen w-screen overflow-hidden">
	    <TopBar />
	    <Content />
	</div>
    );
}
