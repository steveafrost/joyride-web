import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import routes from './routes';

const AppContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

const Footer = styled.footer``;

class App extends Component {
    render() {
        return (
            <Router>
                <AppContainer>
                    <Header />
                    <Main>{routes}</Main>
                    <Footer />
                </AppContainer>
            </Router>
        );
    }
}

export default App;
