

import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

const LoadingProducts = () => {
     
    return (
        <Card style={{ width: '18rem' }}>
        <Placeholder as={Card.Img} animation="glow" />                    
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={8} />
          </Placeholder>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={8} />
          </Placeholder>          
        </Card.Body>
      </Card>
    )
}

export default LoadingProducts