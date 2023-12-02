export function App() {
  return (
    <div className='flex justify-evenly flex-col items-center min-h-screen'>
      <h1 className='text-4xl'>Agile Life</h1>
      <a className='no-underline' href='https://www.google.com/'>
        Google
      </a>
      <p className='text-lg'>
        A sua equipe de TI resolveu diversificar e trabalhar com tipos de
        projetos pouco ortodoxos.
      </p>
      <label htmlFor='project'>Selecione o projeto</label>
      <select
        id='project'
        className='border w-[21rem] h-[3.5rem] border-[#485494] bg-[#48549426]'
      >
        <option value='aleatorio'>Aleatório</option>
        <option value='unicornio'>Unicórnio</option>
        <option value='apolicalipse zumbi'>Apocalipse Zumbi</option>
        <option value='navio pirata'>Navio Pirata</option>
      </select>

      <form>
        <p>Escolha o número de itens aleatórios:</p>
        <input type='radio' id='lista' name='aleatorio' value='lista' />
        <label htmlFor='lista'>Escolher da lista</label>
        <br />
        <input type='radio' id='dois' name='aleatorio' value='2' />
        <label htmlFor='dois'>2 aleatórios</label>
        <br />
        <input type='radio' id='tres' name='aleatorio' value='3' />
        <label htmlFor='tres'>3 aleatórios</label>
        <br />
        <input type='radio' id='quatro' name='aleatorio' value='4' />
        <label htmlFor='quatro'>4 aleatórios</label>
        <br />
      </form>

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
