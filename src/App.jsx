import {Routes, Route} from 'react-router-dom';
// import PaymentForm from './payment/PaymentForm';
// import Helppage from './Nousheen/Helppage';
// import Tremsandconditions from './Nousheen/Termsandconditions';
import RefundPolicy from './Nousheen/RefundPolicy';
// import PrivacyPolicy from './Nousheen/PrivacyPolicy';


function App() {
  
  return (
    <>
    <Routes>
      {/* <Route path='/' element={<PaymentForm/>}/> */}
       {/* <Route path='/' element={<Helppage/>} /> */}
       {/* <Route path='/' element={<Tremsandconditions/>} /> */}
       <Route path='/' element={<RefundPolicy/>} />
       {/* <Route path='/' element={<PrivacyPolicy/>} /> */}
    </Routes>
    </>
  )
}

export default App
