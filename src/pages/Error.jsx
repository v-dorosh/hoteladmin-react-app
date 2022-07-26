import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { FaRegMeh } from 'react-icons/fa';

export default function Error() {
    return (
        <>
        <Hero hero="roomsError" />
        <Banner title="ERROR 404 NOT FOUND" subtitle="Ooops...😎👻👽">
                <FaRegMeh className="lost"></FaRegMeh>
                <Link to="/" className="btn btn-warning">
                      RETURN HOME
                </Link>
        </Banner>
        </>
    )
}