import {Routes, Route, useLocation} from 'react-router-dom'
import LoginContent from './views/login/LoginContent'

export default () => {
    const location = useLocation()
    return(
        <Routes location={location}>
            <Route path="/" element={<LoginContent />} />
        </Routes>
    )
}