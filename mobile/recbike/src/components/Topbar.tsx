import { AppBar, TextInput } from "@react-native-material/core";
import { Image} from 'react-native';
import logo from '../../assets/LOGO.png';

export default function Topbar () {
    return (
        <AppBar transparent style={{alignItems:'center'}}>
            <Image style={{width:172, height:56}} source={logo}/>
            <TextInput variant='outlined' label="Pesquisar por bairro..." style={{width:337, margin:16}} />
        </AppBar>
    );
}