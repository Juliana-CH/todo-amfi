import { useState } from 'react';
import styles from '../../app/page.module.css';

const TodoForm = ( {addToDo, delToDo }) => {
    const [value, setValue] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addToDo (value);
        setValue("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className={styles.toDoListForm} type='text' 
                placeholder='Adicione aqui uma tarefa' maxLength={500} 
                value={value}
                onChange={(e) => setValue(e.target.value)}/>
                
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