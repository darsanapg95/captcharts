import Buttons from '../Button/button';
import camel from '../../assets/camel.svg';
import './popup.css';


export default function ImgPopup() {
    return (
        <div className="popup">
            <div className="popup_1">
                <div className="popup_2">
                <div>
                <img src={camel} style={{width:'1000px',height:'1000px'}}/>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',margin:'0 20px 0 20px',gap:'20px'}}>
                <Buttons 
                title={'Like'} 
                width={'200px'} 
                height={'34px'} 
                backgroundColor={'white'} 
                color={'#CF796C'}
                border={' 1px solid #CF796C'}
                />
                <Buttons 
                title={'Comment'} 
                width={'200px'} 
                height={'34px'} 
                backgroundColor={'#CF796C'} 
                color={'white'}
                border={' 1px solid #CF796C'}
                />
            </div>
                </div>
            </div>
        </div>
    );
}
