import styled from 'styled-components';
import {NavLink} from 'react-router-dom'; 
import {centeredView} from 'src/styles/global/positioning';

export const Wrapper = styled.header`
    ${centeredView};
    flex-direction: column;
    height: 100vh;
`;

export const NavItem = styled(NavLink)`
    text-decoration: none;
    color: black;
    margin-bottom: .8rem;
    cursor: pointer;
    transition: all 200ms;

    &:hover {
        transform: scale(1.14);
    }
`;