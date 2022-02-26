import SidebarData from './SidebarData'
import { Link } from 'react-router-dom';
import './Css/Sidebar.css'
import CakeIcon from '@mui/icons-material/Cake';
import Home from '../Home/Home'
import Mail from '../Mail/Mail'
import Food from '../Food/Food'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Main from '../Main/Main'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";

const Sidebar  = () =>{
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return(
        <>
          <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <div className="sidebar">
                            <ul>
                                <img src='../reci2.png' className='recipeimage'></img>

                                {SidebarData.map((sideitem,index)=>{
                                    return(
                                            <Link to={sideitem.path}>
                                                 <li className="listitem">

                                                    
                                                         <span className="icon">{sideitem.icon}</span>
                                                         {sideitem.title}
                                                         
                                                 </li>
                                

                                            </Link>
                                        )
                                    })}
                                
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <switch>
                           <Route exact path='/' component={Main}></Route>
                            <Route exact path='/Cake' component={Home}></Route>
                            <Route exact path='/Drink' component={Mail}></Route>
                            <Route exact path='/Food' component={Food}></Route>
                        </switch>
                    </Grid>
        
                </Grid>
            </Box>  
        </>
    )
}
export default Sidebar;