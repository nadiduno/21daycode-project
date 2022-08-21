import { CheckSquare } from "phosphor-react";
import { Erro404 } from "./Erro404";

export function Day5(){
  return(
    <div className="flex flex-col items-center justify-center">
      <span className="absolute text-6xl py-5 mt-[-25rem] ml-[6rem] text-green-300 flex flex-1 items-center gap-2">
        Page not found
      </span>
      <div className="relative flex flex-1 justify-center">
      <span className="absolute w-1/12 mt-[15rem] ml-[-37rem] text-[20rem] justify-items-center">
        4
      </span>
      <span className="absolute w-1/12 mt-[-8rem] ml-[-71rem]">
        <Erro404 />
      </span>
      <span className="absolute w-1/12 mt-[15rem] ml-[17rem] text-[20rem] justify-items-center">
        4
      </span>
      </div>
      <span className="text-2xl mt-[41rem] ml-[3rem]">
        Marmitech?
      </span>
    </div>
  )
}