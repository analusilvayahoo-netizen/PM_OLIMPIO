import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { CORES } from './Cores';

export default function SobreScreen({ navegar }) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Sobre o App Scholar
      </Text>

      <View style={styles.card}>

        <Text style={styles.texto}>
          O App Scholar é um sistema desenvolvido
          para auxiliar na organização das
          informações escolares.
        </Text>

        <Text style={styles.texto}>
          O aplicativo permite o gerenciamento de
          alunos, professores, turmas, cursos,
          disciplinas, matrículas, responsáveis,
          avaliações, coordenadores e boletins.
        </Text>

      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navegar('home')}
      >
        <Text style={styles.textoBotao}>
          ← VOLTAR
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: CORES.fundo,
    padding: 25,
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: CORES.verde,
    textAlign: 'center',
    marginBottom: 25,
  },

  card: {
    backgroundColor: CORES.branco,
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 14,
    padding: 20,
  },

  texto: {
    fontSize: 16,
    color: '#444',
    lineHeight: 25,
    marginBottom: 20,
    textAlign: 'justify',
  },

  botao: {
    backgroundColor: CORES.verde,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },

  textoBotao: {
    color: CORES.branco,
    fontWeight: 'bold',
    fontSize: 15,
  },

});