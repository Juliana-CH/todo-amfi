import React from 'react';
import styles from '../../app/page.module.css';

const Todo = ({ toDo, toDos, setToDos, /*delToDo*/ }) => {
  const setToDo = () => {
    const index = toDos.indexOf(toDo);
    const newToDos = [...toDos];
    newToDos[index].isCompleted = !newToDos[index].isCompleted;
    setToDos(newToDos);
  }
    return (
        <div className={styles.toDoListItem}>
       
          <input checked={toDo.isCompleted} onClick={ setToDo }
          className={`${styles.toDoListRadio} 
          ${styles['toDoListRadioChecked']}`} type='radio' />
          <p>{toDo.isCompleted ? <s>{toDo.text}</s> : toDo.text}</p>
       
          {/*<div className={styles.buttonContainer}>
            <button className={styles.delToDoButton} onClick={() => delToDo(toDo.id)}> 
            Deletar Tarefa 
            </button>
          </div>*/}

        </div>
    )
};

export default Todo;