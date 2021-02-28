import React from 'react';
import './styles.css';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: string;
};

const Button:React.FC<IButtonProps> = ({children, onClick, ...props}) => {
    return (
        <button className='button' onClick={onClick} {...props}>
            {children}
        </button>
    )
};

export default Button;
