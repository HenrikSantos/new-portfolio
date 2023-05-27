export default function Sobre() {
	return (
		<section
			id='sobre'
			className='
				primary my-5 mx-auto flex justify-center flex-col
				lg:w-8/12'
		>
			<div className='secundary rounded shadow-2xl p-4 mx-7 space-y-4'>
				<div className='mt-3'>
					<h1 className='text'>👋 - <span className='underline'>Sobre</span>:</h1>
					<p className='font-light text-sm'>
						Olá, meu nome é Henrik, sou desenvolvedor WEB Full-Stack, técnico de informática formado no IFSP e cursei um ano de ADS, às vezes brinco de fazer joguinhos com Unity/Unreal 🎮.
					</p>
				</div>
				<hr />
				<ul className='flex flex-col space-y-1 font-light text-sm'>
					<li className='text font-normal'>
						💻 - <span className='underline'>Tech Stack</span>:
					</li>
					<li>
						- Front End: HTML, CSS, Javascript, TypeScript, React, Redux Tailwind e Bootstrap;
					</li>
					<li>
						- Back End: Python, Node, Express, MySql, MongoDB, Mongoose e Sequelize;
					</li>
					<li>
						- QA: Jest, Vitest, Mocha, Chai, Sinon e Pytest;
					</li>
					<li>
						- Arquiteturas:  RESTful, TDD e SOLID;
					</li>
					<li>
						- Outros: Git, Docker e Eslint;
					</li>
				</ul>
				<hr />
				<ul className='font-light text-sm'>
					<li className='text font-normal'>
						✔️ - <span className='underline'>Links</span>:
					</li>
					<li>
						- <a className='hover:cursor-pointer hover:underline' href="https://github.com/HenrikSantos">GitHub</a> 
					</li>
					<li>
						- <a className='hover:cursor-pointer hover:underline' href="https://henriksantos.github.io/">Site Portfólio</a> 
					</li>
					<li>
						- < a className='hover:cursor-pointer hover:underline' href="https://www.youtube.com/@gimmicodando730">Canal no YT</a> 
					</li>
				</ul>
			</div>
		</section>
	);
}
