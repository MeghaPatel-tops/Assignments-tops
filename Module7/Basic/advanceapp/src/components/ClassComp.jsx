import PropTypes from 'prop-types'
import React, { Component } from 'react'
import axios from 'axios'

import {Card, CardBody, CardHeader, Container,Row,Button} from 'reactstrap'

export default class ClassComp extends Component {
 constructor(props){
    super(props)
    this.state = {products:[]};
    
    
 }
 async componentDidMount(){
    try {
        const responce = await axios.get('https://fakestoreapi.com/products');
        console.log(responce.data)
        this.setState({products:responce.data})
    } catch (error) {
        console.log(error)
    }
    
 }
 componentDidUpdate(prevProps, prevState) {
     alert("componentDidUpdate method called")
}
  render() {
    
    return (
      <div>
        <Container>
            <h1>Product With class Component</h1>
            <Row >
                {
                    this.state.products.map((product,index)=>
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
        </Container>
      </div>
    )
  }
}
