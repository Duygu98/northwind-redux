import React, { Component } from 'react'
import { Row,Col} from "reactstrap"
import CategoryList from '../categories/CategoryList'
import ProdustList from '../products/ProdustList'
 
export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="3">
                        <CategoryList></CategoryList>
                    </Col>
                    
                    <Col xs="3">
                        <ProdustList></ProdustList>
                    </Col>
                </Row>
            </div>
        )
    }
}
