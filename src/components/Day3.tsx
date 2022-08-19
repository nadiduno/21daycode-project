import { CheckSquare, Circle, ForkKnife, Heart } from "phosphor-react";

export function Day3(){
  return(
    <div className="flex flex-col">
      <span className="py-5 text-1xl text-green-300 flex flex-1 items-center gap-2">
        Day 3 - Botão com animate 
        <CheckSquare />
    </span>
      <a 
        className="relative py-2 uppercase text-bold flex flex-1  items-center justify-center w-[13rem] bg-violet-800 hover:bg-violet-600 transition-colors"
        href="https://www.twitch.tv/jakeliny"
        target="_blank">
        <ForkKnife />
        <Circle />
        Marmitech
        <span className="absolute mt-[-2.5rem] ml-48 text-pink-600 animate-ping">
          <Heart />
        </span>    
      </a>
      <span className="py-5"> 
        Frijão + Arroz + JavaScript
      </span>
    </div>
  )
}