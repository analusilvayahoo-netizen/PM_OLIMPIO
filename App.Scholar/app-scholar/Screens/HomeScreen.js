import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import { CORES } from './Cores';

export default function HomeScreen({ navegar, logo }) {
  return (
    <View style={styles.container}>

      {logo && (
        <Image
          source={logo}
          style={styles.logo}
          resizeMode="contain"
        />
      )}

      <Text style={styles.titulo}>
        DAVINCI
      </Text>

      <Text style={styles.subtitulo}>
        App Scholar
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navegar('dashboard')}
      >
        <Text style={styles.textoBotao}>
          ENTRAR
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={() => navegar('sobre')}
      >
        <Text style={styles.textoBotaoSecundario}>
          SOBRE O APLICATIVO
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CORES.fundo,
    padding: 25,
  },

  logo: {
    width: '90%',
    height: 150,
    marginBottom: 15,
  },

  titulo: {
    fontSize: 38,
    fontWeight: 'bold',
    color: CORES.verde,
  },

  subtitulo: {
    fontSize: 20,
    color: CORES.cinza,
    marginBottom: 40,
  },

  botao: {
    width: '90%',
    backgroundColor: CORES.verde,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },

  textoBotao: {
    color: CORES.branco,
    fontSize: 16,
    fontWeight: 'bold',
  },

  botaoSecundario: {
    width: '90%',
    borderWidth: 1,
    borderColor: CORES.verde,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBotaoSecundario: {
    color: CORES.verde,
    fontWeight: 'bold',
  },

});