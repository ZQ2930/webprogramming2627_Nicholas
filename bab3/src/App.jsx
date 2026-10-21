import { Route, Routes } from 'react-router-dom'
import './App.css'
import KartuRingkasan from './component/KartuRingkasan'
import TransaksiItem from './component/TransaksiItem'
import WalletSummary from './component/WalletSummary'
import Badge from './component/Badge'
import LayoutGrid from './component/LayoutGrid'
function App() {
  return (
    <>
      <Routes>
        <Route path='/transaksi' element={ <TransaksiItem />} />
        <Route path='/kartu' element={ <KartuRingkasan />} />
        <Route path='/badge' element={ <Badge />} />
        <Route path='/wallet' element={ <WalletSummary />} />
        <Route path='/LayoutGrid' element={ <LayoutGrid/>  } />
      </Routes>
    </>
  )
}
export default App
