import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navigation = styled.nav``;

export default () => (
    <Navigation>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </Navigation>
);
