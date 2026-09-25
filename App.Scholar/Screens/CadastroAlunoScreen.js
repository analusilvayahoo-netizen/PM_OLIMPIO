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

export default function CadastroAlunoScreen({
  navegar,
  alunos,
  setAlunos,
}) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [curso, setCurso] = useState('');
  const [turma, setTurma] = useState('');

  function cadastrar() {

    if (!nome.trim() ||
        !email.trim() ||
        !curso.trim() ||
        !turma.trim()) {

      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );

      return;
    }

    const novoAluno = {
      id: Date.now(),
      nome: nome.trim(),
      email: email.trim(),
      curso: curso.trim(),
      turma: turma.trim(),
    };

    setAlunos([
      ...alunos,
      novoAluno,
    ]);

    Alert.alert(
      'Sucesso',
      'Aluno cadastrado com sucesso!'
    );

    setNome('');
    setEmail('');
    setCurso('');
    setTurma('');
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <Text style={styles.titulo}>
        Cadastro de Aluno
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
        Curso
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Curso"
        placeholderTextColor="#999"
        value={curso}
        onChangeText={setCurso}
      />

      <Text style={styles.label}>
        Turma
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Turma"
        placeholderTextColor="#999"
        value={turma}
        onChangeText={setTurma}
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
          navegar('consultaAlunos')
        }
      >
        <Text style={styles.textoSecundario}>
          CONSULTAR ALUNOS
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
    color: CORES.verde,
  },

  botao: {
    backgroundColor: CORES.verde,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
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