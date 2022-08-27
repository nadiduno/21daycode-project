import { CheckSquare, Rocket } from "phosphor-react";

export function Day11(){
  return(
    <div className="flex flex-col">
      <span className="py-5 text-1xl text-green-300 flex flex-1 items-center gap-2">
        Day 11 - Form Login
        <CheckSquare />
      </span>
    <div className="min-h-screen min-h-screen bg-backImage bg-cover bg-no-repeat flex flex-col items-center">
       <div className="m-[110px] max-w-[640px] text-3xl">
      
          <strong className="text-green-300"> Computação</strong>
          <strong className="text-violet-700"> para</strong>
          <strong className="text-pink-500"> crianças</strong> 
      </div>
       <div className="p-6 w-full max-w-[1100px flex items-center justify-between  mx-auto]">
       
        <div className="max-w-[640px]">
          <img
          src="/src/assets/Baby.png" 
          className="mt-10 w-64"
          alt="Foto de criança com computador" />
        </div>
        <div className="p-8 bg-gray-200 border border-gray-300 rounded">
          <strong className="text-xl mb-6 block text-violet-800">
            Inscriva seu filho. Agende uma aula gratis
          </strong>
          <form action="" className="flex flex-col gap-2 w-full">
          <input 
              className="bg-green-100 border border-green-100 rounded px-5 h-14"
              type="text" 
              placeholder="O nome de seu filho"/>
            <input 
              className="bg-green-100 rounded px-5 h-14"
              type="email" 
              placeholder="Digite seu melhor email"/>
            <button
              type="submit"
              className="mt-4 bg-violet-400 uppercase py-4 rounded font-bold text-sm hover:bg-violet-700 transition-colors">
                Inscrivir
            </button>
          </form>
        </div>
       </div>
       
      <div className=" ">
        <p className="flex justify-center">
            A maior escola de programão, aulas online, professora Nadi Duno
          </p>
      </div>
    </div>
    </div>
  )
}