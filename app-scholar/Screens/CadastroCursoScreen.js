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

export default function CadastroCursoScreen({
  navegar,
  cursos,
  setCursos,
}) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  function cadastrar() {
    if (!nome.trim() || !descricao.trim()) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );
      return;
    }

    const novoCurso = {
      id: Date.now(),
      nome: nome.trim(),
      descricao: descricao.trim(),
    };

    setCursos([...cursos, novoCurso]);

    Alert.alert(
      'Sucesso',
      'Curso cadastrado com sucesso!'
    );

    setNome('');
    setDescricao('');
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.titulo}>
        Cadastro de Curso
      </Text>

      <Text style={styles.label}>
        Nome do curso
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do curso"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>
        Descrição
      </Text>

      <TextInput
        style={[styles.input, styles.area]}
        placeholder="Descrição do curso"
        placeholderTextColor="#999"
        value={descricao}
        onChangeText={setDescricao}
        multiline
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
          navegar('consultaCursos')
        }
      >
        <Text style={styles.textoSecundario}>
          CONSULTAR CURSOS
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

  area: {
    height: 120,
    textAlignVertical: 'top',
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