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

export default function CadastroDisciplinaScreen({ navegar, cursos = [], adicionarDisciplina }) {
  const [nome, setNome] = useState('');
  const [cursoSelecionado, setCursoSelecionado] = useState(null);

  function salvar() {
    if (!nome.trim() || !cursoSelecionado) {
      Alert.alert('Atenção', 'Preencha o nome e selecione um curso.');
      return;
    }

    const novaDisciplina = {
      id: Date.now(),
      nome: nome.trim(),
      curso: cursoSelecionado.nome,
      cursoId: cursoSelecionado.id,
    };

    if (adicionarDisciplina) {
      adicionarDisciplina(novaDisciplina);
    }

    Alert.alert('Sucesso', 'Disciplina cadastrada!');
    setNome('');
    setCursoSelecionado(null);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Cadastro de Disciplina</Text>

        <Text style={styles.label}>Nome da disciplina</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o nome da disciplina"
          value={nome}
          onChangeText={setNome}
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
    marginBottom: 25,
    textAlign: 'center',
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
    backgroundColor: CORES.branco,
    marginBottom: 10,
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
    borderColor: CORES.verde,
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