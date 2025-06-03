import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const TABS = [
  {
    title: 'Find relevant media contacts - multiline title',

    imageUrl: '/demo-illustration-3.png',
  },
  {
    title: 'Find relevant media contacts - multiline title',
  
    imageUrl: '/demo-illustration-3a.png',
  },
];

export default function FeaturesGallery() {
  const FeaturesGalleryWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  text-align: center;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const GalleryGrid = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
  flex-wrap: wrap;
  justify-content: center;

  ${media('<=tablet')} {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageCard = styled.div`
  max-width: 500px;
  width: 100%;
  text-align: left;

  div {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;

const StyledImage = styled(NextImage)`
  border-radius: 1rem;
  box-shadow: var(--shadow-lg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-xl);
  }
`;

  return (
    <FeaturesGalleryWrapper>
      <Content>
        <OverTitle>CANDIDATES</OverTitle>
        <SectionTitle>Meet the Candidates</SectionTitle>
      </Content>
      <GalleryGrid>
        {TABS.map((tab, idx) => (
          <ImageCard key={idx}>
            <StyledImage
              src={tab.imageUrl}
              alt={tab.title}
              width={500}
              height={350}
            />
            {/* <div dangerouslySetInnerHTML={{ __html: tab.description }} /> */}
          </ImageCard>
        ))}
      </GalleryGrid>
    </FeaturesGalleryWrapper>
  );
}
