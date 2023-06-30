import { useState } from 'react';
import styles from '../../app/page.module.css';

const TodoForm = ( {addToDo }) => { //Deletei toDos e delToDo por que não é usado no formulário
    const [value, setValue] = useState (""); //Atualização do estado do componente

    const handleSubmit = (e) => { //Renderiza nova tarefa quando é enviada
        e.preventDefault();
        if (!value) return; //Se value é vazia não executa adição da tarefa 
        addToDo (value); //Adiciona a tarefa
        setValue(""); //Limpa o campo de adicionar, depois de usá-lo
    };

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.toDoListForm} type='text' 
                placeholder='Adicione aqui uma tarefa' maxLength={500} 
                value={value}
                onChange={(e) => setValue(e.target.value)}/> 
                {/* Evento é acionado e atualiza o estado de 'value' para 
                que o usuário digitar*/}
                
                <div className={styles.buttonContainer}>
                    <button type='submit' className={styles.addToDoButton}> 
                    + Adicionar Tarefa 
                    </button>
                </div>
                
            </form>
        </div>
    )
};

export default TodoForm;