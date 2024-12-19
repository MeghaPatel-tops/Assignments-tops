import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Card, CardBody, CardHeader, Container,Row,Button} from 'reactstrap'


function Product() {
    const [productData,setProductData]= useState([])

    const getProductData = async()=>{
        try {
            const products = await axios.get("https://fakestoreapi.com/products");
            const results = products.data;
            setProductData(results)
            console.log(productData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getProductData();
    })
  return (
    <div><Container>
            <h1>Product With function Component</h1>
    <Row >
        {
            productData.map((product,index)=>
                <Card style={{width:"20%",marginLeft:"10px",marginTop:"20px"}}>
                    <CardHeader>
                        <img  src={product.image} alt="" height="150px" width="100px"/>
                    </CardHeader>
                    <CardBody>
                        <p><b>Lorem ipsum dolor</b></p>
                        <hr />
                        <p>Price:{product.price}</p>
                        <Button color="primary" >ADDTOCART</Button>
                    </CardBody>
                </Card>
            )
        }
    </Row>
</Container></div>
  )
}

export default Product