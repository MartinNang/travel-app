import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SubFooter = () => {
    return (
        <Container fluid className="subfooter">
            <Row>

            <Col xs={12} md={{ span: 4, offset: 2 }}>

                <h2>
                    Hook line comes here to attract the user...
                </h2>
            </Col>

            <Col xs={12} md={{ span: 4  , offset: 1 }}>
                {/*With the Bootstrap "Button", the CSS class "subscribe-btn" is not recognized
                   Hence why the regular "button" is used here. */ }
                <button className="subscribe-btn">
                    Subscribe for more information...
                </button>
            </Col>


            </Row>



        </Container>


    );
};

export default SubFooter;
