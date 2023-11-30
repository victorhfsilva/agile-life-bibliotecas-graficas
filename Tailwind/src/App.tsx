export function App() {
  return (
    <div className='flex justify-evenly items-center min-h-screen'>
      <form className='flex flex-col justify-center items-center gap-8'>
        <h1 className='text-[#485494] text-3xl'>Qual o seu nome?</h1>
        <input
          className='border w-[21rem] h-[3.5rem] border-[#485494] bg-[#48549426]'
          type='text'
        />
        <button className='border border-black rounded-lg bg-[#485494] text-white w-[12.375rem] h-14'>
          Entrar na sala
        </button>
      </form>
    </div>
  )
}
