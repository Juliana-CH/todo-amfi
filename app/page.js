'use client'
import { createContext } from 'react';
import { useState } from 'react';
import Todo from '../src/components/Todo';
import TodoForm from '../src/components/TodoForm';
import styles from './page.module.css';

export default function app() {
  const [toDos, setToDos] = useState([
    /*{
      id: 1,
      text: 'Uma tarefa',
      isCompleted: false,
    }*/
  ]); //Armazena lista de tarefas

  const addToDo = (text) => { //Adicionar tarefa

    const newToDos = [...toDos, { //Recebe todos os meus arrays + os inputados, spread (...) serev para garantir que o original não será alterado.
      id: Math.floor(Math.random() * 10000), //Para garantir que o id seja único
      text,
      //isCompleted: false
    },
  ];

    setToDos(newToDos) //Adicionando as novas tarefas às já existentes
  };

  /*const delToDo = (id) => { //Função para deletar tarefa
    const newToDos = [...toDos]
    const filteredToDos = newToDos.filter((toDo) => //Busco quais tem id diferente e retorno eles à lista 
    toDo.id !== id ? toDo : null
    );
    setToDos(filteredToDos);
  }*/

  return (

    <div className={styles.app}>

      <header className={styles.header}>

        <div className={styles.headerImgContainer}>
          <div className={styles.headerImg1}></div>
          <div className={styles.headerImg2}></div>
        </div>
        
          <h1 className={styles.headerTitle}>ToDo Amfi</h1>
      </header>

      <section className={styles.toDoList}>

        <div className={styles.toDoListTitle}>
          <h2>
            🗂 ToDo <span className={styles.taskCounter}>{toDos.length > 1 ? ` (${toDos.length} tarefas)` : ` (${toDos.length} tarefa)`}</span>
          </h2>
        </div>

        <div className={styles.toDoListItems}>
          { toDos.map((toDo) => (

          <Todo key={toDo.id} toDo={toDo} /*delToDo={delToDo}*//>
  
        ))}

          <TodoForm addToDo={addToDo}/>
       
        </div>

      </section>

    </div>
  )
}
