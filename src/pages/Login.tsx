import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React from "react";
import {  TextInput } from "react-native-gesture-handler";

function Login(){
    return (
       <SafeAreaView className="bg-primary"  >
        <View className= " bg-primary h-2/6 "  >
            <View className="p-7 my-auto mb-4">
                <Text className="text-white text-2xl" style={{fontFamily: "Poppins-Regular"}}>
                    Welcome Back
                </Text>
            </View>
        </View>
        <View className=" bg-secondary h-4/6 rounded-t-[30] ">
            <View className="flex flex-row items-center justify-center gap-32 p-3 ">
                <TouchableOpacity className="flex flex-col items-center p-2">
                    <Text  className="text-primary text-lg font-bold">Login</Text>
                    <View className=" w-full bg-primary h-[2]"></View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className="text-primary text-lg font-bold">SignUp</Text>
                </TouchableOpacity>
            </View>

            <KeyboardAwareScrollView >
                <View className="flex flex-col justify-center p-4 gap-4 mb-2 ">
                    <Text className="text-primary text-lg ml-5 font-semibold">Email</Text>
                    <TextInput className="bg-white rounded-full border-2 border-primary p-1 text-center" keyboardType={"email-address"}/>
                    <Text className="text-primary text-lg ml-5 font-semibold">Password</Text>
                    <TextInput secureTextEntry={true} className="bg-white rounded-full border-2 border-primary p-1 text-center" />
                </View>
                <View className="flex flex-col justify-center items-center p-2 gap-3 mt-1">
                    <TouchableOpacity className="bg-primary px-20 py-2 rounded-full">
                        <Text className="text-center text-white text-xl font-semibold">
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="">
                        <Text style={{fontFamily: "Poppins-Regular"}} className="text-primary text-sm">
                            Don’t have an account? 
                        </Text>
                        <Text style={{fontFamily: "Poppins-Regular"}} className="text-primary text-sm text-center">
                            Sign up here
                        </Text>
                     </TouchableOpacity>
            </View>
            </KeyboardAwareScrollView>
            
        </View>
       </SafeAreaView>
    )
}

export default Login;