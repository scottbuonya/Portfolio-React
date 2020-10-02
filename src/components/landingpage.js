import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Scott1 from '../images/prolook.jpg'

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img src={Scott1} alt="Picutre of Scott Buonya"
                     className="scott-image"
                     />
                     <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>

                        <hr/>
                       <p>Welcome to my Portfolio! Feel Free to browse around at what I have and be sure to contact me about anything!</p> 
                     </div>
                    </Cell>    
                </Grid>                
            </div>
        )
    }
}

export default Landing;