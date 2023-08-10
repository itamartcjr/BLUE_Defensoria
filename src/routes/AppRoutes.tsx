import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StatusService } from '../screens/StatusService'


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StatusService />} />
            </Routes>
        </BrowserRouter>
    )
}