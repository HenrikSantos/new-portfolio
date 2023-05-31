import { useState } from 'react';

 
const Header = function () {
	const [showNav, setShowNav] = useState(false);

	return (
		<header className="
			sticky top-0 w-full px-8 py-3 backdrop-blur-sm
			lg:mx-auto lg:flex lg:w-8/12 lg:items-center lg:justify-between lg:px-0 lg:py-4 lg:align-middle
     "
		>
			<div className="flex justify-between">
				<a
					href="#inicio"
					className="
						flex gap-3
						text-2xl font-semibold md:text-4xl md:font-bold
					"
				>
					Henrik Santos
				</a>

				<button type="button" className="lg:hidden" onClick={() => setShowNav((prev) => !prev)}>
					{
						showNav ? (
							<svg
								className="h-7 w-7"
								width="28"
								height="28"
								viewBox="0 0 28 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									width="36.8469"
									height="1.08909"
									transform="matrix(0.707107 0.707107 -0.58739 0.809304 1.60779 0.0726318)"
									fill="white"
									fillOpacity="0.6"
								/>
								<rect
									width="36.8469"
									height="1.08909"
									transform="matrix(0.707107 -0.707107 0.58739 0.809304 0.968018 26.1273)"
									fill="white"
									fillOpacity="0.6"
								/>
							</svg>
						) : (
							<svg
								className="h-7 w-7"
								width="38"
								height="13"
								viewBox="0 0 38 13"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect width="38" height="1.18841" fill="white" />
								
								<rect width="38" height="1.18841" transform="matrix(1 0 0 -1 0 12.3478)" fill="white" />
							</svg>
						)
					}
				</button>
			</div>
			<nav
				className={`
					${showNav ? 'block' : 'hidden'}
					mt-5 min-h-screen flex-col font-normal
					lg:mt-0 lg:flex lg:min-h-full lg:w-4/12 lg:flex-row lg:justify-end lg:gap-5 lg:px-3 lg:text-lg
					`}
			>
				<hr className="my-3 opacity-50 lg:hidden" />
				<a className="my-[0.30rem] rounded p-[0.35rem] tracking-wider hover:bg-[#383838]/50 md:font-semibold" href="#stack">
					Stack
				</a>
				<hr className="my-3 opacity-50 lg:hidden" />
				<a className="my-[0.30rem] rounded p-[0.35rem] tracking-wider hover:bg-[#383838]/50 md:font-semibold" href="#projetos">
					Projetos
				</a>
				<hr className="my-3 opacity-50 lg:hidden" />
				<a className="my-[0.30rem] rounded p-[0.35rem] tracking-wider hover:bg-[#383838]/50 md:font-semibold" href="#formacao">
					Formação
				</a>
				<hr className="my-3 opacity-50 lg:hidden" />
			</nav>
		</header>
	);
};

export default Header;
