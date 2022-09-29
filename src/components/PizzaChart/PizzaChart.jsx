import { Chart } from "react-google-charts"
import { estudanteContext } from "../../context/estudanteContexto"
import { useContext } from "react"
import './PizzaChart.modules.css'


export const PizzaChart = () => {
    const { estudante } = useContext(estudanteContext)

    const ageGroup1 = student.filter((item) => item.age_student >= 18 && item.age_student <= 21 )
    const ageGroup2 = student.filter((item) => item.age_student >= 22 && item.age_student <= 25 )
    const ageGroup3 = student.filter((item) => item.age_student >= 26 && item.age_student <= 29 )
    const ageGroup4 = student.filter((item) => item.age_student >= 30 && item.age_student <= 33 )
    const ageGroup5 = student.filter((item) => item.age_student > 33)

    const dados = [
        ["Faixa Etária", 'Quantidade de Alunos'],
        ["De 18 a 21 anos", ageGroup1.length],
        ["De 22 a 25 anos", ageGroup2.length],
        ["De 26 a 29 anos", ageGroup3.length],
        ["De 30 a 36 anos", ageGroup4.length],
        ["Acima de 33 anos", ageGroup5.length]
    ];

    const estilo = {
        pieHole: 0.4,
        backgroundColor: '#FFDD00',
        colors: ['#E56E25', '#F18A1F', '#3BA3D2', '#4EB966', '#EFB119']
    };

    return (
        <Chart
        fill="#FFDD00"
        chartType="PieChart"
        width="100%"
        height="400px"
        data={dados}
        options={estilo}
        />
    )
}