import React, { useState, useEffect } from 'react';
import { NavItem } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import { IconLogo } from 'shared/Icons';
import useScrollDirection from 'shared/hooks/useScrollDirection';
import { useTranslation } from 'react-i18next';
import { StyledHeader, StyledNav, StyledLinks } from './style';

const Menu = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const activePathname = location.pathname.split('/')[1];
  const scrollDirection = useScrollDirection();
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 5);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <StyledNav>
        <div className="logo">
          <a href="/" aria-label="home">
            <IconLogo />
          </a>
        </div>
        <StyledLinks>
          <ol>
            <NavItem>
              <Link to={{ pathname: '/home' }}>{t('route.home')}</Link>
            </NavItem>
            <NavItem>
              <Link to={{ pathname: '/about' }}>{t('route.about')}</Link>
            </NavItem>
            <NavItem>
              <Link to={{ pathname: '/experience' }}>
                {t('route.experience')}
              </Link>
            </NavItem>
          </ol>
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  );
};

export default Menu;
