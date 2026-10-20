import './App.css'
import KartuRingaksan from './component/KartuRingkasan'
import TransaksiItem from './component/TransaksiItem'
import WalletSummary from './component/WalletSummary'
// import transaksi Item 
// import kartu Ringkasan
// import badge
// WalletSummary

function App() {
  return (
    <>
      {/* buat Routes */}
  
          {/* Tempat untuk komponen  */}
          {/* Route transaksiItem */}
          <TransaksiItem />
          {/* Route KartuRingaksan */}
          <KartuRingaksan />
          {/* Route Badge */}
          {/* Route WalletSummary */}
          <WalletSummary />
          

      
    </>
  )
}
export default App
