import { useState } from 'react';

 
const Header = function () {
	const [showNav, setShowNav] = useState(false);

	return (
		<header className="
			backdrop-blur-sm px-8 py-3 sticky top-0 w-full
			lg:w-8/12 lg:mx-auto lg:justify-between lg:items-center lg:align-middle lg:flex lg:px-0 lg:py-4
     "
		>
			<div className="flex justify-between">
				<a
					href="#inicio"
					className="
						text-2xl font-semibold
						md:font-bold md:text-4xl flex gap-3
					"
				>
					Henrik Santos
				</a>

				<button type="button" className="lg:hidden" onClick={() => setShowNav((prev) => !prev)}>
					{
						showNav ? (
							<svg
								className="w-7 h-7"
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
								className="w-7 h-7"
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
					flex-col mt-5 min-h-screen font-normal
					lg:flex lg:flex-row lg:min-h-full lg:mt-0 lg:px-3 lg:text-lg lg:w-4/12 lg:justify-end lg:gap-5
					`}
			>
				<hr className="opacity-50 my-3 lg:hidden" />
				<a className="my-[0.30rem] p-[0.35rem] hover:bg-[#383838]/50 rounded tracking-wider md:font-semibold" href="#stack">
					Stack
				</a>
				<hr className="opacity-50 my-3 lg:hidden" />
				<a className="my-[0.30rem] p-[0.35rem] hover:bg-[#383838]/50 rounded tracking-wider md:font-semibold" href="#projetos">
					Projetos
				</a>
				<hr className="opacity-50 my-3 lg:hidden" />
				<a className="my-[0.30rem] p-[0.35rem] hover:bg-[#383838]/50 rounded tracking-wider md:font-semibold" href="#formacao">
					Formação
				</a>
				<hr className="opacity-50 my-3 lg:hidden" />
			</nav>
		</header>
	);
};

export default Header;
