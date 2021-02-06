import React from 'react';
import { Link } from 'react-router-dom';

import ROUTES from 'src/routes/constants';
import { useNavigation } from 'src/routes/utils';

import './styles.css';

const Header:React.FC = () => {
    const {goBack} = useNavigation();
    return (
        <div className='header'>
            <button onClick={goBack}>Go Back</button>
            <Link to={ROUTES.HOME}>Home</Link>
            <Link to={ROUTES.WELCOME}>Welcome</Link>
        </div>
    )
};

export default Header;
