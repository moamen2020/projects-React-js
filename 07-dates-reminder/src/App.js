import { Col, Container, Row } from "react-bootstrap";


function App() {
  return (
    <div className="font color-body">
      <Container className="py-4">

        <Row className="justify-content-center my-2">
          <Col sm='8'>لديك 4 مواعيد اليوم</Col>
        </Row>

        <Row className="justify-content-center">
          <Col sm='8'>
            <div className="rectangle"></div>
          </Col>
        </Row>


        <Row className="justify-content-center my-2" >
          <Col sm='8' className="d-flex justify-content-between">
            <button className="btn-style p-2"> حذف الكل</button>
            <button className="btn-style p-2">عرض البيانات</button>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
