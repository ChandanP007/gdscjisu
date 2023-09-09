
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Mapp from './components/mobo/mapp'
import Dapp from './components/desky/dapp'


function App() {
  const [count, setCount] = useState(0)

  const isMobile = window.innerWidth <= 400;
  return(
    <div>
      {isMobile ? <Mapp/> : <Dapp/>}
    </div>
  )
}

export default App
