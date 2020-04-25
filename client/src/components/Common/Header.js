import React from 'react';
import {Link as RouterLink} from "react-router-dom";

import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/core/styles";

import InstagramIcon from '@material-ui/icons/Instagram';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

const useStyles = makeStyles(theme => ({
    logo:{
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            textDecoration:'none'
        }
    },
    home:{
        marginRight: theme.spacing(4)
    }
}));

function Header() {
    const classes = useStyles();

    return (
        <Box display='flex' alignItems='center'  bgcolor='white' justifyContent='space-between'>
            <Box display='flex' alignItems='center' justifyContent='space-between' >
                <Link component={RouterLink} to='/' className={classes.logo}>
                    <InstagramIcon fontSize='large'/>
                    <Box component='h1' fontSize='h6.fontSize' fontWeight='fontWeightMedium' ml={2}>
                        Instagraph
                    </Box>
                </Link>
            </Box>
            <Box display='flex' alignItems='center'>
                    <Link component={RouterLink} to='/'>
                        <HomeOutlinedIcon fontSize='large' className={classes.home}/>
                    </Link>
                <Link component={RouterLink} to='profile'>
                    <PersonOutlineIcon fontSize='large'/>
                </Link>
            </Box>
        </Box>
    );
}

export default Header;