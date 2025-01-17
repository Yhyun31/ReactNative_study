import React from "react";
import { TouchableOpacity,View,Text } from "react-native";

const MyButton = () => {
    return (
        <TouchableOpacity onPress={()=> alert("success!")}>
            <View style={{backgroundColor:'red', padding: 20, margin: 100}}>
                <Text style={{fontSize:20, color:'white'}}>Click Me</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MyButton;