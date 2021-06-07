import React from 'react';
import Icon from 'components/Icon';

import { NavLink } from 'react-router-dom';
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
        padding:6px 0;
        .icon {
          height: 24px; 
          width:24px; 
        }
        &.selected{
          color:#ffcc00;
          .icon {
            fill: #ffcc00;
          }
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
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tags"/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics"/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;
