import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const TEAM = [
  {
    imageUrl: '/ceo.png',
    name: 'PAKI GUPTA',
    position: 'Chief Election Officer',
    phone: '+91-9876543210',
    linkedin: 'https://linkedin.com/in/ananyasharma',
  },
  {
    imageUrl: '/member-1.png',
    name: 'Ankit Kumar',
    position: 'Manager, Marketing',
    phone: '+91-9988776655',
    linkedin: 'https://linkedin.com/in/rajmehta',
  },
  {
    imageUrl: '/member-2.png',
    name: 'LAKSHITA RATHORE',
    position: 'Manager, HR',
    phone: '+91-8899776655',
    linkedin: 'https://linkedin.com/in/nishaverma',
  },
  {
    imageUrl: '/member-3.png',
    name: 'VEDANT DILIP BANSOD',
    position: 'Manager, Sales',
    phone: '+91-7788665544',
    linkedin: 'https://linkedin.com/in/kunalsingh',
  },
  {
    imageUrl: '/member-4.png',
    name: 'LOVE CHOURASIA',
    position: 'Manager, Operations',
    phone: '+91-6677554433',
    linkedin: 'https://linkedin.com/in/priyadas',
  },
  {
    imageUrl: '/member-5.png',
    name: 'SANYAM CHHETRI',
    position: 'Manager, Product',
    phone: '+91-5566443322',
    linkedin: 'https://linkedin.com/in/amitjoshi',
  },
  {
    imageUrl: '/member-6.png',
    name: 'SOURAV DEBNATH',
    position: 'Manager, Finance',
    phone: '+91-4455332211',
    linkedin: 'https://linkedin.com/in/snehakapoor',
  },
];

export default function MeetTheTeam() {
  return (
    <Wrapper>
      <Title>Meet the Team</Title>
      <CenteredCard>
        <TeamCard member={TEAM[0]} />
      </CenteredCard>
      <Grid>
        {TEAM.slice(1).map((member, idx) => (
          <TeamCard key={idx} member={member} />
        ))}
      </Grid>
    </Wrapper>
  );
}

function TeamCard({ member }: { member: any }) {
  return (
    <Card>
      <ImageWrapper>
        <Image src={member.imageUrl} alt={member.name} width={200} height={200} objectFit="cover" />
      </ImageWrapper>
      <Name>{member.name}</Name>
      <Position>{member.position}</Position>
      <Phone>📞 {member.phone}</Phone>
      <LinkedIn href={member.linkedin} target="_blank">LinkedIn Profile</LinkedIn>
    </Card>
  );
}

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 4rem;
`;

const CenteredCard = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;

const Name = styled.h3`
  font-size: 1.8rem;
  margin-top: 1rem;
`;

const Position = styled.p`
  font-weight: bold;
  color: #666;
  margin: 0.5rem 0;
`;

const Phone = styled.p`
  font-size: 1.4rem;
  margin: 0.25rem 0;
`;

const LinkedIn = styled.a`
  color: #0a66c2;
  text-decoration: none;
  font-size: 1.4rem;

  &:hover {
    text-decoration: underline;
  }
`;
