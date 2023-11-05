import Colors from "@/constants/Colors"
import { StyleSheet, ScrollView } from "react-native"
import ListItem from "./ListItem"
import { useState, useEffect } from "react"

interface IProps extends React.ComponentPropsWithoutRef<typeof ScrollView> {
    titleFilter: string
}

export default function GameList(props: IProps) {
    const names = ["Jogo dos Instrumentos", "Jogo", "Meio Ambiente"]
    const listItems = Array.from({ length: 3 }, (v, k) => (
        {
            title:names[k], 
            author:"Tiago e Antonio Borges", 
            image: require("assets/capa[mobile].png")
        }
    ))

    const [items, setItems] = useState(listItems);

    useEffect(() => {
        setItems(() => (
            listItems.filter(value => value.title.toUpperCase().search(props.titleFilter.toUpperCase()) !== -1)
        ))
    }, [props.titleFilter]);

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 30 }} style={[props.style, styles.container]}>
            {
                items.map((props, i) => (
                    <ListItem 
                        title={props.title} 
                        author={props.author}  
                        image={props.image} 
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