import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Acordion({titulo, descripcion}) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
        style={{width:"auto", backgroundColor:'#fff', borderRadius:"15px", boxShadow:"5px 5px 1px #5ad67d"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography>{titulo}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            {descripcion}
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}