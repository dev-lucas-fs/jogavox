import Colors from "@/constants/Colors"
import { View, StyleSheet, ScrollView } from "react-native"
import ListItem from "./ListItem"


export default function GameList(props: React.ComponentPropsWithoutRef<typeof ScrollView>) {
    const listItems = [0, 1, 1, 2, ,3 ,4, 6]


    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} style={[props.style, styles.container]}>
            {
                listItems.map((props, i) => (
                    <ListItem 
                        title="Jogo dos Instrumentos" 
                        author="Tiago e Antonio Borges" 
                        image={require("assets/capa[mobile].png")} 
                        style={{
                            borderBottomWidth: 2/3,
                            borderColor: "#BEBEBE"
                        }}
                        key={i + 1}
                    />                        
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.gameList.background,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingVertical: 20
    }
})