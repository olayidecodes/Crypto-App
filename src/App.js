import { BrowserRouter,Routes, Route, Link } from 'react-router-dom'

import { Header, Navbar, CryptoDetails } from './components'
import { Home, Exchanges, Cryptocurrencies, News} from './pages'

function App() {
  return (
    <div className='flex bg-black text-gray-400'>
      <div className=''>
        <Navbar />
      </div>
        
      <div className='flex flex-col'> 
        {/* <Header /> */}
        <Routes>
          <Route index exact path='/' element={<Home />}/>
          <Route exact path='exchanges' element={<Exchanges />}/>
          <Route exact path='cryptocurrencies' element={<Cryptocurrencies />}/>
          <Route exact path="/crypto/:coinId" element={<CryptoDetails />}>
          </Route>
          <Route exact path='news' element={<News />}/>
        </Routes>
      </div>
    </div>
  );
}
  
export default App;

