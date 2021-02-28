import React from 'react';

interface IAppProps {
    name: string
};

const App:React.FC<IAppProps> = ({name}) => {
    return (
        <div>
            Hello {name}
        </div>
    )
};

export default App;
