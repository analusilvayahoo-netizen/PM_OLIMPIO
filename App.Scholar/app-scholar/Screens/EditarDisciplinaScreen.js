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

export default function EditarDisciplinaScreen({
  navegar,
  disciplina,
  cursos = [],
  atualizarDisciplina,
}) {
  const [nome, setNome] = useState(disciplina?.nome || '');
  const [cursoSelecionado, setCursoSelecionado] = useState(
    cursos.find((c) => c.nome === disciplina?.curso) || null
  );

  function salvar() {
    if (!nome.trim() || !cursoSelecionado) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    const atualizada = {
      ...disciplina,
      nome: nome.trim(),
      curso: cursoSelecionado.nome,
      cursoId: cursoSelecionado.id,
    };

    if (atualizarDisciplina) {
      atualizarDisciplina(atualizada);
    }

    Alert.alert('Sucesso', 'Disciplina atualizada!');
    navegar('consultaDisciplinas');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Editar Disciplina</Text>

        <Text style={styles.label}>Nome</Text>

        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Nome da disciplina"
        />

        <Text style={styles.label}>Curso</Text>

        {cursos.map((curso) => (
          <TouchableOpacity
            key={curso.id}
            style={[
              styles.opcao,
              cursoSelecionado?.id === curso.id && styles.opcaoSelecionada,
            ]}
            onPress={() => setCursoSelecionado(curso)}
          >
            <Text
              style={[
                styles.textoOpcao,
                cursoSelecionado?.id === curso.id &&
                  styles.textoOpcaoSelecionada,
              ]}
            >
              {curso.nome}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.botao} onPress={salvar}>
          <Text style={styles.textoBotao}>SALVAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoCancelar}
          onPress={() => navegar('consultaDisciplinas')}
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
  },

  input: {
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
  },

  opcao: {
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 10,
    padding: 14,
    marginBottom: 8,
  },

  opcaoSelecionada: {
    backgroundColor: CORES.verde,
  },

  textoOpcao: {
    color: CORES.verde,
    fontWeight: '600',
  },

  textoOpcaoSelecionada: {
    color: CORES.branco,
  },

  botao: {
    backgroundColor: CORES.verde,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
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