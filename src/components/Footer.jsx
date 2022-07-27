import React from 'react'
import { FaFacebookSquare, FaLinkedin, AiFillInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="sticky-footer" className="bg-light text-dark-50">
            <div className="container py-1">
                <div className="row">
                    <div className="col-md-6 col-12 my-auto">
                        <small>Copyright &copy; Vitaliy Dorosh 😎 🇺🇦 </small>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="d-flex float-right">
                            <a href="https://www.facebook.com/dorosh.v/">
                                <FaFacebookSquare className="connect text-dark" /></a>
                            <a href="https://www.linkedin.com/in/vitaliy-dorosh-22817036/">
                                <FaLinkedin className="connect text-dark" /></a>
                            <a href="https://www.instagram.com/vido88/">
                                <AiFillInstagram className="connect text-dark" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;