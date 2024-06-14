import {Routes, Route} from 'react-router-dom';
import PaymentForm from './Nousheen/PaymentForm';
import Helppage from './Nousheen/Helppage';
import Termsandconditions from './Nousheen/Termsandconditions';
import RefundPolicy from './Nousheen/RefundPolicy';
import PrivacyPolicy from './Nousheen/PrivacyPolicy';
import ResetPassword from './Nousheen/ResetPassword';
import VerificationPage from './Nousheen/VerificationPage';
import Notification from './Nousheen/Notification';
import Subscription from './Nousheen/Subscription';
import Latestblog from './Nousheen/Latestblog';

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
       <Route path='/notification' element={<Notification/>} />
       <Route path='/subscription' element={<Subscription/>} />
       <Route path='/latestblog' element={<Latestblog/>} />
    </Routes>
    </>
  )
}

export default App
