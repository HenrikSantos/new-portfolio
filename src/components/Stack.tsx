export default function Stack() {
	return (
		<section id='stack' className='mx-3 flex justify-center flex-col lg:w-8/12'>
			<h1 className='mb-1'><span className='text-xl'>Stack</span>:</h1>
			<ul className='flex flex-col space-y-1 font-light text-sm'>
				<li>
					- <span className='underline text-lg'>Front End</span>: HTML, CSS, Javascript, TypeScript, React, Redux Tailwind e Bootstrap;
				</li>
				<li>
					- <span className='underline text-lg'>Back End</span>: Python, Node, Express, MySql, MongoDB, Mongoose e Sequelize;
				</li>
				<li>
					- <span className='underline text-lg'>QA</span>: Jest, Vitest, Mocha, Chai, Sinon e Pytest;
				</li>
				<li>
					- <span className='underline text-lg'>Arquiteturas</span>:  RESTful, TDD e SOLID;
				</li>
				<li>
					- <span className='underline text-lg'>Outros</span>: Git, Docker e Eslint;
				</li>
			</ul>
			{/* <ul className='font-light text-sm'>
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
			</ul> */}
		</section>
	);
}
