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

export default function EditarBoletimScreen({
  navegar,
  boletim,
  alunos = [],
  atualizarBoletim,
}) {
  const [alunoSelecionado, setAlunoSelecionado] = useState(
    alunos.find((a) => a.nome === boletim?.aluno) || null
  );

  const [media, setMedia] = useState(boletim?.media || '');
  const [situacao, setSituacao] = useState(
    boletim?.situacao || ''
  );

  function salvar() {
    if (!alunoSelecionado || !media.trim() || !situacao) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    const atualizado = {
      ...boletim,
      aluno: alunoSelecionado.nome,
      alunoId: alunoSelecionado.id,
      media,
      situacao,
    };

    if (atualizarBoletim) {
      atualizarBoletim(atualizado);
    }

    Alert.alert('Sucesso', 'Boletim atualizado!');

    navegar('consultaBoletins');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Editar Boletim</Text>

        <Text style={styles.label}>Aluno</Text>

        {alunos.map((aluno) => (
          <TouchableOpacity
            key={aluno.id}
            style={[
              styles.opcao,
              alunoSelecionado?.id === aluno.id &&
                styles.selecionado,
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

        <Text style={styles.label}>Média</Text>

        <TextInput
          style={styles.input}
          value={media}
          onChangeText={setMedia}
          keyboardType="decimal-pad"
        />

        <Text style={styles.label}>Situação</Text>

        {['Aprovado', 'Reprovado', 'Recuperação'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.opcao,
              situacao === item && styles.selecionado,
            ]}
            onPress={() => setSituacao(item)}
          >
            <Text
              style={[
                styles.textoOpcao,
                situacao === item && styles.textoSelecionado,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.botao} onPress={salvar}>
          <Text style={styles.textoBotao}>SALVAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoCancelar}
          onPress={() => navegar('consultaBoletins')}
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