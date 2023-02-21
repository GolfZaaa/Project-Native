import { Image, ImageBackground, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import backgroundgiveaway from '../../assets/images/backgroundGiveaway.png'
import AnimatedLottieView from 'lottie-react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const ModalScreen = ({navigation}) => {

    const openDrawer = () => navigation.toggleDrawer();


const [modalVisible, setModalVisible] = useState(false);


  return (
<View style={styles.centeredView}>
    <ImageBackground source={backgroundgiveaway} style={{width:'100%',height:'100%'}}>


    <View style={[styles.container]}>
        <Octicons
          name="three-bars"
          size={30}
          color="black"
          onPress={openDrawer}
        />
        <Text style={{ fontWeight: "bold", fontSize: 20 }}></Text>
        <Fontisto name="opencart" size={24} color="black" onPress={() => {}} />
      </View>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

          <AnimatedLottieView
        style={{width:1110,height:140,paddingBottom:20,bottom:15}}
        source={require('../../assets/Animation/GiveAway.json')}
        autoPlay
        />
        <Text style={{fontWeight:'500',bottom:10,maxWidth:'95%'}}>Congratulations</Text>
        <Text style={{maxWidth:'100%'}} >Congratulations on being the lucky winner of an iPhone 11 Pro Max.
Be </Text>
<Text>careful!!️.</Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
                <MaterialCommunityIcons name="close" size={24} color="black" />
            </Pressable>

          </View>
        </View>
      </Modal>

      <Pressable
        onPress={() => setModalVisible(true)}>
        <AnimatedLottieView
        style={{width:140,height:250,top:70,left:25}}
        source={require('../../assets/Animation/GiveAway0.json')}
        autoPlay
        />
        <Text style={{fontSize:25,fontWeight:'500',color:'pink',top:120,left:115}} >Click Here</Text>
      </Pressable>

      </ImageBackground>
    </View>
  )
}

export default ModalScreen

const styles = StyleSheet.create({
    centeredView: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      top:120,
        height:300      
    },
    button: {
      borderRadius: 20,
      padding: 10,
      position:'absolute',
      right:20,
      top:20
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#ffffff',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
        paddingHorizontal: 10,
        backgroundColor:'white',
        width:'100%',
        paddingTop:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        right: 10,
        bottom:10

      },
  });

