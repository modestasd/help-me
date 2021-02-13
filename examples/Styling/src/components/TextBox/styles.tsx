import styled, { css } from 'styled-components';
import {H1} from 'src/styles/global';
import {deviceType, responsive} from 'src/styles/global/helpers';
import {pulse} from 'src/styles/animations/pulse';

interface PulsingBoxProps {
    pulseColor: string;
};

export const StyledH1 = styled(H1)`
    font-size: 1rem;
    
    ${responsive(deviceType.TABLET_HORIZ, `
        background-color: green;
    `)}
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

