import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { Nav, 
    // Alert
} from '../components';
import { Home } from '../home/Index';
import { Users } from '../users/Index';
import { useParams, useNavigate } from 'react-router-dom';
function App() {
    const { pathname } = useLocation();
    const {id} = useParams();
    const navigate = useNavigate();

    const match = {
        id,
        path: pathname,
        history: navigate
    }

    return (
        <div className="app-container bg-light">
            <Nav />
            {/* <Alert /> */}
            <div className="container pt-4 pb-4">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/users/*" element={<Users match={match}/>} />
                </Routes>
            </div>
        </div>
    );
}

export { App }; 