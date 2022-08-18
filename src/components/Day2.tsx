import { CheckSquare } from "phosphor-react";

export function Day2(){
  return(
    <div> 
      <span className="py-5 text-1xl text-green-300 flex flex-1 items-center gap-2">
        Day 2 - Hello Word com imagem 
        <CheckSquare />
      </span>
      <div className="p-5 flex flex-1 items-center">
        <span className="text-5xl text-green-300 ">
          Hello 
        </span>
        <span className="text-7xl text-violet-800">
          W
        </span>
        <img className="w-20" src="/src/assets/World.png" alt="World" />
        <span className="text-7xl text-violet-800">
          rld
        </span>
      </div>
    </div> 
  )
}