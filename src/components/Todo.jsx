import React from 'react';
import styles from '../../app/page.module.css';

const Todo = ({ toDo, /*delToDo*/ }) => {
    return (
        <div className={styles.toDoListItem}>
       
          <input className={`${styles.toDoListRadio} ${styles['toDoListRadioChecked']}`} type='radio' />
          <p>{toDo.text}</p>
       
          {/*<div className={styles.buttonContainer}>
            <button className={styles.delToDoButton} onClick={() => delToDo(toDo.id)}> 
            Deletar Tarefa 
            </button>
          </div>*/}

        </div>
    )
};

export default Todo;