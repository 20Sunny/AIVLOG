import React, { useState, useEffect, useContext } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Component = styled(Box)`
    width: 400px;
    border-radius: 25px;
    margin: auto;
    box-shadow: 0px 0px 10px #00000050;
    background: rgba(255,255,255,.15);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border: 1px solid rgba(255,255,255,.18);
    filter: drop-shadow(2px 4px 6px black);
`;

const Image = styled('img')({
    width: 150,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 25px;
    all: unset;
    height: 30px;
    font-size: 16px;
    background: transparent;
    border: none;
    position: relative;
    color: #f0f0f0;
    cursor: pointer;
    z-index: 1;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    -moz-user-select: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation
`;

const SignupButton = styled(Button)`
text-transform: none;
background: #FB641B;
color: #fff;
height: 48px;
border-radius: 25px;
all: unset;
height: 30px;
font-size: 16px;
background: transparent;
border: none;
position: relative;
color: #f0f0f0;
cursor: pointer;
z-index: 1;
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: center;
white-space: nowrap;
-moz-user-select: none;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

    const imageURL = 'https://res.cloudinary.com/dhbyg08yc/image/upload/v1684508241/logo-fotor-bg-remover-202304179588_rh4zlh.png';

    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            showError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });
            
            isUserAuthenticated(true)
            setLogin(loginInitialValues);
            navigate('/');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    return (
        <Box style={{display:'flex',height:'100vh'}} >
        <Component>
            <Box>
                <Image src={imageURL} alt="blog" />
                {
                    account === 'login' ?
                        <Wrapper>
                            <h2 className='flag' style={{textAlign:'center',fontWeight:'400', top:'0%'}}>Log In</h2>
                            <TextField variant="outlined" value={login.username} onChange={(e) => onValueChange(e)} name='username' label='Enter Username' focused/>
                            <TextField variant="outlined" value={login.password} onChange={(e) => onValueChange(e)} name='password' label='Enter Password' focused/>

                            {error && <Error>{error}</Error>}

                            <LoginButton className='button-86' onClick={() => loginUser()} ><abbr title='Log In'> <LoginIcon /></abbr></LoginButton>
                            <Text style={{ textAlign: 'center', color:'#000' }}>OR</Text>
                            <SignupButton className='button-86' onClick={() => toggleSignup()} style={{ marginBottom: 50 }}><abbr title='Create New Account'><PersonAddAltIcon /></abbr></SignupButton>
                        </Wrapper> :
                        <Wrapper>
                            <h2 className='flag' style={{textAlign:'center',fontWeight:'400', top:'0%'}}>Sign Up</h2>
                            <TextField variant="outlined" onChange={(e) => onInputChange(e)} type='username' name='username' label='Enter Username' focused/>
                            <TextField variant="outlined" onChange={(e) => onInputChange(e)} type='name' name='name' label='Enter Full Name' focused/>
                            <TextField variant="outlined" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' focused/>

                            <SignupButton className='button-86' onClick={() => signupUser()} ><abbr title="Create Account"><PersonAddAltIcon /></abbr></SignupButton>
                            <Text style={{ textAlign: 'center' , color:'#000'}}>OR</Text>
                            <LoginButton className='button-86' onClick={() => toggleSignup()}><abbr title="Already Have An Account"><KeyboardBackspaceIcon /></abbr></LoginButton>
                        </Wrapper>
                }
            </Box>
        </Component>
        </Box>
    )
}

export default Login;
