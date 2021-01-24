import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from 'src/routes/constants';

import './styles.css';

const Header:React.FC = () => {
    return (
        <div className='header'>
            <Link to={ROUTES.HOME}>Home</Link>
            <Link to={ROUTES.UseCallback}>useCallback Example</Link>
            <Link to={ROUTES.UseMemo}>useMemo Example</Link>
        </div>
    )
};

export default Header;
