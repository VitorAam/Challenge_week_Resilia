import styles from "./Form.module.css"

export const Form = () => {
    return (
        <section>
            <input type="text" placeholder="Nome do Estudante" className={styles.inputPadraoUm}/><input type="text" placeholder="Turma" className={styles.inputPadraoUm}/><input type="text" placeholder="Idade" className={styles.inputPadraoDois}/>
            <button>Enviar</button>
        </section>
    )
}