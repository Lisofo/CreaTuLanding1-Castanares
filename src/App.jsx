import './App.css'
import Navbar from './components/navBar'
import ItemListContainer from './components/itemListContainer'
function App() {

  
  return (
    <>
      <div>
        <Navbar/>
        <ItemListContainer greeting="Bienvenido a Dimensional Art" />
      </div>
    </>
  )
}

export default App
