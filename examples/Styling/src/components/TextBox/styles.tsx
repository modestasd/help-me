import styled, { css } from 'styled-components';
import {H1} from 'src/styles/global';
import {pulse,spin,move,MoveDirection} from 'src/styles/animations';
import {centeredView} from 'src/styles/global/positioning';

interface PulsingBoxProps {
    pulseColor: string;
};

interface MovingBoxProps {
    from: MoveDirection;
    fromPixels: string;
    to: MoveDirection;
    toPixels: string;
};

export const StyledH1 = styled(H1)`
    font-size: 1rem;
`;

export const CenteredWrapper = styled.div`
    width: 100%;
    ${centeredView};
`;

export const PulsingBox = styled.div<PulsingBoxProps>`
    ${({pulseColor}) => css`
        background: ${pulseColor};
        animation: ${pulse(pulseColor)} 2s infinite;
    `};
    margin: 10px;
    border-radius: 50%;
    height: 50px;
    width: 50px;
`;

export const MovingBoxWrapper = styled.div`
    position: relative;
`;

export const MovingBox = styled.div<MovingBoxProps>`
    ${({from,fromPixels,to,toPixels}) => css`
        animation: ${move(
            {direction:from, pixels:fromPixels},
            {direction:to, pixels:toPixels}
            )} 
        4s infinite;
    `};
    background: #9c3333;
    margin: 10px;
	border-radius: 50%;
	height: 50px;
    width: 50px;
    position: absolute;
`;

export const SpiningBox = styled.div`
    animation: ${spin()} 1s infinite linear;
    background: #333a9c;
    margin: 10px;
	height: 50px;
    width: 5px;
`;

