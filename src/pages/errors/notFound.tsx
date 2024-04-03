import { Col, Container } from 'react-bootstrap';
import Image from '../../assets/assets/img/illustrations/404-error.svg';

function NotFoundPage() {
    document.body.className = 'bg-white';

    return (
        <div id='layoutError'>
            <div id='layoutError_content'>
                <main>
                    <Container>
                        <div className='row justify-content-center'>
                            <Col lg={6}>
                                <div className='text-center mt-4'>
                                    <img
                                        className='img-fluid p-4'
                                        src={Image}
                                        alt='404 Image'
                                    />
                                    <p className='lead'>
                                        This requested URL was not found on this server.
                                    </p>
                                </div>
                            </Col>
                        </div>
                    </Container>
                </main>
            </div>
            <div id='layoutError_footer'>
                <footer className='footer mt-auto footer-light'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-6 small'>
                                Copyright &#xA9; Your Website 2021
                            </div>
                            <div className='col-md-6 text-md-right small'>
                                <a href='#!'>Privacy Policy</a>
                                &#xB7;
                                <a href='#!'>Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default NotFoundPage;
