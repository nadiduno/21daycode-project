import { Rocket } from "phosphor-react";
import { Day1 } from "../components/Day1";
import { Day2 } from "../components/Day2";
import { Day3 } from "../components/Day3";

export function Page21code(){
  return(
    <div className="p-8  flex flex-col">
      <h1 className="text-2xl flex flex-1 items-center gap-2">
        Challenge - Rockectseat
        <Rocket />
      </h1>
      <Day1 />
      <Day2 />
      <Day3 />
    </div>
  )
}