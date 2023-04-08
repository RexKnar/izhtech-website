import LinkType from '../../types/link';
import { FC, Fragment, ReactElement, useRef } from 'react';
// -------- custom hook -------- //
// -------- custom component -------- //

// -------- partial header component -------- //
import Info from './partials/Info';
import useSticky from '../../hooks/useSticky';
import ListItemLink from '../reuseable/links/ListItemLink';
import NextLink from '../reuseable/links/NextLink';
import SocialLinks from '../reuseable/SocialLinks';



// ===================================================================
type NavbarProps = {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
};
// ===================================================================

const Navbar: FC<NavbarProps> = (props) => {
  const { navClassName, info, search, social, language, button, cart, fancy, navOtherClass, stickyBox, logoAlt } =
    props;

  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  const logo = sticky ? 'logo-dark' : logoAlt ?? 'logo-dark';
  // dynamically added navbar classname
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light gradient-5 navbar-clone fixed';

  // render inner nav item links
  const renderLinks = (links: LinkType[]) => {
    return links.map((item) => (
      <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />
    ));
  };

  // all main header contents
  const headerContent = (
    <Fragment>
      <div className="navbar-brand transparent w-100">
        <NextLink href="/" title={<img alt="logo" src={`/img/${logo}.png`} srcSet={`/img/${logo}@2x.png 2x`} />} />
      </div>
 
      <div id="offcanvas-nav" data-bs-scroll="true" className=" nav-right navbar-collapse offcanvas offcanvas-nav offcanvas-start ">
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0">IZH-Tech</h3>
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">
            {/*  ===================== Home nav item  ===================== */}
            <li className="nav-item">
              <NextLink href="/home" title="Home" className="nav-link" />
            </li>

            {/* ===================== About nav item  ===================== */}
            <li className="nav-item">
              <NextLink href="/about" title="About" className="nav-link" />
            </li>

            {/* ===================== Service nav item ===================== */}
            <li className="nav-item dropdown">
              <NextLink href="/services" title="Services" className="nav-link" />
            </li>

            {/* ===================== Contact nav item ===================== */}
            <li className="nav-item dropdown dropdown-mega">
              <NextLink href="/contact" title="Contacts" className="nav-link" />
            </li>
          </ul>

          {/* ============= show contact info in the small device sidebar ============= */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink title="info@email.com" className="link-inverse" href="mailto:first.last@email.com" />
              <br />
              <NextLink href="tel:0123456789" title="00 (123) 456 78 90" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
        </div>
        <div className="navbar-other d-flex">
          <ul className="navbar-nav flex-row align-items-end ms-auto">
            <li className="nav-item d-none d-md-block">
              <a
                href="#"
                className="btn btn-primary gradient-5 rounded-pill btn-size"
                rel="noreferrer"
              >
                Book a Demo
              </a>
            </li>
          </ul>
        </div>
      {/* </div> */}

      {/* ============= right side header content ============= */}
      <div className={navOtherClass}>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* ============= humburger button for small device ============= */}
          <li className="nav-item d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav" className="hamburger offcanvas-nav-btn">
              <span />
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {stickyBox && <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>

    

      {/* ============= info sidebar ============= */}
      {info && <Info />}

      {/* ============= cart sidebar ============= */}
    </Fragment>
  );
};

// set deafult Props
Navbar.defaultProps = {
  cart: false,
  info: false,
  social: false,
  search: false,
  language: false,
  stickyBox: true,
  navOtherClass: 'navbar-other w-100 d-flex ms-auto',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};

export default Navbar;
