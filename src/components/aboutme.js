import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Scott1 from '../images/prolook.jpg'

class About extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>About Me!</h2>
                        <img 
                        src={Scott1} 
                        alt="Scott Buonya"
                        style={{height: '250px'}}
                        />
                        
                    </Cell>
                    <Cell col={6}>
                        <p>
                        Scott Buonya was born on December 3rd, 1996 in Charlotte, North Carolina. He has lived his whole life in Charlotte. 
                        At the age of 4 Scott’s family decided to move to Matthews and has lived there ever since. Since Scott was a young child, he was always interested into video games. 
                        He would always go to his neighbor’s house or his cousin’s house to play video games with them. Scott at the time did not have any consoles because they were too expensive. 
                        He was introduced to PC gaming by his now brother-in-law. The first PC game he ever played was World of Warcraft, that game made Scott’s PC interest spark.
                        </p>
                        {"\n"}
                        <p>
                        Over the years Scott has learned how to build PCs, mod games, and overclock hardware. 
                        His passion keeps growing with all the new technology that keeps releasing. He has recently been taking a coding bootcamp, his next step would be to graduate it. 
                        </p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;