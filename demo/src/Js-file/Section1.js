
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Market from '../src/Image/market.png'
import Deliver from '../src/Image/deliv.png'
import Timer  from '../src/Image/timer.png'
import Payment from '../src/Image/payment.png'
import './Section1'

function Contact() {
  return (

<div>

  <Container fluid className='th first-section'>
      <Row className='sub mx-auto'>
         <Col className='main   px-3' sm={12} md={6}>
            <div className='px-2 color'>
               <div className='step d-flex'>
               <img src={Deliver} alt='image' className='deliver'/>
                  <div className='para d-flex'>
                           <p className='para1'><strong>Fast Delivery</strong><br/> <span className='light'>Start from $10</span></p>
                   </div>  
                </div> 
            </div>
          </Col>
         <Col className='main  px-3' sm={12} md={6}>
        <div className='color'>           
           <div className='step d-flex'>
               <img src={Market} alt='image' className='market'/>
                  <div className='para d-flex'>
                     <p className='para1'><strong>Money Guarantee</strong> <br/> <span className='light'>Start from $10</span></p>
                  </div> 
            </div>
            </div>
 
          </Col>
          <Col className='main px-3' sm={12} md={6} px-4>
            <div className='color'>          
              <div className='step d-flex'>
               <img src={Timer} alt='image' className='market'/>
           <div className='para d-flex'>
                <p className='para1'><strong>365 Days</strong> <br/> <span className='light'>Start from $10</span></p>
          </div>  </div> 
          </div>
          </Col>
         <Col className='main px-3 '   sm={12} md={6}>
              <div className='color'>
              <div className='step d-flex'>
            <img src={Payment} alt='image' className='payment'/>
          <div className='para d-flex'>
            <p className='para1'><strong>Payment</strong> <br/> <span className='light'>Start from $10</span></p>
        
</div> 
 </div>


</div>
 </Col>
      </Row>
  </Container>
</div>
  );
}

export default Contact;

