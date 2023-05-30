export default function Stack() {
	return (
		<section id='stack' className='flex justify-center flex-col'>
			<h1 className='mb-1'><span className='font-semibold text-4xl'>Stack:</span></h1>
			<ul className='flex flex-col space-y-1 font-thin mx-3'>
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
		</section>
	);
}
