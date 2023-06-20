import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (

    <main className={styles}>

      <div className={styles}>

        <header className={styles.header}>
          <div className={styles.headerImg}>
          <Image src='/Image/bg1.jpg' alt='' width={500} height={300}/>
          <Image src='/Image/bg2.jpg' alt='' width={500} height={300}/>
          </div>
          <h1 className={styles.headerTitle}>ToDo Amfi</h1>
        </header>

        <section>

          <div>
            <h2>ToDo</h2>
          </div>

          <div>
            <h3>Tarefa 1</h3>
            <h3>Tarefa 2</h3>
            <h3>Tarefa 3</h3>
            <h3>Tarefa 4</h3>
            <h3>Tarefa 5</h3>
          </div>

        </section>

      </div>

    </main>
  )
}
