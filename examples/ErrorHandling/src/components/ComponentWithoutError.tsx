import React from 'react';

interface IComponentWithoutErrorProps {
    showError: boolean;
}

const ComponentWithoutError:React.FC<IComponentWithoutErrorProps> = ({showError}) => {
    if(showError){
        throw Error();
    };

    return (
        <div>
            Hello from without error
        </div>
    )
};

export default ComponentWithoutError;
