
import { styled, Box, Typography } from '@mui/material';

const Container = styled(Box)`
    padding: 20px;
    border: 1px solid #ffffff50;
    border-radius: 25px;
    background: #ffffff1c;
    filter: drop-shadow(2px 4px 6px black);
    box-shadow:5px 5px 10px #00000050;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
`;

const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 150
});

const Heading = styled(Typography)`
    font-size: 18px;
`;

const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
`;

const Post = ({ post }) => {
    const url = post.picture ? post.picture : 'https://res.cloudinary.com/dhbyg08yc/image/upload/v1685015449/photo_placeholder_landscape_0_xga5uf.jpg';
    
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 

    return (
        <Container className='width-50'>
            <span className='flag'>{post.categories}</span>
            <span className='auther'>Post By -:- {post.username}</span>
            <Image src={url} alt="post" />
            <div className='shadow'>
            <Heading className='tittle-h' style={{color:'#000'}}>{addEllipsis(post.title, 30)}</Heading>
            <Details className='tittle-h'>{addEllipsis(post.description, 100)}</Details>
            </div>
        </Container>
    )
}

export default Post;