'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = function () {
  const [displayNav, setDisplayNav] = useState(false);
  return (
    <header className="flex flex-col px-4 fixed w-full top-0 bg-black">
      <div className="flex justify-between my-5">
        <h1 className="text-xl font-semibold cursor-default">Henrik Santos</h1>
        <button type="button" onClick={() => setDisplayNav((prev) => !prev)}>
          {
            displayNav ? (
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                className="duration-200 w-7 h-w-7 ease-in-out"
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
                width="38"
                height="13"
                viewBox="0 0 38 13"
                fill="none"
                className="duration-200 w-7 h-w-7 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.463776" width="38" height="1.18841" fill="white" />
                <rect width="38" height="1.18841" transform="matrix(1 0 0 -1 0 12.3478)" fill="white" />
              </svg>
            )
          }
        </button>
      </div>
      <nav className={`${displayNav ? 'flex' : 'hidden'} flex-col h-screen`}>
        <hr className="opacity-40" />
        <Link href="#sobre" className="my-2 p-[0.35rem] rounded font-light hover:bg-zinc-600/30">
          Sobre
        </Link>
        <hr className="opacity-40" />
        <Link href="#stack" className="my-2 p-[0.35rem] rounded font-light hover:bg-zinc-600/30">
          Stack
        </Link>
        <hr className="opacity-40" />
        <Link href="#projetos" className="my-2 p-[0.35rem] rounded font-light hover:bg-zinc-600/30">
          Projetos
        </Link>
        <hr className="opacity-40" />
        <Link href="#formação" className="my-2 p-[0.35rem] rounded font-light hover:bg-zinc-600/30">
          Formação
        </Link>
        <hr className="opacity-40" />
        <Link href="#contato" className="my-2 p-[0.35rem] rounded font-light hover:bg-zinc-600/30">
          Contato
        </Link>
        <hr className="opacity-40" />
      </nav>
    </header>
  );
};

export default Header;
