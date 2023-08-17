import product from '../Product';

function Description() {
    return (
        <div>
            <p>Descrption:</p>
            <p>{product.description}</p>
        </div>
    );
}

export default Description;