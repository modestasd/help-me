import React from 'react'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    
}

const Input:React.FC<IInputProps> = ({...props}) => {
    return (
        <input {...props}/>
    )
}

export default Input;
