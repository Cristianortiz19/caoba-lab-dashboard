import Aside from './components/Aside'
import Header from './components/Header'
import Breadcrumb from './components/Breadcrumb'
import { HomeIcon } from './components/icons'
import Badge from './components/Badge'
import DetailCard from './components/DetailCard'
import './App.css'

const BreadcrumbItems = [
  { label: 'Inicio', link: '/' },
  { label: 'Modelos', link: '/modelos' },
  { label: 'Modelos de salud', link: '/modelos/salud' },
  { label: 'Apnea del sueño'},
]

function App() {

  return (
    <>
      <Aside />
      <main>
        <Header />
        <nav style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <HomeIcon />
          <Breadcrumb items={BreadcrumbItems} />
        </nav>

        <section id='first-section'>
          <article className='first-section-article'>
            <h2 style={{ color: '#2A318A', fontSize: '36px' }}>Apnea del sueño</h2>
            <nav className='badges-container'>
              <Badge text='Regreción logística' />
              <Badge text='Hecho con IA' />
            </nav>
            <p>El modelo de IA tiene como objetivo principal discernir y 
              diagnosticar, con alta precisión, la presencia de Apnea del Sueño 
              en pacientes a través del análisis de textos clínicos escritos en 
              español. Utilizando tecnologías de vanguardia que integran redes 
              neuronales recurrentes y técnicas de procesamiento avanzado, el 
              modelo evalúa párrafos que contengan al menos 10 palabras 
              relacionadas con la sintomatología de esta afección, se 
              interpreta la información y se estima la probabilidad con 
              la que un paciente podría padecer de apnea.</p>
          </article>
          <DetailCard />
        </section>

        
        
      </main>
    </>
  )
}

export default App
