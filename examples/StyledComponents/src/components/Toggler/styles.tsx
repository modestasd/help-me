import styled, {css} from 'styled-components';
import {ITogglerProps} from './Toggler';

export const TogglerWrapper = styled.div`
  width: 55px;
  height: 30px;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.primary};
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px;
  transition: 0.4s;
`;

export const Slider = styled.span<Pick<ITogglerProps, 'isEnabled'>>`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color:  ${({theme}) => theme.colors.secondary};
  position: absolute;
  transition: 0.4s;
  padding: 2px;
  ${({ isEnabled }) =>
    isEnabled &&
    css`
        transform: translateX(24px);
        margin-right: 4px;
    `}
`;