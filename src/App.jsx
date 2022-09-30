import { Header } from './components/Header/Header'
import { Form } from './components/Form/Form'
import { Table } from './components/Table/Table'
import { PizzaChart } from './components/PizzaChart/PizzaChart'
import { getEstudante, postEstudante } from './request/request'
import { estudanteContext } from './context/estudanteContexto.jsx'

import { useState, useEffect, useContext } from 'react'

import './App.css'


function App() {

  const [nome, setNome] = useState('')
  const [turma, setTurma] = useState('')
  const [idade, setIdade] = useState('')
  const {estudante, setEstudante} = useContext(estudanteContext)
  const [control, setControl] = useState(0)
  
  const get = async () => {
    const estudantes = await getEstudante()
    setEstudante(estudantes)
  }

  useEffect(()=> {
    get()
  }, [estudante] )

  const handleClick = (e) => {
    e.preventDefault()
    const newStudent = {
      nome: nome,
      turma: turma,
      idade: parseInt(idade)
    }
    postEstudante(newStudent).then((res) => {
      alert("Cadastro realizado com sucesso")
    }).catch((e) => {
      alert('Verifique os dados. Cadastro não realizado!')
    })
    setControl(control + 1)
    handleInputValue()
  }

  const handleInputValue = () => {
    setNome('')
    setTurma('')
    setIdade('')
  }

  return (
    <div className="App">
      <Header />
      <Form 
        onBlurName={(e) => {
          setNome(e.target.value)
        }}
        valueName={nome}
        onBlurClass={(e) => {
          setTurma(e.target.value)
        }}
        valueClass={turma}
        onBlurAge={(e) => {
          setIdade(e.target.value)
        }}
        valueAge={idade}
        onClick={(e) => {
          handleClick(e)
          }}/>
    </div>
  )
}

export default App
