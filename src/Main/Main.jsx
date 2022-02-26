import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Css/Main.css';
import MainData from './MainData';
const Main = ()=>{
    return(
        <>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <img src="../reci3.jpg" className='myimg'></img>
                </Grid>

                <Grid item xs={12}>
                    <h1 className='textnew'>Recipes:</h1>
                    <p>Cooking on a boat is different, but boat-friendly recipes make great meals on your cruising adventures not just possible but easy (they’re great for camping and RVing, too). And a variety of options for dietary and equipment restrictions will please everyone — even on land!</p>
                        {MainData.map(main=>{
                            return(
                                <ul className='myul'>
                                    <li>{main}</li>
                                </ul>
                            )
                        })}
                    
                </Grid>
              </Grid>
            </Box>
        </>
  );


        
     
}

export default Main;