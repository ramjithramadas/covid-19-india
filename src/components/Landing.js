import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "../styles/LandingStyles";
import { DataContext } from "../context/data.context";
import CardList from "./CardList";
import Map from "./Map";
import StateData from "./StateData";

function Landing() {
   const classes = useStyles();
   const data = useContext(DataContext);

   return (
      <div className={classes.root}>
         {data.hasLoaded ? (
            <center>
              <Grid container className={classes.container}>
               <Grid item xs={12} sm={12}>
                  
                  <CardList />
                  <Grid item xs={12} sm={6}>
                     <Map />
                  </Grid>
                  <StateData />
               </Grid>
               
            </Grid>
            </center>
         ) : (
            <div className={classes.spinner}>
               <CircularProgress color="secondary" />
            </div>
         )}
      </div>
   );
}

export default Landing;
