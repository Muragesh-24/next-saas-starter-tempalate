import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Announcement
Penalties" overTitle="Penalties">
            <p>
             Penalties on some students have been imposed during the period of General Election. Please find the list here.
              <Link href="/help-center">click</Link>
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Announcement
CoC Enforced" overTitle="COC" reversed>
            <p>
            The EC announces the onstart of General Elections 2025. The CoC has been enforced. Please find the CoC here.
           
            </p>
            <ul>
              <li>Professional point 1</li>
              <li>Professional remark 2</li>
              <li>Professional feature 3</li>
            </ul>
          </BasicSection>
          

 <BasicSection imageUrl="/demo-illustration-1.svg" title="Announcement
Schedule for General Elections 2025" overTitle="GE-2025">
            <p>
            The detailed schedule for the General Elections 2025 can be found at here.
              <Link href="/help-center">click</Link>
            </p>
          </BasicSection>





 {/* <BasicSection imageUrl="/demo-illustration-1.svg" title="Announcement
Call for Nominations" overTitle="Nomination-2025">
            <p>
           The General Elections for the Students' Gymkhana and Students' Senate begin from 8th Jan'25. The posts for which elections are being held are here. Please find the process here.
              <Link href="/help-center">click</Link>
            </p>
          </BasicSection> */}

        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          {/* <Cta /> */}
          <FeaturesGallery />
          <Features />
          <Testimonials />
        
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
