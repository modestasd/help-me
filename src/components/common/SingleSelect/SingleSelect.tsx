import React, { createContext, useContext } from 'react'
import {useSingleSelect} from './actions';
import {ISingleSelectContext} from './types';
import {ItemWrapper, Wrapper} from './styles'

interface ISingleSelectComposition {
    Item: React.FC<IItemProps>;
}

interface IWrapperProps extends React.HTMLAttributes<HTMLDivElement>{
    defaultSelected: string;
};

interface IItemProps {
    value: string;
    onItemClick: () => void
};

const SingleSelectContext = createContext<ISingleSelectContext | null>(null);

const SingleSelect:React.FC<IWrapperProps> & ISingleSelectComposition = ({defaultSelected,children, ...props}) => {
    const {isOpen,toggle, ...otherActions} = useSingleSelect(true,defaultSelected)
    return (
        <SingleSelectContext.Provider value={{isOpen,toggle, ...otherActions}}>
            <Wrapper onClick={toggle} {...props}>
                {children}
            </Wrapper>
        </SingleSelectContext.Provider>
    )
}

const Item:React.FC<IItemProps> = ({onItemClick, value, children, ...props}) => {
    const {setSelectedItem} = useContext(SingleSelectContext);
    const handleItemSelect = () => {
        onItemClick();
        setSelectedItem(value);
    };

    return (
            <ItemWrapper onClick={handleItemSelect} {...props}>
                {children}
            </ItemWrapper>
    )
}

SingleSelect.Item = Item;

export default SingleSelect;
