import { View, Text, TouchableOpacity } from "react-native";
import IconOne from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/Entypo";

import { style } from "./style";

type Props = {
    name: string,
    status: boolean,
    onRemove: () => void,
    onComplete: () => void
}

export function Task({ name, status, onRemove, onComplete }: Props) {
    return (
        <View style={style.container}>
            <TouchableOpacity style={status ? style.complete : style.inComplete} onPress={onComplete}>
                {status ? <Icon name="check" size={13} color="#F2F2F2" /> : null}
            </TouchableOpacity>

            <Text style={status ? style.textIncomplet : style.text}>
                {name}
            </Text>

            <TouchableOpacity onPress={onRemove}>
                <IconOne name="trash-2" size={20} color="#808080" />
            </TouchableOpacity>
        </View>
    );
}