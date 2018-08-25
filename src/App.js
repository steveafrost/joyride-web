import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

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
                    <Main>
                        <div>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                        </div>
                    </Main>
                    <Footer />
                </AppContainer>
            </Router>
        );
    }
}

export default App;
