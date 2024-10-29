import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/RegisterForm';
import UserTable from './components/userDataTable';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route 
      index
      element={<RegistrationForm/>}
      path='/'
      />
      <Route
      path='/user/data'
      element={<UserTable/>}
      />
    </Routes>
//  <div className='max-w-screen-2xl mx-auto'>
//   <RegistrationForm/>
// </div>
  );
}

export default App;
