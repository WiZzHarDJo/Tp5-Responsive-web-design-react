import React, { Component } from 'react';
import Header from './container/Header';
import SideMenu from './container/SideMenu';
import Artist from './component/Artist';
import AlbumGrid from './container/AlbumGrid';
import {Container, Row, Col} from 'reactstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>

        <Row>
          <Col sm="2">
            <SideMenu />
          </Col>

          <Col sm="10">
            <main>
              <Artist />
              <AlbumGrid />
            </main>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
