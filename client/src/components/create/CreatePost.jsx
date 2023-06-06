/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';

import { styled, Box, TextareaAutosize, Button, InputBase, FormControl  } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)(({ theme }) => ({
    margin: '0px 100px',
    height:'100%',
    minHeight: '100vh',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
    width: '100%',
    height: '60vh',
    objectFit: 'cover',
    borderRadius:'10px',
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
width: calc(100% - 60px);
padding: 30px;
background: #ffffff1c;
box-shadow: 0px 0px 10px #00000050;
border-radius: 25px;
overflow: auto !important;
height: calc(100vh - 140px) !important;
filter: drop-shadow(2px 4px 6px #00000050);
border: 1px solid #00000050;
margin-top: 50px;
font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}

const CreatePost = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const { account } = useContext(DataContext);

    const url = post.picture ? post.picture : 'https://res.cloudinary.com/dhbyg08yc/image/upload/v1685015449/photo_placeholder_landscape_0_xga5uf.jpg';
    
    useEffect(() => {
        const getImage = async () => { 
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const response = await API.uploadFile(data);
                post.picture = response.data;
            }
        }
        getImage();
        post.categories = location.search?.split('=')[1] || 'All';
        post.username = account.username;
    }, [file])

    const savePost = async () => {
        await API.createPost(post);
        navigate('/');
    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <div className="shadow-detail" style={{justifyContent:'flex-start'}}>
            <Image src={url} alt="post" />
            <label htmlFor="fileInput" className='flag'>
                    <Add style={{color:'#000000 !important'}} fontSize="large" color="action" />
                </label>
            <StyledFormControl className='shadow'>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputTextField className='shadow' style={{filter:'none'}} onChange={(e) => handleChange(e)} name='title' placeholder="Title" />
                <Button onClick={() => savePost()} className='button-86' style={{padding:'30px',filter:'none !important'}}>Publish</Button>
            </StyledFormControl>
            </div>

            <Textarea
                rowsMin={5}
                placeholder="Tell your story..."
                name='description'
                onChange={(e) => handleChange(e)} 
            />
        </Container>
    )
}

export default CreatePost;