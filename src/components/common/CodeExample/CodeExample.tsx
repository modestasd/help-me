import React from 'react'
import { CodeWrapper, PreWrapper } from './styles'

export interface ICodeExampleProps {
    code: string
}

const CodeExample:React.FC<ICodeExampleProps> = ({code}) => {
    return (
        <PreWrapper>
            <CodeWrapper>
                {code}
            </CodeWrapper>
        </PreWrapper>
    )
}

export default CodeExample
