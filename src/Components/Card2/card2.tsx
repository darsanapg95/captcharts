import './card2.css';
import Buttons from '../Button/button';
import camel from '../../assets/camel.svg';
import { useEffect } from 'react';

interface Props {
    file: File;
}
export default function Card2({ file }: Props) {
    // Component cleanup
useEffect(() => {
    return () => {
        URL.revokeObjectURL(URL.createObjectURL(file));
    };
}, [file]);

    return (
        <div className="card2">
            <div className="card_2">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div>
            <img src={URL.createObjectURL(file)} style={{width:'1294px',height:'608px'}}/>
                {/* <img src={camel} style={{width:'1294px',height:'608px'}}/> */}
            </div>
            <div style={{display:'flex',justifyContent:'space-between',margin:'0 20px 0 20px'}}>
                <Buttons 
                title={'Like'} 
                width={'642px'} 
                height={'74px'} 
                backgroundColor={'white'} 
                color={'#CF796C'}
                border={' 1px solid #CF796C'}
                />
                <Buttons 
                title={'Comment'} 
                width={'642px'} 
                height={'74px'} 
                backgroundColor={'#CF796C'} 
                color={'white'}
                border={' 1px solid #CF796C'}
                />
            </div>
            </div>
        </div>
    );
}
