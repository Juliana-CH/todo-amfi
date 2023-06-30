import React from 'react';
import styles from '../../app/page.module.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Todo = ({ toDo, toDos, setToDos, delToDo }) => {
  const setToDo = () => {
    const index = toDos.indexOf(toDo);
    const newToDos = [...toDos];
    newToDos[index].isCompleted = !newToDos[index].isCompleted;
    setToDos(newToDos);
  }
    return (
      <div className={styles.toDoListItem}>
        
        <div className={styles.inputTask}>
        <input checked={toDo.isCompleted} onClick={ setToDo }
        className={`${styles.toDoListRadio} 
        ${styles['toDoListRadioChecked']}`} type='radio' />
  
        <p>{toDo.isCompleted ? <s>{toDo.text}</s> : toDo.text}</p>
        </div>
    
        <div className={styles.containerDeleteButton}>
        <button className={styles.delToDoButton} onClick={() => delToDo(toDo.id)}> 
        <DeleteOutlineIcon />
        </button>
        </div>

      </div>
    )
};

export default Todo;