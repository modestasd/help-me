import React from 'react';
import { StoryLayout } from 'src/components/layout';
import { code } from './data';

interface Props {
    
}

const LazyInitialStateStory = (props: Props) => {
    return (
        <StoryLayout>
            <StoryLayout.Title>LazyInitialState</StoryLayout.Title>
            <StoryLayout.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Ratione ullam, quibusdam quos impedit sint necessitatibus commodi autem reiciendis 
                sit non consequuntur tempore a iusto optio saepe temporibus numquam. Nisi, quasi.
            </StoryLayout.Text>
            <StoryLayout.Code code={code} />
        </StoryLayout>
    );
};

export default LazyInitialStateStory;
