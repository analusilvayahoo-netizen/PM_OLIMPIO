import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { CORES } from './Cores';

export default function EditarCoordenadorScreen({
  navegar,
  coordenador,
  atualizarCoordenador,
}) {
  const [nome, setNome] = useState(coordenador?.nome || '');
  const [email, setEmail] = useState(coordenador?.email || '');

  function salvar() {
    if (!nome.trim() || !email.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    const atualizado = {
      ...coordenador,
      nome: nome.trim(),
      email: email.trim(),
    };

    if (atualizarCoordenador) {
      atualizarCoordenador(atualizado);
    }

    Alert.alert('Sucesso', 'Coordenador atualizado!');

    navegar('consultaCoordenadores');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Editar Coordenador</Text>

        <Text style={styles.label}>Nome</Text>

        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>E-mail</Text>

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.botao} onPress={salvar}>
          <Text style={styles.textoBotao}>SALVAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoCancelar}
          onPress={() => navegar('consultaCoordenadores')}
        >
          <Text style={styles.textoCancelar}>CANCELAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.fundo,
    padding: 20,
  },

  card: {
    backgroundColor: CORES.branco,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: CORES.borda,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: CORES.verde,
    textAlign: 'center',
    marginBottom: 25,
  },

  label: {
    fontWeight: 'bold',
    color: CORES.verde,
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 10,
    padding: 14,
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
  },

  botaoCancelar: {
    borderWidth: 1,
    borderColor: CORES.verde,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  textoCancelar: {
    color: CORES.verde,
    fontWeight: 'bold',
  },
});