import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { useState } from "react";
import { style } from "./style";

import { Task } from "../../components/task";

import Icon from "react-native-vector-icons/AntDesign";
import Clipboard from "../../../assets/Clipboard.png";
import Logo from "../../../assets/Logo.png";

export function Home(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    function handleTaskAdd(){
        if (!newTask.trim()){
          return;
        }
        setTasks(prevState => [...prevState, { name: newTask, status: false }]);
        setNewTask('');
    }

    function handleTaskRemove(name: string){
        Alert.alert("Remover", `Remover está tarefa da sua lista?`, [
          {
            text: "Sim",
            onPress: () => {
              setTasks(prevState => prevState.filter(task => task.name !== name));
            }
          },
          {
            text: "Não",
            style: "cancel"
          }
        ]);
    }

    function handleTaskComplete(name: string) {
        setTasks(prevState => 
            prevState.map(task =>
                task.name === name ? { ...task, status: !task.status } : task
            )
        );
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={Logo} />
                <View style={style.InputBox}>
                    <TextInput
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        style={[
                            style.TextInput,
                            { borderColor: isFocused ? '#5E60CE' : '#262626', borderWidth: 1 },
                        ]}
                        value={newTask}
                        onChangeText={text => setNewTask(text)}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor={'#808080'}
                    />
                    <TouchableOpacity style={style.Button} onPress={handleTaskAdd}>
                        <Icon name="pluscircleo" size={16} color="#F2F2F2" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={style.utilsBox}>
                <View style={style.Util}>
                    <Text style={[style.utilText, { color: '#4EA8DE' }]}>Criadas</Text>
                    <View style={style.utilCounter}>
                        <Text style={style.utilTextCounter}>{tasks.length}</Text>
                    </View>
                </View>
                <View style={style.Util}>
                    <Text style={[style.utilText, { color: '#8284FA' }]}>Concluídas</Text>
                    <View style={style.utilCounter}>
                        <Text style={style.utilTextCounter}>
                            {tasks.filter(task => task.status).length}
                        </Text>
                    </View>
                </View>
            </View>

            <FlatList
                data={tasks}
                style={{ width: '100%', paddingLeft: 30, paddingRight: 30 }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <Task
                        key={index}
                        name={item.name}
                        status={item.status}
                        onComplete={() => handleTaskComplete(item.name)}
                        onRemove={() => handleTaskRemove(item.name)}
                    />
                )}
                ListEmptyComponent={() => (
                    <View style={style.listEmptyBox}>
                        <Image source={Clipboard} />
                        <Text style={style.listEmptyText1}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={style.listEmptyText2}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}