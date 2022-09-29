import styles from './Table.modules.css'


export const Table = () => {
  const students = [
    {id: 1, 
      nome: "Vitor Augusto",
      turma: 'T18',
      idade: 23},
    {id: 2, 
      nome: "Camila Leite",
      turma: 'T15',
      idade: 21},
    {id: 3, 
      nome: "Diego Melo",
      turma: 'T18',
      idade: 25},
    {id: 4, 
      nome: "Maria",
      turma: 'T12',
      idade: 21},
    {id: 5, 
      nome: "David",
      turma: 'T12',
      idade: 20}
  ]


    return (
      <div className='tableContainer'>
      <table className='table'>
        <thead>
          <tr className='trTitle'>
            <th className='background'>#</th>
            <th className='background'>Nome do Estudante</th>
            <th className='background'>Turma</th>
            <th className='background'>Idade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item, index)=>{
            return (
              <tr className='trBody' key={index}>
                <td className='background'>{item.id}</td>
                <td className='background'>{item.nome}</td>
                <td className='background'>{item.turma}</td>
                <td className='background'>{item.idade}</td>
              </tr>
            )
          })}
        </tbody>
        </table>
        </div>
    )
}