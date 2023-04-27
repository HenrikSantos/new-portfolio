import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex flex-col mx-4">
      <div className="flex justify-between my-5">
        <h1 className="text-xl font-semibold cursor-default">Henrik Santos</h1>
        <button type="button">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </button>
      </div>
      <hr className="opacity-40" />
      <nav className="flex flex-col">
        <Link href="#Sobre" className="my-2 p-[0.35rem] rounded font-light hover:bg-zinc-600/30">
          Sobre
        </Link>
        <hr className="opacity-40" />
        <Link href="#Sobre" className="my-2 p-[0.35rem] rounded font-light hover:bg-zinc-600/30">
          Stack
        </Link>
        <hr className="opacity-40" />
        <Link href="#Sobre" className="my-2 p-[0.35rem] rounded font-light hover:bg-zinc-600/30">
          Projetos
        </Link>
        <hr className="opacity-40" />
        <Link href="#Sobre" className="my-2 p-[0.35rem] rounded font-light hover:bg-zinc-600/30">
          Formação
        </Link>
        <hr className="opacity-40" />
        <Link href="#Sobre" className="my-2 p-[0.35rem] rounded font-light hover:bg-zinc-600/30">
          Contato
        </Link>
        <hr className="opacity-40" />
      </nav>
    </header>
  );
}
