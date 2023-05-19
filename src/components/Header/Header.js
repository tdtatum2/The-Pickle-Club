import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import headerImg from '../../assets/images/header.jpg';

import './Header.scss';

function Header() {
  return (
    <header id="home">
        <Row className="header_row m-0">
            <Col className="header_img_col p-0" xs={12}>
                <img src={headerImg} alt="Pickleball on court" className="header_img" />
            </Col>
            <Col className="header_main_col" xs={12}>
              <Row>
                <Col className='header_information_col' xs={12}>
                  <h1 className="header_title">The Pickle Club</h1>
                  <h2 className="header_subtitle">Exclusive Indoor Pickleball</h2>
                  <p className="header_description">
                    The Pickle Club is home to the best indoor courts available in Wichita!
                    Designed for pickleball enthusiasts, we have a limited number of memberships
                  </p>
                </Col>
                <Col className="header_pricing_col" xs={12}>
                  <div className="pricing_bg_mobile">
                    <h3 className="pricing_title">Memberships</h3>
                    <div className="pricing_grid_mobile">
                      <h4 className="pricing_option">6 months</h4>
                      <h4 className="pricing_price">$150.00</h4>
                      <h4 className="pricing_option">3 months</h4>
                      <h4 className="pricing_price">$90.00</h4>
                      <p className="pricing_subtext">We are currently limiting to 50 memberships, so act fast!</p>
                    </div>
                    <hr className="pricing_divider" />
                    <h3 className="pricing_title">Court Rentals</h3>
                    <div className="pricing_grid_mobile">
                      <h4 className="pricing_option">90 minutes</h4>
                      <h4 className="pricing_price">$24.00</h4>
                      <h4 className="pricing_option">2 hours</h4>
                      <h4 className="pricing_price">$32.00</h4>
                      <p className="pricing_subtext">Guest fees: $5.10 for 90 minutes and $6.80 for 2 hours.</p>
                    </div>
                  </div>
                </Col>
                <Col className="header_create_account_col" xs={12}>
                  <button className="header_join_us">Join Today!</button>
                </Col>
              </Row>
            </Col>
        </Row>
    </header>
  )
}

export default Header