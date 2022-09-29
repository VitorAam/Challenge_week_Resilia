import { Header } from './components/Header/Header'
import { Form } from './components/Form/Form'
import { Table } from './components/Table/Table'
import { PizzaChart } from './components/PizzaChart/PizzaChart'
import './App.css'


function App() {

  return (
    <div className="App">
      <Header/>
      <Form/>
      <div className='textContainer'>
        <h2 className='title'>_dados</h2>
        <p className='subtitle'>Observe abaixo a listagem de Resilientes e estudantes e sua divisão por faixa etária</p>
      </div>
      <div className='dataContainer'>
        <Table/>
        <PizzaChart/>
      </div>
    </div>
  )
}

export default App
