import './App.css'
import { Usuario } from './models/Usuario'
import { ContaBancaria } from './models/ContaBancaria'

function App() {
  const usuario1 = new Usuario('Ana', 25)
  const usuario2 = new Usuario('Pedro', 25)
  const usuario3 = new Usuario('Felipe', 25)
  const usuario4 = new Usuario('Carol', 25)
  const conta = new ContaBancaria(usuario2)

  conta.depositar(200)

  return (
    <>
      <p>{usuario1.apresentar()}</p>
      <p>{usuario2.apresentar()}</p>
      <p>{usuario3.apresentar()}</p>
      <p>{usuario4.apresentar()}</p>
      <p>{conta.verSaldo()}</p>
    </>
  )
}

export default App
