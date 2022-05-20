import React from 'react'
import logo from '../img/marvel-logo.png'

const Header = () => {
    return (
        <nav class="navbar navbar-dark bg-danger">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src={logo} alt="" width="60" height="24" class="d-inline-block align-text-top"/>
                  Karakter Veritabanı
            </a>
            </div>
        </nav>
    )
}

export default Header
