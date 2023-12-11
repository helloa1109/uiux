import React from 'react';
import { styled } from 'styled-components';
import { Mobile, PC } from '../mediaQuery/MediaQuery';
import { ContentnWrapper, HeaderTitle, MainBtn, MainContent } from '../style/Section1Style';

function Section1(props) {

    return (
        <Container>
            <Mobile>
                <ContentnWrapper>
                    <HeaderTitle>
                        <span>Replay</span>
                        <span>Share</span>
                    </HeaderTitle>

                    <MainContent>
                        <span>리플레이를 확인해보세요</span>
                        <MainBtn>시작</MainBtn>
                    </MainContent>
                </ContentnWrapper>
            </Mobile>
            <PC>
                <div>PC Content</div>
            </PC>
        </Container>
    );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #283c86;
  background: -webkit-linear-gradient(to right, #5360ea, #4e94e2);  
  background: linear-gradient(to right, #5360ea, #30afef);
  background-size: 100% 100%;
  animation: gradient 15s ease infinite;
  display: flex;
  color: white;
  scroll-snap-align: start;

  @keyframes gradient {
    0% {
     background-position: 0% 50%;
    }
    50% {
     background-position: 100% 50% 20%;
    }
    100% {
     background-position: 0% 50%;
    }
}
`;

export default Section1;
