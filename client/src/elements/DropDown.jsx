import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link,useNavigate } from "react-router-dom";



export default function PositionedMenu() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleuserLogin = () => {
    setAnchorEl(null);
    navigate('/user/login')
  };
  const handlehospitalLogin = () => {
    setAnchorEl(null);
    navigate('/hospital/login')

   
  };
  const handleusersignup = () => {
    setAnchorEl(null);
    navigate('/user/signup')

   
  };
  const handlehospitalsignup = () => {
    setAnchorEl(null);
    navigate('/hospital/signup')

   
  };
  const handleClose =()=>{
    setAnchorEl(null);

  }

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='!text-white'
      >
        Login
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleuserLogin}>user Login</MenuItem>
        <MenuItem onClick={handleusersignup}>user Registration</MenuItem>
        <MenuItem onClick={handlehospitalLogin}>Hospital Login</MenuItem>
        <MenuItem onClick={handlehospitalsignup}>Hospital Registration</MenuItem>
      </Menu>
    </div>
  );
}