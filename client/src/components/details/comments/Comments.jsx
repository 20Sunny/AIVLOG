import { useState, useEffect, useContext } from 'react';
import { Box, TextareaAutosize, Button, styled, Typography} from '@mui/material';
import { DataContext } from '../../../context/DataProvider';
import { API } from '../../../service/api';
import SendIcon from '@mui/icons-material/Send';

//components
import Comment from './Comment';
  
const CommentHeading = styled(Typography)`
font-weight: bold;
text-align: center;
    padding-bottom: 10vh;
    font-size: 2rem;
`;
const Container = styled(Box)`
    display: flex;
    align-items: center;
`;
const StyledTextArea = styled(TextareaAutosize)`
    width: 100%; 
    height: auto !important;
    padding: 25px;
    border-radius: 50px;
    border: 1px solid #ffffff50;
    box-shadow: 0px 0px 10px #0000001c;
    background: #ffffff1c;
    filter: drop-shadow(2px 4px 6px #00000050);
    overflow: hidden;
}
`;

const initialValue = {
    name: '',
    postId: '',
    date: new Date(),
    comments: ''
}

const Comments = ({ post }) => {
    const [comment, setComment] = useState(initialValue);
    const [comments, setComments] = useState([]);
    const [toggle, setToggle] = useState(false);
    const { account } = useContext(DataContext);

    useEffect(() => {
        const getData = async () => {
            const response = await API.getAllComments(post._id);
            if (response.isSuccess) {
                setComments(response.data);
            }
        }
        getData();
    }, [toggle, post]);

    const handleChange = (e) => {
        setComment({
            ...comment,
            name: account.username,
            postId: post._id,
            comments: e.target.value
        });
    }
    const owner = account.name;
    const addComment = async() => {
        await API.newComment(comment);
        setComment(initialValue)
        setToggle(prev => !prev);
    }
    
    return (
        <Box>
            <CommentHeading>Write Your Feedback / Suggestion</CommentHeading>
            <Container>
            {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>{owner}</Avatar> */}
                <StyledTextArea 
                    rowsMin={5} 
                    placeholder={'Hello! ' + owner + " What Is Your Though?"}
                    onChange={(e) => handleChange(e)} 
                    value={comment.comments}
                />
                <Button className='button-86 comment-btn'
                    style={{ height: 40 }}
                    onClick={(e) => addComment(e)}
                ><SendIcon  /></Button>             
            </Container>
            <Box style={{display:'flex',flexDirection:'column-reverse'}}>
                {
                    comments && comments.length > 0 && comments.map(comment => (
                        <Comment comment={comment} setToggle={setToggle} />
                    ))
                }
            </Box>
        </Box>
    )
}

export default Comments;