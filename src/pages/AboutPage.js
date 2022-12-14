import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className='page section section-center'>
          <img src={aboutImg} alt="about img" />
          <article>
            <div className="title">
              <h2>Our story</h2>
              <div className="underline"></div>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum molestias sed assumenda accusantium ea esse modi minima similique, laudantium vel! Soluta assumenda laudantium aut. Itaque laudantium tenetur sint. Dolorem facilis, culpa ex molestiae voluptate repellat et cum officiis ab. Distinctio, obcaecati. Enim rerum fugit, aut ea ipsam maxime obcaecati quidem sit eius earum animi vero natus dicta similique suscipit corrupti.!</p>
          </article>
      </Wrapper>
    </main>
  )
}

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
`
export default AboutPage
