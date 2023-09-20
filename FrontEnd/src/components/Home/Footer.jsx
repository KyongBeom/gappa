import React from 'react';
import style from './Footer.module.css'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={style.footer}>
      <img src="./images/FooterHome.png" alt="" />
      <img src="./images/FooterLoan.png" alt="" />
      <img src="./images/FooterFriends.png" alt="" />
      <img src="./images/FooterProfile.png" alt=""  onClick={() => { navigate("/profile") }}/>
    </div>
  );
};

export default Footer;