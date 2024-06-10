import {Routes, Route} from 'react-router-dom';
import PaymentForm from './payment/PaymentForm';


function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<PaymentForm/>}/>
    </Routes>
    </>
  )
}

export default App
