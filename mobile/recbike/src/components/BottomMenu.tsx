import { AppBar, IconButton, Stack } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { PropsMenu, MenuItem } from "../types/menu";

export default function BottomMenu(props: PropsMenu) {
    const {active} = props
  return (
    <AppBar
      color="#F27038"
      variant="bottom"
      style={{ height: 80, position: "absolute", start: 0, end: 0, bottom: 0}}
    >
      <Stack direction="row" fill mb={70} center spacing={41}>
      <IconButton pressEffect="none" icon={(props) => <Icon name="home" {...props} color={active == MenuItem.Home ? "#0C446C" : "white"} size={45} />} />
        <IconButton pressEffect="none" icon={(props) => <Icon name="bicycle-basket" {...props} color={active == MenuItem.Bike ? "#0C446C" : "white"} size={45} />} />
        <IconButton pressEffect="none" icon={(props) => <Icon name="bullhorn" {...props} color={active == MenuItem.Advertising ? "#0C446C" : "white"} size={45} />} />
        <IconButton pressEffect="none" icon={(props) => <Icon name="account" {...props} color={active == MenuItem.Profile ? "#0C446C" : "white"} size={45} />} />
      </Stack>
    </AppBar>
  );
}
