import { data } from './projetosData.json';

export default function Projetos() {
	return (
		<div className='w-full mt-6'>
			<h1 className='font-bold text-4xl'>
				Projetos:
			</h1>
			{
				data.map((projeto) => (
					<div key={ projeto.id} className='rounded secundary w-11/12 mt-5 mx-auto'>
						<img
							src={`/static/images/${projeto.img}`}
							alt={`projeto ${projeto.nome}`}
							className='rounded-t-md mx-auto w-auto md:w-full'
						/>
						<div className='px-2 pb-5 pt-3'>
							<h1 className='text-2xl font-semibold emphasis'>{ projeto.nome }:</h1>
							<p className='my-2 tracking-tight'>{ projeto.descricao }</p>
							<div className='flex flex-wrap gap-3'>
								{ 
									projeto.stacks.map((tec) => (
										<span key={tec} className='rounded-xl border px-2 font-extralight text-sm border-[var(--emphasis)] hover:bg-[var(--primary)] hover:cursor-pointer'>{ tec }</span>
									))
								}
							</div>
							<p className='mt-5 flex gap-3'>
								<a href={projeto.repositorio} target='_blank' rel="noreferrer" className='rounded border-[var(--emphasis)] hover:bg-[var(--emphasis)] primary p-2 '>Repositório</a>
								<a href={projeto.link} target='_blank' rel="noreferrer" className='rounded border-[var(--emphasis)] hover:bg-[var(--emphasis)] primary p-2 '>Acessar</a>
							</p>
						</div>
					</div>
				))
			}
		</div>
	);
}
