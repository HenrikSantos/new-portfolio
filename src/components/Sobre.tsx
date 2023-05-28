export default function Sobre() {
	return (
		<section
			id='sobre'
			className='
				primary my-5 mx-auto flex justify-center flex-col
				lg:w-8/12'
		>
			<div className='mx-7 px-2 secundary rounded shadow-2xl flex justify-around gap-4'>
				<img className='rounded h-20' src="https://avatars.githubusercontent.com/u/36730816?v=4" alt="foto minha" />
				<div>
					<p className='font-light text-sm'>
						Sou desenvolvedor WEB Full-Stack, técnico de informática formado no IFSP e cursei um ano de ADS, às vezes brinco de fazer joguinhos com Unity/Unreal 🎮.
					</p>
				</div>
			</div>
		</section>
	);
}
