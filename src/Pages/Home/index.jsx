import '../../App.css'
import { useState } from 'react'

function Home() {
  const [processo, setProcesso] = useState(0)
  const [honorarios, setHonorarios] = useState(10)
  const [custo, setCusto] = useState([0])
  const [custoB, setCustoB] = useState([0])
  let total = 0
  const taxaMulta = 0.1

  const indice = 0.075
  const selic = 0.105
  let totalIndices = indice + selic
  let resultado = custo * indice

  return (
    <div className="App">
      <header>
        <h2>Calculadora</h2>
      </header>

      <form action="">
        <label htmlFor="processo">Valor do processo</label>
        <input type="number" name="processo" id="processo"  placeholder='###' onChange={value => setProcesso(value.target.value)} autofocus = "on"/>
      </form>

      <form action="">
        <label htmlFor="honorarios">Taxa de honorarios</label>
        <input type="number" name="honorarios" id="honorarios"  placeholder='10% por padrão' onChange={value => setHonorarios(value.target.value)} />
      </form>
      
      <form action="">
        <label htmlFor="teste">Custo B da guia</label>
        <input type="number" name="teste" id="teste"  placeholder='###' onChange={value => setCustoB(value.target.value)} />
      </form>

      <p>Indice usado é o indice do art. 523: {indice * 100}%</p>
      <p>Indice selic usado: {selic * 100}%</p>
      <p>Honorarios: {honorarios * processo /100}</p>

      {total = parseInt(custo) + parseInt(custoB)}

      {/* <p>{resultado}</p> */}
      <p>Custo: {custo}</p>
      <p>Custo B: {custoB}</p>
      <p>Total: {total}</p>

      <p>Total indices: {(totalIndices * 100)}%</p>

      <h3>Valor final calculado: {total * totalIndices * taxaMulta}</h3>
    </div>
  );
}

export default Home;
