import React from 'react';
import { StoryLayout } from 'src/components/layout';
import { code } from './data';

const UseCallbackStory:React.FC = () => (
    <StoryLayout>
        <StoryLayout.Title>React.useCallback</StoryLayout.Title>
        <StoryLayout.Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Ratione ullam, quibusdam quos impedit sint necessitatibus commodi autem reiciendis 
            sit non consequuntur tempore a iusto optio saepe temporibus numquam. Nisi, quasi.
        </StoryLayout.Text>
        <StoryLayout.Code code={code} />
    </StoryLayout>
);


export default UseCallbackStory;