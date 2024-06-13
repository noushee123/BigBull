import {Routes, Route} from 'react-router-dom';
import PaymentForm from './Nousheen/PaymentForm';
import Helppage from './Nousheen/Helppage';
import Termsandconditions from './Nousheen/Termsandconditions';
import RefundPolicy from './Nousheen/RefundPolicy';
import PrivacyPolicy from './Nousheen/PrivacyPolicy';
import ResetPassword from './Nousheen/ResetPassword';
import VerificationPage from './Nousheen/VerificationPage';

function App() {
  
  return (
    <>
    <Routes>
       <Route path='/paymentform' element={<PaymentForm/>}/> 
       <Route path='/helppage' element={<Helppage/>} />
       <Route path='/termsandconditions' element={<Termsandconditions/>} />
       <Route path='/refundpolicy' element={<RefundPolicy/>} />
       <Route path='/privacypolicy' element={<PrivacyPolicy/>} /> 
       <Route path='/resetpassword' element={<ResetPassword/>} />
       <Route path='/verificationpage' element={<VerificationPage/>} />
    </Routes>
    </>
  )
}

export default App
