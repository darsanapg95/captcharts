import { Button } from '@mantine/core';

interface ButtonProps {
    title:string;
    width:string;
    height:string;
    backgroundColor:string;
    color:string;
    border?:string
    onClick?:()=>void
}

function Buttons({title,width,height,backgroundColor,color,border,onClick}:ButtonProps) {
  return <Button 
  variant="filled"
  onClick={onClick} 
  style={{
    width:width,
    height:height,
    borderRadius:'45px',
    border:border,
    backgroundColor:backgroundColor,
    color:color,
}}
  >{title}
  </Button>;
}
export default Buttons;