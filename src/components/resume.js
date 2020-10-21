import React, { Component } from 'react';
import pdf from '../resume/Resume-Scott-Buonya.pdf'
import { Card, CardTitle, CardActions, Button, CardText } from 'react-mdl'

class Resume extends Component {
    render() {
        return(
            <Card shadow={5} style={{minWidth: '450', margin: 'auto', padding:'20px'}}>
                    <CardTitle style={{ height: '176px', background: 'url(https://www.pngkey.com/png/detail/892-8928473_document-logo-rsum.png) center / cover'}} ></CardTitle>
                    <CardText>
                        Check Out my Resume!
                    </CardText>
                    <CardActions border>
                        <Button colored><a href={pdf} target="_blank" rel="noopener noreferrer">Click here for My Resume!</a></Button>
                        
                    </CardActions>
                </Card>
        )
    }
}

export default Resume;