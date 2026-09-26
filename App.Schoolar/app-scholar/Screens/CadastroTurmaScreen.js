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

export default function CadastroTurmaScreen({
  navegar,
  turmas,
  setTurmas,
}) {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [ano, setAno] = useState('');

  function cadastrar() {
    if (!nome.trim() || !curso.trim() || !ano.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    const novaTurma = {
      id: Date.now(),
      nome: nome.trim(),
      curso: curso.trim(),
      ano: ano.trim(),
    };

    setTurmas([...turmas, novaTurma]);

    Alert.alert('Sucesso', 'Turma cadastrada com sucesso!');

    setNome('');
    setCurso('');
    setAno('');
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.titulo}>Cadastro de Turma</Text>

      <Text style={styles.label}>Nome da turma</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome da turma"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Curso</Text>

      <TextInput
        style={styles.input}
        placeholder="Curso"
        placeholderTextColor="#999"
        value={curso}
        onChangeText={setCurso}
      />

      <Text style={styles.label}>Ano</Text>

      <TextInput
        style={styles.input}
        placeholder="Ano"
        placeholderTextColor="#999"
        value={ano}
        onChangeText={setAno}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.botao} onPress={cadastrar}>
        <Text style={styles.textoBotao}>CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={() => navegar('consultaTurmas')}
      >
        <Text style={styles.textoSecundario}>
          CONSULTAR TURMAS
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navegar('dashboard')}
      >
        <Text style={styles.textoVoltar}>← VOLTAR</Text>
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