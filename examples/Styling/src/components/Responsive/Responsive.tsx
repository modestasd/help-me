import React from 'react'
import { Card, ResponsiveWrapper } from './styles'

interface Props {
    
}

const Responsive = (props: Props) => {
    return (
        <ResponsiveWrapper>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </ResponsiveWrapper>
    )
}

export default Responsive
