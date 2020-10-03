import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import Scott1 from '../images/prolook.jpg'



class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Scott Buonya</h2>
                        <img 
                        src={Scott1} 
                        alt="Scott Buonya"
                        style={{height: '250px'}}
                        />
                        <p style={{ width: '75', margin: 'auto', paddingTop: '1em'}}>Feel free to contact me about anything!</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        
                        <div className="contact-list">
                            <List>
                                <ListItem> {/*Phone Number */}
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        704-993-8200
                                    </ListItemContent>
                                </ListItem>
                                <ListItem> {/*Email */}
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                                        <i className="fas fa-envelope" aria-hidden="true"/>
                                        <a href="mailto:scottbuonya@gmail.com">scottbuonya@gmail.com</a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem> {/*Linkedin */}
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                                        <i className="fab fa-linkedin" aria-hidden="true" />
                                        <a href="https://www.linkedin.com/in/scottbuonya/" rel="noopener noreferrer" target="_blank">Linkedin</a>
                                    </ListItemContent>
                                </ListItem>
                                
                            </List>
                        </div>


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;