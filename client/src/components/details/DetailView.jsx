/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from 'react';
// import {Alert} from '@mui/material'
import { Box, Typography, styled } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Delete, Edit } from '@mui/icons-material';
import { Link, useNavigate, useParams } from 'react-router-dom'
import EditNoteIcon from '@mui/icons-material/Edit';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
// components
import Comments from './comments/Comments';

const Container = styled(Box)(({ theme }) => ({
    margin: '0px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    },
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover',
    borderRadius:'10px',
});

const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
`;

const Author = styled(Box)(({ theme }) => ({
    color: '#878787',
    display: 'block',
    textAlign: 'center',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    },
}));

const DetailView = () => {
    const url = 'https://res.cloudinary.com/dhbyg08yc/image/upload/v1684508241/logo-fotor-bg-remover-202304179588_rh4zlh.png';
    
    const [post, setPost] = useState({});
    const { account } = useContext(DataContext);
    const mainurl = post.picture;

    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data);
            }
        }
        fetchData();
    }, []);

    const deleteBlog = async () => {  
        await API.deletePost(post._id);
        navigate('/')
    //     return <Alert variant="outlined" severity="warning">
    //     This is a warning alert — check it out!
    //   </Alert>;
    }

 return (
    <Container>
        <div className='shadow-detail'>
            <Heading>{post.title}</Heading>  
            <Box className='none' style={{gap:'30px'}}>
                {   
                    account.username === post.username && 
                    <>
                        <Link className='button-86' to={`/update/${post._id}`}><EditNoteIcon style={{color:'greenyellow'}} /><span style={{fontWeight:'500', color:'greenyellow'}}>Edit</span></Link>
                        <button className='button-86' onClick={() => deleteBlog()}><DeleteForeverIcon /><span style={{fontWeight:'500'}}>Delete</span></button>
                        {/* <DeleteIcon className='button-86' onClick={() => deleteBlog()} color="error" /> */}
                    </>
                }
            </Box>
            <Author>
                <Typography style={{color:'#000'}}><span style={{fontWeight:'600'}}>Author : </span><span><abbr title={"View All Posts From " +  post.username} style={{textDecoration:'none'}}><Link to={`/?username=${post.username}`} style={{textDecoration:'none',color:'#000'}}>{post.username}</Link></abbr></span></Typography>
                <Typography style={{marginLeft: 'auto',color:'#000'}}><span style={{fontWeight:'600'}}>Posted On :</span> {new Date(post.createdDate).toDateString()}</Typography>
            </Author>
            <Image src={mainurl || url} alt="post" />
        </div>
        <div className='shadow' style={{padding:'35px',fontSize:'1.2rem',width:'auto',marginTop:'5vh'}}>
        <Typography>{post.description}</Typography></div>
        <div className='shadow' style={{marginTop:'10%',padding:'5%', display:'block',borderBottomLeftRadius:'0px',borderBottomRightRadius:'0px'}}><Comments post={post}/></div>
        
    </Container>
 )
}

export default DetailView;