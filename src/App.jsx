
import './App.css'

import Mapp from './components/mobo/mapp'
import Dapp from './components/desky/dapp'


function App() {

  const isMobile = window.innerWidth <= 400;
  return(
    <div>
      {isMobile ? <Mapp/> : <Dapp/>}
    </div>
  )
}

export default App
