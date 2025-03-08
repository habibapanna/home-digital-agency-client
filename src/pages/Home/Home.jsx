import React from 'react';
import Help from '../../components/Help/Help';
import Portfolio from '../../components/Portfolio/Portfolio';
import Customers from '../../components/Customers/Customers';
import CEO from '../../components/CEO/CEO';
import Leader from '../../components/Leader/Leader';
import Start from '../../components/Start/Start';

const Home = () => {
    return (
        <div>
            
            <Help></Help>
            <Portfolio></Portfolio>
            <Customers></Customers>
            <CEO></CEO>
            <Leader></Leader>
            <Start></Start>
        </div>
    );
};

export default Home;