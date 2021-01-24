import React from 'react';
import {Header} from 'src/components/layout';

interface IProps {
    
}

const HeaderContainer:React.FC<IProps> = (props) => {
    return (
        <div>
            <Header />
        </div>
    )
}

export default HeaderContainer;
