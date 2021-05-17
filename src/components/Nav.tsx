import React from 'react';
import Icon from 'components/Icon';

import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NavWrapper =  styled.div`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul {
    display: flex;
    >li {
      width:33.33%;
      a {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:16px;
        .icon {
          height: 24px; 
          width:24px; 
        }
      }
   
    }
  }

`;

const Nav = ()=>{
  return(
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">
            <Icon name="tags"/>
            标签
          </Link>
        </li>
        <li>
          <Link to="/money">
            <Icon name="money"/>
            记账
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon name="statistics"/>
            统计
          </Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;
