import './App.css';
import Header from './components/header';
import LoginForm from './components/form';
import SignUp from './components/form/Signup';
function App() {

  return (
    <div className='App'>
      <Header />
        <LoginForm />
      <SignUp />
    </div>

  );
}

export default App;
