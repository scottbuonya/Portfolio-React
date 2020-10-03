import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardText } from 'react-mdl'



class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
    {/*Project lifeJuice */}
        if(this.state.activeTab === 0){
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{ height: '176px', background: 'url(https://raw.githubusercontent.com/solemansay/LifeJuice/master/assets/screenshot.png) center / cover'}} ></CardTitle>
                    <CardText>
                        This project was a group collaboration meant to brighten up your day!
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/scottbuonya/LifeJuice" target="_blank" rel="noopener noreferrer">Github</a></Button>
                        <Button colored><a href="https://scottbuonya.github.io/LifeJuice/" target="_blank" rel="noopener noreferrer">Life Juice</a></Button>
                    </CardActions>
                    
                </Card>
            )
            {/*Pokedex */}
        } else if(this.state.activeTab === 1){
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{ height: '176px', background: 'url(https://raw.githubusercontent.com/sharkattack182/project-2/master/public/imgs/pokedex.png) center / cover'}} ></CardTitle>
                    <CardText>
                        This project was a group collaboration on the first generation Pokemon!
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/sharkattack182/project-2" target="_blank" rel="noopener noreferrer">Github</a></Button>
                        <Button colored><a href="https://vast-escarpment-44555.herokuapp.com/" target="_blank" rel="noopener noreferrer">Pokedex</a></Button>
                    </CardActions>
                </Card>
            )
            {/*Note Taker */}
        } else if(this.state.activeTab === 2){
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{ height: '176px', background: 'url(https://raw.githubusercontent.com/scottbuonya/Note_taker/master/Images/note_taker1.png) center / cover'}} ></CardTitle>
                    <CardText>
                        This application is designed to help you take notes and save or delete!
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/scottbuonya/Note_taker" target="_blank" rel="noopener noreferrer">Github</a></Button>
                        <Button colored><a href="https://fierce-lowlands-71806.herokuapp.com/" target="_blank" rel="noopener noreferrer">Note Taker</a></Button>
                    </CardActions>
                </Card>
            )
            {/*Day Planner */}
        } else if(this.state.activeTab === 3){
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{ height: '176px', background: 'url(https://raw.githubusercontent.com/scottbuonya/Day-Scheduler-/master/Assets/workdayscheduler.png) center / cover'}} ></CardTitle>
                    <CardText>
                        This application helps you create a schedule for the 9-5 day!
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/scottbuonya/Day-Scheduler-" target="_blank" rel="noopener noreferrer">Github</a></Button>
                        <Button colored><a href="https://scottbuonya.github.io/Day-Scheduler-/" target="_blank" rel="noopener noreferrer">Day Planner</a></Button>
                    </CardActions>
                </Card>
            )
            {/*Fitness Tacker */}
        } else if(this.state.activeTab === 4){
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{ height: '176px', background: 'url(https://raw.githubusercontent.com/scottbuonya/Fitness-Tracker/master/images/fitness1.png) center / cover'}} ></CardTitle>
                    <CardText>
                        This application helps keep tracks of the exercises you do and gives you stats!
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/scottbuonya/Fitness-Tracker" target="_blank" rel="noopener noreferrer">Github</a></Button>
                        <Button colored><a href="https://rocky-garden-76958.herokuapp.com/" target="_blank" rel="noopener noreferrer">Fitness Tracker</a></Button>
                    </CardActions>
                </Card>
            )
            {/*Project 3 TBA */}
        } else if(this.state.activeTab === 5){
            return(
                <div><h2>This page will be reserved for Project 3</h2></div>
            )
        }
    }


    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Life Juice</Tab>
                    <Tab>Pokedex</Tab>
                    <Tab>Note Taker</Tab>
                    <Tab>Day Planner</Tab>
                    <Tab>Fitness Tracker</Tab>
                    <Tab>TBA</Tab>    
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
                </section>

            </div>
        )
    }
}

export default Project;