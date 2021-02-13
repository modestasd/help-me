import React from 'react'

import {H1, H2} from 'src/styles/global'
import {PulsingBox, StyledH1} from './styles';

interface Props {
    
}

const TextBox = (props: Props) => {
    return (
        <div>
            <H1>Hello world</H1>
            <H2 as='p'>As paragraph, without bold</H2>
            <StyledH1>Override H1 styles</StyledH1>
            <PulsingBox pulseColor='green'/>
            <PulsingBox pulseColor='blue'/>
            <PulsingBox pulseColor='red'/>

        </div>
    )
}

export default TextBox
