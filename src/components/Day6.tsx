import { CheckSquare, Rocket } from "phosphor-react";

export function Day6(){
  return(
    <div className="flex flex-col">
      <span className="py-5 text-1xl text-green-300 flex flex-1 items-center gap-2">
        Day 6 - Card com efeito glassmorphism
        <CheckSquare />
      </span>
      <div className="w-32 h-32 rounded-full bg-violet-800">
        <span className="text-9xl flex justify-center opacity-70" >
          <Rocket />
        </span>
      </div>
      <div className="w-32 h-32 pt-1 rounded-full bg-gradient-to-t from-violet-800 opacity-20 -rotate-180">
        <span className="text-9xl flex justify-center opacity-25" >
          <Rocket />
        </span>
      </div>
    </div>
  )
}