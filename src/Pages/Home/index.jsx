import '../../App.css'
import { useState } from 'react'

function Home() {
  const [processo, setProcesso] = useState(0)
  const [honorarios, setHonorarios] = useState(10)

  const [guia, setGuia] = useState('')
  const [guias, setGuias] = useState([])
  const [total, setTotal] = useState(0)
  

  const taxaMulta = 0.1

  const indice = 0.075
  const selic = 0.105
  let totalIndices = indice + selic




  function handleInputChange (e){
    setGuia(e.target.value)
  }

  function handleGuias(e){
    e.preventDefault()
    const numberValue = parseFloat(guia)
    if (!isNaN(numberValue) && guia.trim() !== '' && numberValue > 0){
      setGuias([...guias, numberValue])
      setGuia('')
      setTotal((total + parseFloat(guia)))
            
    } else {
      alert("deve ser um numero valido")
    }
  }



    // Função para apagar a guia
    const handleRemoverGuia = (index, number) => {
      setGuias(guias.filter((_, i) => i !== index));
      setTotal(total - number)
    };

  return (
    <div className="App">
      <header>
        <h2>Calculadora</h2>
      </header>

      <form>
        <label htmlFor="processo">Valor do processo</label>
        <input type="number" name="processo" id="processo"  placeholder='###' onChange={value => setProcesso(value.target.value)} />
      </form>

      <form>
        <label htmlFor="honorarios">Taxa de honorarios</label>
        <input type="number" name="honorarios" id="honorarios"  placeholder='10% por padrão' onChange={value => setHonorarios(value.target.value)} />
      </form>
   
      <br></br>

      <form>
        <label>Valor da guia:
          <input type="number" name="guia" id="guia" value={guia} onChange={handleInputChange} autoFocus = "on"/>
        </label>
        <button onClick={handleGuias}>Adicionar valor</button>
      </form>

      {guias.length > 0 ? 
        (
          <>
            <h2>Valor total das guias: {total.toFixed(2)}</h2>
            <h3>Valores das guias</h3>
          </>
        ) : 
        (<h3>Insira os valores das guias</h3>)
      }

      <ul>
        {guias?.map((number, index) =>(
          <li key={index}>Guia nº {index +1} - R$ {number} <button onClick={()=> handleRemoverGuia(index, number)}>X</button></li>
        ))}
      </ul>
    </div>

  );
}

export default Home;
