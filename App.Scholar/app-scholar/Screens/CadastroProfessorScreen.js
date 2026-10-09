import React, { useState } from 'react';

import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';

import { CORES } from './Cores';

export default function CadastroProfessorScreen({
  navegar,
  professores,
  setProfessores,
}) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [disciplina, setDisciplina] = useState('');

  function cadastrar() {

    if (
      !nome.trim() ||
      !email.trim() ||
      !disciplina.trim()
    ) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );

      return;
    }

    const novoProfessor = {
      id: Date.now(),
      nome: nome.trim(),
      email: email.trim(),
      disciplina: disciplina.trim(),
    };

    setProfessores([
      ...professores,
      novoProfessor,
    ]);

    Alert.alert(
      'Sucesso',
      'Professor cadastrado com sucesso!'
    );

    setNome('');
    setEmail('');
    setDisciplina('');
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <Text style={styles.titulo}>
        Cadastro de Professor
      </Text>

      <Text style={styles.label}>
        Nome
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>
        E-mail
      </Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>
        Disciplina
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Disciplina"
        placeholderTextColor="#999"
        value={disciplina}
        onChangeText={setDisciplina}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrar}
      >
        <Text style={styles.textoBotao}>
          CADASTRAR
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={() =>
          navegar('consultaProfessores')
        }
      >
        <Text style={styles.textoSecundario}>
          CONSULTAR PROFESSORES
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() =>
          navegar('dashboard')
        }
      >
        <Text style={styles.textoVoltar}>
          ← VOLTAR
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: CORES.fundo,
    padding: 25,
    paddingBottom: 40,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: CORES.verde,
    marginBottom: 25,
  },

  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: CORES.verde,
    marginBottom: 8,
  },

  input: {
    backgroundColor: CORES.branco,
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 10,
    padding: 14,
    marginBottom: 18,
    fontSize: 16,
  },

  botao: {
    backgroundColor: CORES.verde,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBotao: {
    color: CORES.branco,
    fontWeight: 'bold',
  },

  botaoSecundario: {
    borderWidth: 1,
    borderColor: CORES.verde,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },

  textoSecundario: {
    color: CORES.verde,
    fontWeight: 'bold',
  },

  botaoVoltar: {
    borderWidth: 1,
    borderColor: CORES.verde,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },

  textoVoltar: {
    color: CORES.verde,
    fontWeight: 'bold',
  },

});