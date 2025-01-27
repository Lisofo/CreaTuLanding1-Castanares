import './App.css'
import Navbar from './components/navBar'
import ItemListContainer from './components/itemListContainer'
function App() {

  
  return (
    <>
      <div>
        <Navbar/>
        <ItemListContainer information="Nuevos productos proximamente" />
      </div>
    </>
  )
}

export default App
