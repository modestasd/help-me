import React from 'react'
import {Slider, TogglerWrapper} from './styles';

export interface ITogglerProps {
    onClick: () => void,
    isEnabled?: boolean,
}

const Toggler:React.FC<ITogglerProps> = ({ onClick, isEnabled }) => {
    return (
      <TogglerWrapper onClick={onClick}>
        <Slider isEnabled={isEnabled} />
      </TogglerWrapper>
    );
};

export default Toggler;
