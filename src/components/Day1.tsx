import { CheckSquare, GithubLogo } from "phosphor-react";

export function Day1(){
  return(
    <div>
      <span className="py-5 text-1xl text-green-300 flex flex-1 items-center gap-2">
        Day 1 - Criar repositorio
        <GithubLogo />
        <CheckSquare />
      </span>
    </div>
  )
}