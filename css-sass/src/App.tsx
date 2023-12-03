import './styles.scss'

function App() {

  const listSelect = [
    "Aleatório",
    "Unicórnio",
    "Apocalipse Zumbi",
    "Navio Pirata"
  ]

  const roles = [
    "ProgSr",
    "ProgJr",
    "Gerente",
    "Testador",
    "Analista",
    "Designer",
    "Estagiário",
    "Suporte"
  ]

  return (
    <div className='container-main'>
      <div className='container-primary'>
        <h1>Agile Life</h1>
        <a href="http://www.google.com.br" target="_blank" rel="site do google">Site do Google</a>
        <p>A sua equipe de TI resolveu diversificar e trabalhar com tipos de projetos pouco ortodoxos.
          <br />  Seu desafio é entregar todos os itens solicitados antes que acabe o prazo, o café ou a boa-vontade do cliente.</p>
        <label htmlFor="project">Inicie o Projeto</label>
        <select name="project" id="">
          {listSelect.map((item) => (
            <option value={item} key={item}>{item}</option>
          ))}
        </select>
        <form action="">
          <div>
            <label htmlFor="">Selecione de 2 a 4 papéis para compor o Time:</label>
            <select className='role-select' name="role" id="role" multiple>
              {roles.map((role) => (
                <option value={role} key={role}>{role}</option>
              ))}
            </select>

            <input type="radio" name="escolher_lista" id="lista" value="lista" checked />
            <label htmlFor="lista">Escolher Lista</label>
            <input type="radio" name="dois_aleatorios" id="2" value="2" />
            <label htmlFor="2">2 aleatórios</label>
            <input type="radio" name="tres_aleatorios" id="3" value="3" />
            <label htmlFor="3">3 aleatórios</label>
            <input type="radio" name="quatro_aleatorios" id="4" value="4" />
            <label htmlFor="4">4 aleatórios</label>
          </div>
        </form>
      </div>
      <div className='container-secundary'>
        <h1>Qual e seu nome?</h1>
        <input type="text" />
        <button>Entrar na Sala</button>
      </div>
    </div>
  )
}

export default App
