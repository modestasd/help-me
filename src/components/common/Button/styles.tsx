import styled, {css} from 'styled-components';
import {IButtonProps} from './Button';

type IWrapperProps = Pick<IButtonProps, "color" | "background">

export const Wrapper = styled.button<IWrapperProps>`
    ${({color,background,theme}) => css`
        background-color: ${background ? background : theme.colors.primary};
        color: ${color ? color : theme.colors.font};
    `};
    border: none;
    padding: 1em 2em;
    font-size: 1em;
    cursor: pointer;
    max-width: 5rem;
    max-height: 1rem;
`;