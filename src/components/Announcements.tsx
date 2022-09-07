import React from 'react';
import styled from 'styled-components';

const Container =  styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2.5px;
`;

const Announcements = () => {
  return (
    <Container>Free Shipping! on orders over $50.</Container>
  )
}

export default Announcements;