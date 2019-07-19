import * as React from 'react';
import { isLoggedIn } from '../../../base';
import * as Styled from './Navigation.styles';
import { INavigationProps } from './Navigation.types';

const Navigation = (props: INavigationProps) => {
  return (
    <nav className={props.className}>
      <Styled.navList>
        <li>
          <Styled.link exact={true} to='/'>
            <i className='fa fa-usd' aria-hidden='true' />
            <span>Home</span>
          </Styled.link>
        </li>
        <li>
          <Styled.link to='/about'>
            <i className='fa fa-info' aria-hidden='true' />
            <span>About</span>
          </Styled.link>
        </li>
        <li>
          <Styled.link to='/portfolio'>
            <i className='fa fa-code' aria-hidden='true' />
            <span>Portfolio</span>
          </Styled.link>
        </li>
        {isLoggedIn() ? (
          <li>
            <Styled.link to='/todo'>
              <i className='fa fa-check-square-o' aria-hidden='true' />
              <span>Todo</span>
            </Styled.link>
          </li>
        ) : null}
      </Styled.navList>
    </nav>
  );
};

export default Navigation;
