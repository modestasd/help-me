import React from 'react';
import { CodeExample } from 'src/components/common';
import { ICodeExampleProps } from 'src/components/common/CodeExample/CodeExample';
import { Wrapper, TitleWrapper, TextWrapper } from './styles';

interface IStoryLayoutComposition {
    Title: React.FC<ITitleProps>;
    Code: React.FC<ICodeProps>;
    Text: React.FC<ITextProps>
};

interface IStoryLayoutProps {};

const LazyInitialState:React.FC<IStoryLayoutProps> & IStoryLayoutComposition = ({children, ...props}) => (
    <Wrapper {...props}>{children}</Wrapper>
);

interface ITitleProps {};

const Title:React.FC<ITitleProps> = ({children, ...props}) => (
    <TitleWrapper {...props}>{children}</TitleWrapper>
);

interface ICodeProps extends ICodeExampleProps {};

const Code:React.FC<ICodeProps> = ({code, ...props}) => (
    <CodeExample code={code} {...props}/>
);

interface ITextProps {};

const Text:React.FC<ITextProps> = ({children, ...props}) => (
    <TextWrapper {...props}>{children}</TextWrapper>
);


LazyInitialState.Title = Title;
LazyInitialState.Code = Code;
LazyInitialState.Text = Text;

export default LazyInitialState;