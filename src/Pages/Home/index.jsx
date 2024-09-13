import '../../App.css'
import { useState, useEffect } from 'react'

function Home() {
  const [processo, setProcesso] = useState('')
  const [honorarios, setHonorarios] = useState(10)
  const [bloqueado, setBloqueado] = useState('')

  const [guia, setGuia] = useState('')
  const [guias, setGuias] = useState([])
  const [totalGuias, setTotalGuias] = useState(0)

  const [radio, setRadio] = useState("0.02")

  let valorHonorario = (processo * parseFloat(honorarios /100)).toFixed(2)
  let valorJuros = (processo * 0.01).toFixed(2)
  let valorMulta = (radio * processo).toFixed(2)

  function handleRadio(event){
    setRadio(event.target.value)
  }

  const selic = 0.105

  function handleInputChange (e){
    setGuia(e.target.value)
  }

  function handleGuias(e){
    e.preventDefault()
    const numberValue = parseFloat(guia)
    if (!isNaN(numberValue) && guia.trim() !== '' && numberValue > 0){
      setGuias([...guias, numberValue])
      setGuia('')
      setTotalGuias((totalGuias + parseFloat(guia)))
            
    } else {
      alert("deve ser um numero valido")
    }
  }

  // Função para apagar a guia
  function handleRemoverGuia (index, number) {
    setGuias(guias.filter((_, i) => i !== index));
    setTotalGuias(totalGuias - number)
  };

  function reset(){
    setProcesso('')
    setHonorarios(10)
    setBloqueado('')
    setGuia('')
    setGuias([])
    setTotalGuias(0)
    setRadio("0.02")
  }

  useEffect(() => {
  }, [])

  return (
    <div className="App">
      <header>
        <h2>Calculadora</h2>
      </header>

      <form>
        <label htmlFor="processo">Valor do processo</label>
        <input type="number" name="processo" id="processo"  value={processo} onChange={value => setProcesso(value.target.value)} />
      </form>

      <form>
        <label htmlFor="honorarios">Taxa de honorarios</label>
        <input type="number" name="honorarios" id="honorarios" value={honorarios} onChange={value => setHonorarios(value.target.value)} />
      </form>

      <form>
        <label htmlFor="bloqueado">Valor bloqueado</label>
        <input type="number" name="bloqueado" id="bloqueado"  value={bloqueado} onChange={value => setBloqueado(value.target.value)} />
      </form>

      {/* Radio button */}
      <h4>Tipo de processo:</h4>
      <div>
        <div>
          <input type="radio" id="mensalidade" value="0.02" checked={radio === "0.02"} onChange={handleRadio}/>
          <label htmlFor="mensalidade">Mensalidade - 2%</label>
        </div>
        <div>
          <input type="radio" id="acordo" value="0.1" checked={radio === "0.1"} onChange={handleRadio}/>
          <label htmlFor="mensalidade">Acordo - 10%</label>
        </div>
      </div>
      


      <br></br>

      <form>
        <label>Valor da guia:
          <input type="number" name="guia" id="guia" value={guia} onChange={handleInputChange} autoFocus = "on"/>
        </label>
        <button onClick={handleGuias}>Adicionar valor</button>
      </form>


      <hr/>


      <h2>Valor do processo: R$ {(processo * 1).toFixed(2)}</h2>
      <h2>Honorarios advocaticios: R$ {valorHonorario}</h2>
      <h2>Juros de 1% sobre valor do processo: R$ {valorJuros}</h2>
      <h2>Multa {radio * 100}% de acordo com o tipo selecionado: R$ {valorMulta}</h2>
      <h2>Valor bloqueado da pessoa: R$ {(bloqueado*1).toFixed(2)}</h2>
    

      {guias.length > 0 ? 
        (
          <>
            <h2>Valor total das guias: R$ {totalGuias.toFixed(2)}</h2>
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
        <button onClick={reset}>Resetar valores</button>
    </div>

  );
}

export default Home;

