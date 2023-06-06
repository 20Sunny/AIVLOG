/* eslint-disable no-unused-vars */
// eslint-disable-next-line
import { Grid } from '@mui/material';

//components
import Categories from './Categories';
import Posts from './post/Posts';

const Home = () => {

    return (
        <>
            <Grid container style={{minHeight:'100vh'}}>
                <Grid className='header' item lg={12} xs={12} sm={12} spacing={4} style={{display:'flex', justifyContent:'space-evenly', alignItems:'center',paddingTop:'64px',maxHeight:'150px'}}> 
                    <Categories />
                </Grid>
                <Grid container xs={12} sm={12} lg={12} style={{paddingTop:'0px', margin:'0 5vw'}}>
                    <Posts />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;