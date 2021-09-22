import React from 'react'
import { Accordion } from 'react-bootstrap';

export const acordeonlogged = () => {
    return(
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Ejemplo
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Ejemplo2
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
   );

};