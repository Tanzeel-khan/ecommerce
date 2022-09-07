import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { ShoppingCartOutlined } from '@mui/icons-material';

const Container = styled.div`
    height: 60px;
    /* background-color: black; */
    color: black;
`;
const Wrapper =  styled.div`
  padding: 18px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Language =  styled.span`
      font-size: 14px;
      cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input =  styled.input`
    border: none;
`;

const Logo = styled.h1`
    font-weight: 900;
    font-size: 40px;
`;

const MenuItem = styled.div`
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    margin-right: 25px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                    EN
                </Language>
                <SearchContainer>
                    <Input/>
                    <SearchIcon style={{color:"gray", fontSize: "18"}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>PRO SHOP.</Logo>
            </Center>
            <Right>
                <MenuItem>SignUp</MenuItem>
                <MenuItem>SignIn</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined/>
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
        
    </Container>
  )
}

export default Navbar