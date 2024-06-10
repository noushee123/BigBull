import {Routes, Route} from 'react-router-dom';
// import PaymentForm from './payment/PaymentForm';
import Helppage from './Nousheen/Helppage'


function App() {
  
  return (
    <>
    <Routes>
      {/* <Route path='/' element={<PaymentForm/>}/> */}
       <Route path='/' element={<Helppage/>} />
    </Routes>
    </>
  )
}

export default App
