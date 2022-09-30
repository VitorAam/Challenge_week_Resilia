import styles from './Table.modules.css';
import { estudanteContext } from '../../context/estudanteContexto';
import { useContext } from 'react';


export const Table = () => {
  const { student } = useContext(estudanteContext)


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
          {student.map((item, index)=>{
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