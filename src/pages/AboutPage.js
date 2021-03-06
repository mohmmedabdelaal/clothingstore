import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { PageHero } from '../components';
import aboutImg from '../assets/furniture-1.jpg';

const AboutPage = () => {
  return (
    <main>
      <Helmet>
        <title>about page</title>
      </Helmet>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            We are clothing store that sell clothes to customers from all over
            the world ,We are clothing store that sell clothes to customers from
            all over the world,We are clothing store that sell clothes to
            customers from all over the world,We are clothing store that sell
            clothes to customers from all over the world
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
