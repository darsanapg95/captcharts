import './card2.css';
import Buttons from '../Button/button';
import camel from '../../assets/camel.svg';
import { useEffect } from 'react';
import { Button } from '@mantine/core';

interface Props {
    file: File;
}
export default function Card2({ file }: Props) {
useEffect(() => {
    return () => {
        URL.revokeObjectURL(URL.createObjectURL(file));
    };
}, [file]);

    return (
        <div className="card2">
            <div className="card_2">
                <Button className='btn3'>Report</Button>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div>
            <img src={URL.createObjectURL(file)} className='img'/>
            </div>
            <div className='btn'>
                <Button className='btn2'>Like</Button>
                <Button className='btn1'>Comment</Button>
            </div>
            </div>
        </div>
    );
}
