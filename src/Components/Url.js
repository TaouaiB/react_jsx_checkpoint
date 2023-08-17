import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from '../Product';


function Url() {
    return (
        <div>
            <Card.Img variant="top" src={product.Url} />
        </div>
    );
}


export default Url;