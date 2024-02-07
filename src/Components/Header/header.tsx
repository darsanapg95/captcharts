import Buttons from '../Button/button';
import Searchbar from '../Searchbar/searchBar';
import './header.css'
import logo from '../../assets/logo.png'

function Header() {
    return (
        <div className="header">
            <div className='image'>
            <img src={logo} alt="logo"/>
            </div>
            <div className='header-buttons'>
            <Searchbar/>
            <Buttons 
            title={'Asha Sunny'} 
            width={'207px'} 
            height={'52px'}
            backgroundColor={'#E7AD99'}
            color={'white'}
            border={'1px solid #E7AD99'}
            />
            <Buttons 
            title={'Logout'} 
            width={'180px'} 
            height={'52px'}
            backgroundColor={'#E7AD99'}
            color={'white'}
            border={'1px solid #E7AD99'}
            />
            </div>
        </div>
    );
}
export default Header;