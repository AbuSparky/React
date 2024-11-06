import { Fragment ,useState,useEffect  } from 'react';
import Productcard from '../component/Productcard';
import { useSearchParams } from 'react-router-dom';

export default function Home() {

    const [products,setProducts] = useState([]);
    const [searchParams,setSearchParams] = useSearchParams();

    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
        .then(res => res.json())
        .then( res => setProducts(res.products))
    },[searchParams])

    return (
        <Fragment>
            {/* header.js */}

            <h1 id="products_heading">Latest Products</h1>

            <section id="products" className="container mt-5">
                <div className="row">
                    {
                        products.map(product => <Productcard  product = {product}/>)
                    }
                </div>
            </section>

            {/* footer.js */}
        </Fragment>
    );

}