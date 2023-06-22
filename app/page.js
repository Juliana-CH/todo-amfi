'use client'
import { createContext } from 'react';
import { useState } from 'react';
import Todo from '../src/components/Todo';
import TodoForm from '../src/components/TodoForm';
import styles from './page.module.css';

const Context = createContext()

export default function app() {
  const [toDos, setToDos] = useState([

    {
      id: 1,
      text: "Preparar apresentação novo projeto.",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Revisar banco de dados.",
      isCompleted: false,
    },
  ]);

  const addToDo = (text) => { // Adicionar tarefa

    const newToDos = [...toDos, {
      id: Math.floor(Math.random() * 10000),
      text,
      isCompleted: false
    },
  ];

    setToDos(newToDos)
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
            🗂 ToDo
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
