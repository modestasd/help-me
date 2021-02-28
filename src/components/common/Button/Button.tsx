import React from 'react'
import {Wrapper} from './styles';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string;
    background?: string;
};

const Button:React.FC<IButtonProps> = ({color,background,children}) => {
    return (
        <Wrapper color={color} background={background}>
            {children}
        </Wrapper>
    )
};

export default Button;
