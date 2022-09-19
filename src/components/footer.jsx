import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
const Footer = () => {

    return (
        <Container>
            <div className='left'>
                <h1 className='logo'>LAMA.</h1>
                <p className='desc'>There are many variation of passage of Lorem lpSum avaiable,but the majority have sufered alteration in some from ,by ịnjected humour or randomised words which dont't lock event slighty belieavable</p>
                <div className='socialContainer'>
                    <SocialIcon color="3B5999"> <FacebookIcon /></SocialIcon>
                    <SocialIcon color="E4405F"><InstagramIcon /></SocialIcon>
                    <SocialIcon color="55ACEE"><TwitterIcon /></SocialIcon>
                    <SocialIcon color="E60023"><TelegramIcon /></SocialIcon>
                </div>
            </div>
            <div className='center'>
                <h3 className='title'>Useful Links</h3>
                <ul className='list'>
                    <li className='listItem'>Home</li>
                    <li className='listItem'>Cart</li>
                    <li className='listItem'>Man Fashion</li>
                    <li className='listItem'>Woman Fashion</li>
                    <li className='listItem'>Accessories</li>
                    <li className='listItem'>My Account</li>
                    <li className='listItem'>Order Tracking</li>
                    <li className='listItem'>Wishlist</li>
                    <li className='listItem'>Wishlist</li>
                    <li className='listItem'>Terms</li>
                </ul>

            </div>
            <div className='right'>
                <h3 className='title'>Contact</h3>
                <div className='contactItem'><LocationOnIcon style={{ marginRight: "10px" }} />622 Dixie Path , South Tobinchester 98336</div>
                <div className='contactItem'><LocalPhoneIcon style={{ marginRight: "10px" }} /> +1 234 56 78</div>
                <div className='contactItem'><MailIcon style={{ marginRight: "10px" }} />lmthao.dev@gmail.com</div>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </div>
        </Container>
    )
}

export default Footer
const Container = styled.div`
display: flex;
justify-content: space-between;
@media only screen and (max-width: 380px) {
   flex-direction: column;
 
}
.left{
    flex:1;
    @media only screen and (max-width: 380px) {
   text-align: center;

}
    .desc{
        margin: 40px 0;
        font-weight: 300;
        font-size:small;
    }
    .socialContainer{
        display: flex;
 
        
    }
}
.center{
    @media only screen and (max-width: 380px) {
   display: none;
}
    flex:1;
    .title{ margin-bottom: 30px;}
    .list{
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        .listItem{
            width: 50%;
  margin-bottom: 10px;
        }
    }
}
.right{
    @media only screen and (max-width: 380px) {
 background-color: #fff8f8;
}
    flex:1;
    .contactItem{
        margin-bottom: 20px;
  display: flex;
  align-items: center;
    }
}
`
const SocialIcon = styled.div`
 width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`
