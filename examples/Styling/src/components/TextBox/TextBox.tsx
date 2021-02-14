import React from 'react'
import {MoveDirection} from 'src/styles/animations';

import {H1, H2} from 'src/styles/global'
import {CenteredWrapper, MovingBoxWrapper, MovingBox, PulsingBox, StyledH1, SpiningBox} from './styles';

interface Props {
    
}

const TextBox = (props: Props) => {
    return (
        <div>
            <H1>Hello world</H1>
            <H2 as='p'>As paragraph, without bold</H2>
            <StyledH1>Override H1 styles</StyledH1>
            <CenteredWrapper>
                <PulsingBox pulseColor='green'/>
                <PulsingBox pulseColor='blue'/>
                <PulsingBox pulseColor='red'/>
                <MovingBoxWrapper>
                    <MovingBox 
                        from={MoveDirection.Left} 
                        fromPixels='0px' 
                        to={MoveDirection.Left} 
                        toPixels='200px'
                    />
                    <MovingBox 
                        from={MoveDirection.Top} 
                        fromPixels='0px' 
                        to={MoveDirection.Top} 
                        toPixels='-200px'
                    />
                                    <MovingBox 
                        from={MoveDirection.Top} 
                        fromPixels='0px' 
                        to={MoveDirection.Top} 
                        toPixels='200px'
                    />
                    <MovingBox 
                        from={MoveDirection.Left} 
                        fromPixels='0px' 
                        to={MoveDirection.Left} 
                        toPixels='-200px'
                    />
                </MovingBoxWrapper>
                <SpiningBox />
            </CenteredWrapper>
        </div>
    )
}

export default TextBox
