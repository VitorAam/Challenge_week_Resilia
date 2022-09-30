import "./Form.module.css"

export const Form = (props) => {
    return (
    <div>
      <form className='formContainer'>
        <section className='inputsForm'>
          <input 
            className='inputForm' 
            type="text" name="name" 
            id="name" 
            placeholder="Nome do Estudante" 
            onChange={props.onBlurName}
            value={props.valueName}
            required
          />
          <input 
            className='inputForm' 
            type="text" 
            name="class" 
            id="class" 
            placeholder="Turma" 
            onChange={props.onBlurClass}
            value={props.valueClass}
            required
            />
          <input 
            className='inputForm' 
            type="number"
            name="age" 
            id="age" 
            placeholder="Idade" 
            onChange={props.onBlurAge}
            value={props.valueAge}
            required
          />
        </section>        
        <button 
          className='buttonForm' 
          onClick={props.onClick}>
            Enviar
        </button>
      </form>
    </div>
    )
}