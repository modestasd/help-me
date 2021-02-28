import { DeviceType, responsive } from 'src/styles/global/helpers';
import styled from 'styled-components';

export const ResponsiveWrapper = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const Card = styled.div`
    width: 15rem;
    height: 15rem;
    background-color: #222020;

    ${responsive(DeviceType.PHONE, `
        width: 90%;
        justify-self: center;
    `)}
`;