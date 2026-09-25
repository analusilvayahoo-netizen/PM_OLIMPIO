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

export default function CadastroResponsavelScreen({
  navegar,
  alunos = [],
  adicionarResponsavel,
}) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);

  function salvar() {
    if (!nome.trim() || !telefone.trim() || !alunoSelecionado) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    const novoResponsavel = {
      id: Date.now(),
      nome: nome.trim(),
      telefone: telefone.trim(),
      aluno: alunoSelecionado.nome,
      alunoId: alunoSelecionado.id,
    };

    if (adicionarResponsavel) {
      adicionarResponsavel(novoResponsavel);
    }

    Alert.alert('Sucesso', 'Responsável cadastrado!');

    setNome('');
    setTelefone('');
    setAlunoSelecionado(null);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Cadastro de Responsável</Text>

        <Text style={styles.label}>Nome</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Telefone</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o telefone"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />

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
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 10,
    padding: 14,
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