import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import routes from './routes';
import baseStyles from './baseStyles';
import Navigation from './components/layout/Navigation';

const AppContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;
`;

const Header = styled.header``;

const Main = styled.main`
    flex: 1;
`;

const Footer = styled.footer``;

const App = () => {
    baseStyles();

    return (
        <Router>
            <AppContainer>
                <Header>
                    <Navigation />
                </Header>
                <Main>{routes}</Main>
                <Footer>hey</Footer>
            </AppContainer>
        </Router>
    );
};

export default App;
