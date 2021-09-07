import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  a {
    position: relative;
    width: 160px;
    height: 60px;
    display: inline-block;
    background-color: #fff;
    margin: 20px;

    ::before,::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: #f00;
      transition: .5s
    }

    :hover {
      ::before {
        inset: -3px;
      }
      ::after {
        inset: -3px;
        filter: blur(10px);
      }
    }

    :nth-child(1) {
      ::before, ::after {
        background: linear-gradient(45deg, #00ccff, #0e1538, #d400d4);
      }
    }

    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      background-color: #0e1538;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #fff;

      ::before {
        content: "";
        position: absolute;
        top: 0;
        left: -50%;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, .075);
        transform: skew(25deg);
      }
    }
  }
`;

export interface ShinningBtnProps {
  content: string;
}

const ShinningBtn: React.FC<ShinningBtnProps> = ({ content }) => {
  return (
    <Container>
      <a href="/#">
        <span>{content}</span>
      </a>
    </Container>
  )
}

export default ShinningBtn;