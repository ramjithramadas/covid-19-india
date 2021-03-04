import React from "react";
import Landing from "./Landing";
import Footer from "./Footer";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
//import Brightness4Icon from "@material-ui/icons/Brightness4";
//import Brightness7Icon from "@material-ui/icons/Brightness7";
//import IconButton from "@material-ui/core/IconButton";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
//import useLocalStorageState from "../hooks/useLocalStorageState";
import { DataProvider } from "../context/data.context";
import { AttributeProvider } from "../context/attribute.context";
import { HistoricalDataProvider } from "../context/historicalData.context";
import useStyles from "../styles/AppStyles";

function App() {
   const classes = useStyles();
   //const [darkState, setDarkState] = useLocalStorageState("darkMode", true);
   //const paletteType = darkState ? "dark" : "light";

   const arcBlack = "#212529";
   const arcOrange = "#ffab40";

   const theme = createMuiTheme({
      palette: {
         common: {
            blue: `${arcBlack}`,
            orange: `${arcOrange}`,
         },
         primary: {
            main: `${arcBlack}`,
         },
         secondary: {
            main: `${arcOrange}`,
         },
         //type: paletteType,
      },
      overrides: {
         MuiTableCell: {
            head: {
               fontSize: "1rem",
               fontWeight: 700,
               color: arcOrange,
               borderColor: arcOrange,
            },
         },
      },
   });

   // const handleThemeChange = () => {
   //    setDarkState(!darkState);
   // };

   function HideOnScroll(props) {
      const { children } = props;
      const trigger = useScrollTrigger();
      return (
         <Slide appear={false} direction="down" in={!trigger}>
            {children}
         </Slide>
      );
   }

   return (
      <DataProvider>
         <AttributeProvider>
            <HistoricalDataProvider>
               <CssBaseline />
               <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <div className={classes.root}>
                     <HideOnScroll>
                        <AppBar>
                           <Toolbar>
                             
                              <h1>Covid-19 India Trends</h1>
                              <div className={classes.navItemsRight}>
                                 {/* <IconButton
                                    aria-label="toggle dark mode"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="false"
                                 onClick={handleThemeChange}
                                    color="inherit"
                                 >
                                    {darkState ? <Brightness7Icon /> : <Brightness4Icon />}
                                 </IconButton> */}
                                 
                              </div>
                           </Toolbar>
                        </AppBar>
                     </HideOnScroll>
                     <Toolbar />
                     <Container className={classes.content} maxWidth="lg">
                        <Landing />
                     </Container>
                     <Footer />
                  </div>
               </ThemeProvider>
            </HistoricalDataProvider>
         </AttributeProvider>
      </DataProvider>
   );
}

export default App;
