import styled from 'styled-components';
import {NavLink} from 'react-router-dom'; 
import { centered } from 'src/styles/mixins/layout.styles';

export const Wrapper = styled.header`
    ${centered};
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