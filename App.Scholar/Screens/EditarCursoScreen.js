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

export default function EditarCursoScreen({
  curso,
  cursos,
  setCursos,
  navegar,
}) {
  const [nome, setNome] = useState(
    curso?.nome || ''
  );

  const [descricao, setDescricao] = useState(
    curso?.descricao || ''
  );

  function salvar() {
    if (
      !nome.trim() ||
      !descricao.trim()
    ) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );
      return;
    }

    setCursos(
      cursos.map((item) =>
        item.id === curso.id
          ? {
              ...item,
              nome: nome.trim(),
              descricao: descricao.trim(),
            }
          : item
      )
    );

    Alert.alert(
      'Sucesso',
      'Curso atualizado com sucesso!'
    );

    navegar('consultaCursos');
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.titulo}>
        Editar Curso
      </Text>

      <Text style={styles.label}>
        Nome do curso
      </Text>

      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome do curso"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>
        Descrição
      </Text>

      <TextInput
        style={[styles.input, styles.area]}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Descrição do curso"
        placeholderTextColor="#999"
        multiline
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={salvar}
      >
        <Text style={styles.textoBotao}>
          SALVAR ALTERAÇÕES
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoCancelar}
        onPress={() =>
          navegar('consultaCursos')
        }
      >
        <Text style={styles.textoCancelar}>
          CANCELAR
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

  botaoCancelar: {
    borderWidth: 1,
    borderColor: CORES.verde,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },

  textoCancelar: {
    color: CORES.verde,
    fontWeight: 'bold',
  },
});