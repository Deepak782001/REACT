import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginForm from './components/form';
import SignUp from './components/form/Signup';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<LoginForm />} />
                <Route path="/SignUp" exact="false" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}