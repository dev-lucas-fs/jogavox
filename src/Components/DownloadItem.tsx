import { useState } from "react";
import { TouchableNativeFeedback } from "react-native";
import { 
    View, 
    StyleSheet,
    Image,
    Pressable,
    Text,
    ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/Feather";


type InstallStatus = "Installed" | "Installing" | "Not Install"

const installBtns = {
    "Not Install": <Icon name="download" size={25} color={"#FF7037"}/>,
    "Installing": <ActivityIndicator color={"#FF7037"} size={25} />,
    "Installed": <Icon name="check-circle" size={25} color={"green"} />
}

interface Props extends React.PropsWithChildren {
    data: {
        title: string;
        author: string;
        image: string;
        url?: string;
        isInstall?: boolean
    }
}

export default function DownloadItem(props: Props) {

    const [installStatus, setInstallStatus] = useState<InstallStatus>("Not Install");

    function handleInstallBtn() {
        console.log("sss")
        if(installStatus === "Not Install")
            setInstallStatus("Installing")
    }

    return (
        <TouchableNativeFeedback >
            <View style={{ padding: 20, paddingBottom: 0 }}>
                <View style={styles.container}>
                    <Image style={styles.image} source={{ uri: props.data.image }} />
                    <View style={styles.containerTexts}>
                        <Text style={styles.title}>{ props.data.title }</Text>
                        <Text style={styles.author}>{ props.data.author }</Text>
                    </View>
                    <View style={styles.installContainer}>
                        <Pressable onPress={handleInstallBtn}>
                            { 
                                installBtns[installStatus]
                            }
                        </Pressable>
                    </View>
                </View>
            </View>
            
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        gap: 10,
        borderBottomColor: "#8F8F8F",
        borderBottomWidth: .5,
        paddingBottom: 20
    },
    image: {
        width: "25%",
        aspectRatio: 1,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#FFF"
    },
    containerTexts: {
        flex: 1,
        width: "100%",
        paddingTop: 5,
        gap: 5,
    },
    title: {
        color: "#0B081D",
        fontFamily: 'Barlow-Regular',
        fontSize: 18,
        fontWeight: "700",
        flexWrap: "wrap"
    },
    author: {
        color: "#8F8F8F",
        fontFamily: 'Barlow-Regular',
        fontSize: 12,
        fontWeight: "300",
    },
    installContainer: {
        alignItems: "flex-end",
        justifyContent: "center",
        width: 20
    }
});