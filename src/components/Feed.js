import React from 'react';
import { Col, Container, Row, TextInput } from 'react-materialize';

export default () => {
    return (
        <Container>
            <Row>
                <Col>Profile</Col>
                <Col>Feed</Col>
                <Col>Empty</Col>
            </Row>
        </Container>
    );
};
