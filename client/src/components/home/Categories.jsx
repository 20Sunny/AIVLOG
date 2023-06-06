/* eslint-disable no-undef */

import {styled } from '@mui/material';

import { Link, useSearchParams } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import { categories } from '../../constants/data';
import FiberNewOutlinedIcon from '@mui/icons-material/FiberNewOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
    
const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    
    return (
        <>
                <div>
                    <Link className='button-86' to={`/create?category=${category || ''}`} style={{ textDecoration: 'none',margin:'20px 10px' }}>
                        <PostAddOutlinedIcon style={{fontSize:'20px',color:'black'}} />
                        <FiberNewOutlinedIcon style={{fontSize:'40px',color:'black'}} /></Link>
                        {/* {window.location.href === 'http://localhost:3000/' ? alert('hello') :null } */}
                </div>
                <div>
                   <abbr title="All Categories" style={{textDecoration:'none'}}><StyledLink to={"/"} className='button-86 none'><CategoryIcon /><span>All Categories</span></StyledLink></abbr> 
                </div>
                    {
                        categories.map(category => (
                                <div key={category.id}>
                                    <StyledLink to={`/?category=${category.type}`} className='button-86'>
                                       <abbr className='none' title={category.name}>{category.icon}<span>{category.type}</span></abbr>
                                    </StyledLink>
                                </div>
                        ))
                    }
        </>
    )
}

export default Categories;