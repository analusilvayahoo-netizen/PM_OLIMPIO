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

export default function CadastroMatriculaScreen({
  navegar,
  alunos = [],
  cursos = [],
  adicionarMatricula,
}) {
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);
  const [cursoSelecionado, setCursoSelecionado] = useState(null);
  const [ano, setAno] = useState('2026');

  function salvar() {
    if (!alunoSelecionado || !cursoSelecionado || !ano.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    const novaMatricula = {
      id: Date.now(),
      aluno: alunoSelecionado.nome,
      alunoId: alunoSelecionado.id,
      curso: cursoSelecionado.nome,
      cursoId: cursoSelecionado.id,
      ano,
    };

    if (adicionarMatricula) {
      adicionarMatricula(novaMatricula);
    }

    Alert.alert('Sucesso', 'Matrícula cadastrada!');
    setAlunoSelecionado(null);
    setCursoSelecionado(null);
    setAno('2026');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Cadastro de Matrícula</Text>

        <Text style={styles.label}>Aluno</Text>

        {alunos.map((aluno) => (
          <TouchableOpacity
            key={aluno.id}
            style={[
              styles.opcao,
              alunoSelecionado?.id === aluno.id && styles.selecionado,
            ]}
            onPress={() => setAlunoSelecionado(aluno)}
          >
            <Text
              style={[
                styles.textoOpcao,
                alunoSelecionado?.id === aluno.id &&
                  styles.textoSelecionado,
              ]}
            >
              {aluno.nome}
            </Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.label}>Curso</Text>

        {cursos.map((curso) => (
          <TouchableOpacity
            key={curso.id}
            style={[
              styles.opcao,
              cursoSelecionado?.id === curso.id && styles.selecionado,
            ]}
            onPress={() => setCursoSelecionado(curso)}
          >
            <Text
              style={[
                styles.textoOpcao,
                cursoSelecionado?.id === curso.id &&
                  styles.textoSelecionado,
              ]}
            >
              {curso.nome}
            </Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.label}>Ano</Text>

        <TextInput
          style={styles.input}
          value={ano}
          onChangeText={setAno}
          keyboardType="numeric"
          placeholder="Ano da matrícula"
        />

        <TouchableOpacity style={styles.botao} onPress={salvar}>
          <Text style={styles.textoBotao}>CADASTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navegar('dashboard')}
        >
          <Text style={styles.textoVoltar}>← VOLTAR</Text>
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
    marginTop: 10,
    marginBottom: 8,
  },

  opcao: {
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 10,
    padding: 14,
    marginBottom: 8,
  },

  selecionado: {
    backgroundColor: CORES.verde,
  },

  textoOpcao: {
    color: CORES.verde,
    fontWeight: '600',
  },

  textoSelecionado: {
    color: CORES.branco,
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

  botaoVoltar: {
    borderWidth: 1,
    borderColor: CORES.verde,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  textoVoltar: {
    color: CORES.verde,
    fontWeight: 'bold',
  },
});