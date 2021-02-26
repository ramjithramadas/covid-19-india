import React, { useState, useEffect } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import api from "../api/covid19india";

function StateData() {
   const [stateData, setStateData] = useState([]);
   useEffect(() => {
      const getStatesData = async () => {
         const res = await api.get("/v2/state_district_wise.json");
         console.log(res.data);
         setStateData(res.data);
      };
      getStatesData();
   }, []);

   return (
      <div>
         <center className="statedata_heading">
            <h1>State/UT Wise Data</h1>
            <p>Expand to get district wise data</p>
         </center>
         {stateData.map((item) => {
            let districts = item.districtData;
            return (
               <div className="statedata_accordion">
                  <Accordion>
                     <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                     >
                        <Typography>{item.state}</Typography>
                     </AccordionSummary>
                     <AccordionDetails>
                        <Typography>
                           <div> 
                              <TableContainer component={Paper}>
                                 <Table aria-label="simple table" striped bordered hover>
                                    <TableHead>
                                       <TableRow>
                                          <TableCell>District</TableCell>
                                          <TableCell align="right">Confirmed</TableCell>
                                          <TableCell align="right">Active</TableCell>
                                          <TableCell align="right">Recovered</TableCell>
                                          <TableCell align="right">Deceased</TableCell>
                                       </TableRow>
                                    </TableHead>
                                    <TableBody>
                                       {districts.map((row) => (
                                          <TableRow key={row.district}>
                                             <TableCell component="th" scope="row">
                                                {row.district}
                                             </TableCell>
                                             <TableCell align="right">{row.confirmed}</TableCell>
                                             <TableCell align="right">{row.active}</TableCell>
                                             <TableCell align="right">{row.recovered}</TableCell>
                                             <TableCell align="right">{row.deceased}</TableCell>
                                          </TableRow>
                                       ))}
                                    </TableBody>
                                 </Table>
                              </TableContainer>
                           </div>
                        </Typography>
                     </AccordionDetails>
                  </Accordion>
               </div>
            );
         })}
      </div>
   );
}

export default StateData;
