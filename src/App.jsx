import Aside from './components/Aside'
import Header from './components/Header'
import Breadcrumb from './components/Breadcrumb'
import { HomeIcon } from './components/icons'
import Badge from './components/Badge'
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

        <section>
          <article>
            <h2 style={{ color: '#2A318A', fontSize: '36px' }}>Apnea del sueño</h2>
            <nav>
              <Badge text='Regreción logística' />
            </nav>
          </article>
          <div>

          </div>
        </section>
        
      </main>
    </>
  )
}

export default App
