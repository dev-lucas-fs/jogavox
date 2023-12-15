import { Image, Text, View } from "react-native";
import { GestureResponderEvent, TouchableNativeFeedback } from "react-native";
import Style from "./styles";

export default function Cover(props : Props) {
    const { title, uri, width, onPress} = props;

    return (
        <View style={[Style.container, { width }]}>
            <Image style={Style.image} source={{ uri }} />
            <TouchableNativeFeedback onPress={onPress}>
                <View style={Style.mask}> 
                    <Text style={Style.text}>{ title }</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}

interface Props extends React.PropsWithChildren {
    title?: string;
    uri?: string,
    width?: number
    onPress?: (event: GestureResponderEvent) => void
}