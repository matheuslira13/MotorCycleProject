import { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import TextInput from "../../components/TextInput/TextInput";



export default function MotorcycleSelectionList() {
  return (

    <ScrollView>


      {/* A View abaixo serve apenas como base de medida até o header ser feito*/}
      <View>
        <Text style={styles.fakeHeader}>
        </Text>
      </View>



      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity style={styles.container} onPress={() => alert('Incluir rota da página de lista de peças Horizon 150')}>
          <Image
            source={require('../../../assets/horizon-150.jpg')}
            style={styles.motoImg}

          />
          <Text style={styles.motoName}>
            HORIZON 150
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container} onPress={() => alert('Incluir rota da página de lista de peças Kansas 150')}>
          <Image
            source={require('../../../assets/kansas-150.jpg')}
            style={styles.motoImg}
          />
          <Text style={styles.motoName}>
            KANSAS 150
          </Text>
        </TouchableOpacity>
      </View>



      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity style={styles.container} onPress={() => alert('Incluir rota da página de lista de peças Mirage 250')}>
          <Image
            source={require('../../../assets/mirage-250.jpg')}
            style={styles.motoImg}
          />
          <Text style={styles.motoName}>
            MIRAGE 250
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container} onPress={() => alert('Incluir rota da página de lista de peças V-Blade 250')}>
          <Image
            source={require('../../../assets/vblade-250.jpg')}
            style={styles.motoImg}
          />
          <Text style={styles.motoName}>
            V-BLADE 250
          </Text>
        </TouchableOpacity>
      </View>



      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity style={styles.container} onPress={() => alert('Incluir rota da página de lista de peças Amazonas 250')}>
          <Image
            source={require('../../../assets/amazonas-250.jpg')}
            style={styles.motoImg}
          />
          <Text style={styles.motoName}>
            AMAZONAS 250
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container} onPress={() => alert('Incluir rota da página de lista de peças Virago 250')}>
          <Image
            source={require('../../../assets/virago-250.jpg')}
            style={styles.motoImg}
          />
          <Text style={styles.motoName}>
            VIRAGO 250
          </Text>
        </TouchableOpacity>
      </View>



      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity style={styles.container} onPress={() => alert('Incluir rota da página de lista de peças Horizon 250')}>
          <Image
            source={require('../../../assets/horizon-250.jpg')}
            style={styles.motoImg}
          />
          <Text style={styles.motoName}>
            HORIZON 250
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container} onPress={() => alert('Incluir rota da página de lista de peças Intruder 125')}>
          <Image
            source={require('../../../assets/intruder-125.jpg')}
            style={styles.motoImg}
          />
          <Text style={styles.motoName}>
            INTRUDER 125
          </Text>
        </TouchableOpacity>
      </View>


    </ScrollView>

  )
}