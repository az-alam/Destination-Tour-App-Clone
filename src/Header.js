import React from 'react';
import logo from "./images/logo.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
function Header() {
    return (
        <>
            <header className='container-fluid'>
                <div className='header-div'>
                    <div className='logo-div'>
                        <a href='/'>
                            <img src={logo} alt='logo' height="38" width="200" />
                        </a>
                    </div>

                    <div className='form-div'>
                        <form className='header-form'>
                            <div className='input-div'>
                                <span><LocationOnIcon/></span>
                                <input type='text' placeholder='Where do you want to travel?'></input>
                            </div>

                            <div className='input-div'>
                                <span><CalendarMonthIcon/></span>
                                <input type='text' placeholder='Month'></input>
                            </div>

                            <div className='input-div'>
                                <span><CurrencyRupeeIcon/></span>
                                <input type='text' placeholder='Budget'></input>
                            </div>

                            <div className='Btn-div'>
                                <button>
                                    <span><SearchIcon/></span>
                                </button>
                            </div>
                            
                        </form>
                    </div>

                    <div className='Icon-div'>
                        <a href='/'><PhoneIcon/></a>
                        <a href='/'><PersonIcon/></a>
                        <a href='/'><MenuIcon/></a>
                    </div>
                </div>

                
            </header>
        </>
    )
}

export default Header