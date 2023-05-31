const Header = function () {

	return (
		// sticky top-0 w-full px-8 py-3 backdrop-blur-sm
		<header className="
			hidden
			lg:mx-auto lg:flex lg:w-8/12 lg:items-center lg:justify-between lg:px-0 lg:py-4 lg:align-middle
     "
		>
			<div className="flex justify-between">
				<a
					href="#inicio"
					className="
						flex gap-3
						text-4xl font-bold
					"
				>
					Henrik Santos
				</a>
			</div>
			<nav
				className={`
					mt-0
					flex min-h-full w-4/12 flex-row justify-end gap-5 px-3 text-lg font-normal
				`}
			>
				<a className="my-[0.30rem] rounded p-[0.35rem] font-semibold tracking-wider hover:bg-[#383838]/50" href="#stack">
					Stack
				</a>
				<a className="my-[0.30rem] rounded p-[0.35rem] font-semibold tracking-wider hover:bg-[#383838]/50" href="#projetos">
					Projetos
				</a>
				<a className="my-[0.30rem] rounded p-[0.35rem] font-semibold tracking-wider hover:bg-[#383838]/50" href="#formacao">
					Formação
				</a>
			</nav>
		</header>
	);
};

export default Header;
