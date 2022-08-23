import { CheckSquare, ThumbsDown, ThumbsUp} from "phosphor-react";

export function Day7(){
  return(
    <div className="flex flex-col">
      <span className="py-5 text-1xl text-green-300 flex flex-1 items-center gap-2">
        Day 7 - Contador
        <CheckSquare />
      </span>
      <div className="w-40 h-25 rounded-xl bg-gray-500 opacity-70 flex flex-col items-center justify-between p-3">
        <span className="pb-2">
          Contador
        </span>
        <span id="cont" className="text-9xl">
          0
        </span>
        <div className="w-full flex flex-1 justify-center gap-4">
          <button 
            className="text-sm text-green-300  border rounded-sm py-1 px-3"
            >
            <ThumbsUp />
          </button>
          
          <button 
            className="text-sm text-green-300 border rounded-sm py-1 px-3"
            >
            <ThumbsDown />
          </button>
        </div>
        
        </div>
    </div>
  )
}
