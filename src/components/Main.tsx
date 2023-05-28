import Inicio from './Inicio';
import Sobre from './Sobre.tsx';
import Stack from './Stack.tsx';
import Projetos from './Projetos.tsx';
import Fomacao from './Fomacao.tsx';
import Contato from './Contato.tsx';
export default function Main() {
	return (
		<main>
			<Inicio />
			<div className='md:flex md:justify-between lg:w-8/12 mx-auto'>
				<Sobre />
				<div className='w-full'>
					<Stack />
					<Projetos />
					<Fomacao />
					<Contato />
				</div>
			</div>
		</main>
	);
}
