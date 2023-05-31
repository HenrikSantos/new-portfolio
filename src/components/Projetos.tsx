import { data } from './projetosData.json';

export default function Projetos() {
	return (
		<div className='mt-6 w-full'>
			<h1 className='text-4xl font-bold'>
				Projetos:
			</h1>
			{
				data.map((projeto) => (
					<div key={ projeto.id} className='secundary mx-auto mt-5 w-11/12 rounded'>
						<img
							src={`/static/images/${projeto.img}`}
							alt={`projeto ${projeto.nome}`}
							className='mx-auto w-auto rounded-t-md md:w-full'
						/>
						<div className='px-2 pb-5 pt-3'>
							<h1 className='emphasis text-2xl font-semibold'>{ projeto.nome }:</h1>
							<p className='my-2 tracking-tight'>{ projeto.descricao }</p>
							<div className='flex flex-wrap gap-3'>
								{ 
									projeto.stacks.map((tec) => (
										<span key={tec} className='rounded-xl border border-[var(--emphasis)] px-2 text-sm font-extralight hover:cursor-pointer hover:bg-[var(--primary)]'>{ tec }</span>
									))
								}
							</div>
							<p className='mt-5 flex gap-3'>
								<a href={projeto.repositorio} target='_blank' rel="noreferrer" className='primary rounded border-[var(--emphasis)] p-2 hover:bg-[var(--emphasis)] '>Repositório</a>
								<a href={projeto.link} target='_blank' rel="noreferrer" className='primary rounded border-[var(--emphasis)] p-2 hover:bg-[var(--emphasis)] '>Acessar</a>
							</p>
						</div>
					</div>
				))
			}
		</div>
	);
}
