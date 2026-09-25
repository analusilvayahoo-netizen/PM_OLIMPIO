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

export default function EditarTurmaScreen({
  turma,
  turmas,
  setTurmas,
  navegar,
}) {
  const [nome, setNome] = useState(turma?.nome || '');
  const [curso, setCurso] = useState(turma?.curso || '');
  const [ano, setAno] = useState(turma?.ano || '');

  function salvar() {
    if (!nome.trim() || !curso.trim() || !ano.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    setTurmas(
      turmas.map((item) =>
        item.id === turma.id
          ? {
              ...item,
              nome: nome.trim(),
              curso: curso.trim(),
              ano: ano.trim(),
            }
          : item
      )
    );

    Alert.alert(
      'Sucesso',
      'Turma atualizada com sucesso!'
    );

    navegar('consultaTurmas');
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.titulo}>Editar Turma</Text>

      <Text style={styles.label}>Nome da turma</Text>

      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome da turma"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Curso</Text>

      <TextInput
        style={styles.input}
        value={curso}
        onChangeText={setCurso}
        placeholder="Curso"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Ano</Text>

      <TextInput
        style={styles.input}
        value={ano}
        onChangeText={setAno}
        placeholder="Ano"
        placeholderTextColor="#999"
        keyboardType="numeric"
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
        onPress={() => navegar('consultaTurmas')}
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