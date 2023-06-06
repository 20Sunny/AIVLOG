
import { AppBar, Toolbar, styled} from '@mui/material'; 
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    & > div > a {
        padding: 20px;
        color: #fff;
        text-decoration: none;
        font-weight: 400;
    }
`

const Header = () => {

    // const navigate = useNavigate();

    // const logout = async () => navigate('/account');
        const abouturl = 'https://github.com/20Sunny/aivana'
    return (
        <Component>
            <Container>
                <div style={{position: 'relative', display:'flex', alignItems:'center', alignSelf:'center'}}>
                    <img style={{height:'45px', padding:'10px'}} src="https://res.cloudinary.com/dhbyg08yc/image/upload/v1684508241/logo-fotor-bg-remover-202304179588_rh4zlh.png" alt="" />
                </div>
                <div style={{paddingRight:'100px'}} className='button-86'>
               <Link to='/'><abbr title="Home"><HomeIcon /></abbr></Link>
               <Link to={window.location} onClick={() => window.open(abouturl, '_blank')}><abbr title="About"><InfoOutlinedIcon /></abbr></Link>
               <Link to='/contact'><abbr title="Contact Us"><ContactPageIcon /></abbr></Link>
               <Link to='/account'><abbr title="Log Out"><LogoutOutlinedIcon /></abbr></Link></div>
            </Container>
        </Component>
    )
}

export default Header;
