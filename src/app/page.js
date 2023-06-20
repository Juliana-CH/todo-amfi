'use client'
import { createContext } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const Context = createContext()

export default function Home() {
  return (

    <body className={styles.body}>

      <div className={styles}>

        <header className={styles.header}>
          <div className={styles.headerImg}>
          {/*<Image src='/Image/background-amfi.png' alt='' width={500} height={130}/>
          <Image src='/Image/background-amfi.png' alt='' width={500} height={130}/>*/}
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

            <h3 className={styles.toDoListItem}>
              <input className={`${styles.toDoListRadio} ${styles['toDoListRadioChecked']}`} type='radio' />Tarefa 1
            </h3>

            <h3 className={styles.toDoListItem}>
              <input className={`${styles.toDoListRadio} ${styles['toDoListRadioChecked']}`} type='radio'/>Tarefa 2
            </h3>

            <h3 className={styles.toDoListItem}>
              <input className={`${styles.toDoListRadio} ${styles['toDoListRadioChecked']}`} type='radio'/>Tarefa 3
            </h3> 

            <h3 className={styles.toDoListItem}>
              <input className={`${styles.toDoListRadio} ${styles['toDoListRadioChecked']}`} type='radio'/>Tarefa 4
            </h3> 

            <h3 className={styles.toDoListItem}>
              <input className={`${styles.toDoListRadio} ${styles['toDoListRadioChecked']}`} type='radio'/>Tarefa 5
            </h3>    
          
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.addTaskButton}> + Adicionar Tarefa </button>
          </div>

        </section>

      </div>

    </body>
  )
}
