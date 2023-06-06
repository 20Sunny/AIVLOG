import { useContext } from "react";

import { Typography, Box, styled } from "@mui/material";
import { Delete } from '@mui/icons-material';

import { API } from '../../../service/api';
import { DataContext } from "../../../context/DataProvider";

const Component = styled(Box)`
    margin-top: 30px;
    background: #ffffff1c;
    padding: 20px;
    border: 1px solid #ffffff50;
    border-radius: 50px;
    filter: drop-shadow(2px 4px 6px #00000050);
    box-shadow: 0px 0px 10px #0000001c;
`;

const Container = styled(Box)`
    display: flex;
    margin-bottom: 5px;
`;

const Name = styled(Typography)`
    font-weight: 600,
    font-size: 18px;
    margin-right: 20px;
`;

const StyledDate = styled(Typography)`
    font-size: 14px;
    color: #222;
`;

const DeleteIcon = styled(Delete)`
    margin-left: auto;
`;

const Comment = ({ comment, setToggle }) => {

    const { account } = useContext(DataContext)
    
    const removeComment = async () => {
       await API.deleteComment(comment._id);
       setToggle(prev => !prev);
    }

    return (
        <Component>
            <Container>
                <Name>{comment.name}</Name>
                <StyledDate>{new Date(comment.date).toDateString()}</StyledDate>
                { comment.name === account.username && <DeleteIcon style={{cursor:'pointer',background:'red', padding:'5px',border:'1px solid #fff',borderRadius:'10px', color:'#fff'}} onClick={() => removeComment()} /> }
            </Container>
            <Typography style={{fontSize:'20px', color:'#fff', textTransform:'capitalize'}}>{comment.comments}</Typography>
        </Component>
    )
}

export default Comment;