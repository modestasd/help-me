import React from 'react'
import { ErrorBoundariesContainer } from 'src/containers/errorHandling'

interface Props {
    
}

const ErrorHandling = (props: Props) => {
    return (
        <div>
            <ErrorBoundariesContainer />
        </div>
    )
}

export default ErrorHandling
