import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { Mobile, PC } from '../mediaQuery/MediaQuery';
import { Section2MobileContainer, Section2Title } from '../style/Section2Style';
import img1 from '../img/1.jpeg';
import img2 from '../img/2.jpeg';

function Section2(props) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  console.log(" scroll=>",handleScroll)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const imgs = [img1, img2];
  const currentImageIndex = Math.floor(scrollPosition / window.innerHeight) % imgs.length;

  return (
    <Container>
      <Mobile>
        <Section2MobileContainer backgroundImg={imgs[currentImageIndex]}>
          <Section2Title>
            <span>내가 좋아하는</span>
            <span>게임</span>
            <span>공유어쩌구</span>
          </Section2Title>
        </Section2MobileContainer>
      </Mobile>

      <PC>피씨</PC>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
`;

export default Section2;
