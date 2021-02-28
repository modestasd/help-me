import React from 'react';
import {Button} from 'src/components/common';
import AnimationSection from './components/AnimationSection';

import {Container} from './styles';

const Home:React.FC = () => {

    return (
        <Container>
            <AnimationSection />
            <Button>Click me</Button>
        </Container>
    )
}

export default Home
