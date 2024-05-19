import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import { About } from '../Pages/About';
import { LandingPage } from '../Pages/LandingPage';
import { MyLayout } from '../Layouts/MyLayout';
import { Shop } from '../Pages/Shop';
import { CustomerSupport } from '../Pages/CustomerSupport';
import FaQ from '../Pages/FaQ';


export const RoutesFile = () => {
    // const navigate = useNavigate();
    // useEffect(() => {

    //     const token = localStorage.getItem("token");
    //     if (!token) {
    //         navigate('/');
    //     } else {
    //         navigate('/dashboard');
    //     }
    // }, []);

    return (
        <div>
            <Routes>
                <Route element={<MyLayout />}  >
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/shop' element={<Shop/>} />
                    <Route path='/support' element={<CustomerSupport/>} />
                    <Route path='/faq' element={<FaQ/>}/>
                </Route>
            </Routes>
        </div>
    )
}
