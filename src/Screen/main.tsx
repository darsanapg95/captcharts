import { MantineProvider } from "@mantine/core";
import Header from "../Components/Header/header";
import Card2 from "../Components/Card2/card2";
import ImgPopup from "../Components/ImgPopup/imgPopup";
import Filebutton from "../Components/filebutton/filebutton";

export default function Main() {
    return (
        <MantineProvider>
        <Header/>
        <Filebutton/>
        {/* <Card1/> */}
        {/* <Card2/> */}
        {/* <ImgPopup/> */}
        </MantineProvider>
    );
}