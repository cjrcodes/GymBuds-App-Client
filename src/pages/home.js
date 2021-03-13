import React, { Component } from "react";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Budcall from '../components/Budcall';

class home extends Component {
    state= {
        budcalls: null
    };
    componentDidMount(){
        axios
        .get('/budcalls')
        .then((res) => {
            console.log(res.data);
            this.setState({
                budcalls: res.data
            });
        })
            .catch(err => console.log(err));
        }

    render(){
        let recentBudcallsMarkup = this.state.budcalls ? ( 
            this.state.budcalls.map((budcall) => <Budcall budcall={budcall}/>) 
        ): (
        <p>Loading...</p> 
        );
        return(
            <Grid container spacing={16}>
                <Grid item sm={8} xs={12}>
                    <p>Content</p>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <p>Profile</p>
                </Grid>
            </Grid>
        );
    }
    
    
}
    


export default home;
