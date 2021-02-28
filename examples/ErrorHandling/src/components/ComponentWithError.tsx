import React from 'react';

interface IComponentWithErrorProps {
    showError: boolean;
}

const ComponentWithError:React.FC<IComponentWithErrorProps> = ({showError}) => {
    if(showError){
        throw Error();
    };

    return (
        <div>
            Hello from error
        </div>
    )
};

export default ComponentWithError;
