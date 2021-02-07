import React from 'react';
import { Link } from 'react-router-dom';

import ROUTES from 'src/routes/constants';
import { navigateWithHistory, useNavigation } from 'src/routes/utils';

import './styles.css';

const Header:React.FC = () => {
    const {navigateToHome} = useNavigation();
    return (
        <div className='header'>
            <button onClick={navigateWithHistory}>Welcome withHistory</button>
            <button onClick={navigateToHome}>Home withHooks</button>
            <Link to={ROUTES.WELCOME}>Welcome</Link>
        </div>
    )
};

export default Header;
