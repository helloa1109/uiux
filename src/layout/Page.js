import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import { styled } from 'styled-components';

function Page(props) {

    return ( 
        <Container>
            <Section1>1</Section1>
            <Section2>2</Section2>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow: hidden auto;
    scroll-snap-align: start;
    scroll-behavior: smooth;

`;

export default Page;