import React , {useState, useEffect}from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'


const HomeScreen = () => {

    const [products, setProducts] =  useState([])

    useEffect(()=>{
        const fetchProducts = async()=>{
            const response = await axios.get('/api/products')
            
            setProducts(response.data)
        }

        fetchProducts()
    },[])




    return (
        <>
        <h1 className="text-center"> Latest Products </h1>
            
            <Row>
                {products.map((product)=>{
                    return(
                        <Col key={product._id} xl={3} lg={4} md={6} sm={12}>
                        <Product 
                         product={product} />
                        </Col>
                    )

                })}
            </Row>
           
        </>
    )
}

export default HomeScreen
