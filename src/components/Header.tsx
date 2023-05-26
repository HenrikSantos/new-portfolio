import { useState } from 'react';

// eslint-disable-next-line func-names
const Header = function () {
	const [showNav, setShowNav] = useState(false);

	return (
		<header className="
     bg-black p-4 sticky top-0 w-full
      md:flex md:justify-around md:items-center md:align-middle md:mx-auto
     "
		>
			<div className="flex justify-between">
				<a
					href="#inicio"
					className="
            text-2xl font-semibold
            md:text-3xl
          "
				>
          Henrik Santos
				</a>

				<button type="button" className="md:hidden" onClick={() => setShowNav((prev) => !prev)}>
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
								<rect y="0.463776" width="38" height="1.18841" fill="white" />
								<rect width="38" height="1.18841" transform="matrix(1 0 0 -1 0 12.3478)" fill="white" />
							</svg>
						)
					}
				</button>
			</div>
			<nav
				className={
					`${showNav ? 'flex' : 'hidden'} flex-col mt-5 min-h-screen font-normal
          md:flex md:flex-row md:min-h-full md:mt-0 md:px-3 md:text-lg md:w-4/12 md:justify-between`
				}
			>
				<hr className="opacity-50" />
				<a className="my-[0.30rem] p-[0.35rem] hover:bg-[#383838]/50 rounded" href="#sobre">
          Sobre
				</a>
				<hr className="opacity-50" />
				<a className="my-[0.30rem] p-[0.35rem] hover:bg-[#383838]/50 rounded" href="#stack">
          Stack
				</a>
				<hr className="opacity-50" />
				<a className="my-[0.30rem] p-[0.35rem] hover:bg-[#383838]/50 rounded" href="#projetos">
          Projetos
				</a>
				<hr className="opacity-50" />
				<a className="my-[0.30rem] p-[0.35rem] hover:bg-[#383838]/50 rounded" href="#formacao">
          Formação
				</a>
				<hr className="opacity-50" />
				<a className="my-[0.30rem] p-[0.35rem] hover:bg-[#383838]/50 rounded" href="#contato">
          Contato
				</a>
				<hr className="opacity-50" />
			</nav>
		</header>
	);
};

export default Header;
