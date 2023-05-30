import Inicio from './Inicio';
import Sobre from './Sobre.tsx';
import Stack from './Stack.tsx';
import Projetos from './Projetos.tsx';
import Fomacao from './Fomacao.tsx';
export default function Main() {
	return (
		<main>
			<Inicio />
			<div className='md:flex md:items-start lg:w-8/12 mx-auto md:gap-16'>
				<Sobre />
				<div className='w-full md:border-l border-[var(--emphasis)] px-7 flex flex-col space-y-10'>
					<Stack />
					<Projetos />
					<Fomacao />
				</div>
			</div>
		</main>
	);
}
