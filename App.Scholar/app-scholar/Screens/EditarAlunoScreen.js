import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { CORES } from './Cores';
import { API_URL } from '../api';

export default function EditarAlunoScreen({
  navegar,
  aluno,
  alunos,
  setAlunos,
}) {
  const [nome, setNome] = useState(aluno?.nome || '');
  const [email, setEmail] = useState(aluno?.email || '');
  const [curso, setCurso] = useState(aluno?.curso || '');
  const [turma, setTurma] = useState(aluno?.turma || '');
  const [carregando, setCarregando] = useState(false);

  async function salvar() {
    if (!nome.trim() || !email.trim() || !curso.trim() || !turma.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    setCarregando(true);

    const dadosAtualizados = {
      id: aluno.id,
      nome: nome.trim(),
      email: email.trim(),
      curso: curso.trim(),
      turma: turma.trim(),
    };

    try {
      const response = await fetch(`${API_URL}/atualizar_aluno.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(dadosAtualizados),
      });

      const res = await response.json();

      if (res.success) {
        setAlunos(
          alunos.map((item) => (item.id === aluno.id ? dadosAtualizados : item))
        );
        Alert.alert('Sucesso', 'Aluno atualizado com sucesso!');
        navegar('consultaAlunos');
      } else {
        Alert.alert('Erro', res.message || 'Erro ao atualizar.');
      }
    } catch (error) {
      Alert.alert('Erro de Conexão', 'Não foi possível salvar no banco.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.titulo}>Editar Aluno</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome completo"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        placeholderTextColor="#999"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Curso</Text>
      <TextInput
        style={styles.input}
        value={curso}
        onChangeText={setCurso}
        placeholder="Curso"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Turma</Text>
      <TextInput
        style={styles.input}
        value={turma}
        onChangeText={setTurma}
        placeholder="Turma"
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.botao} onPress={salvar} disabled={carregando}>
        {carregando ? (
          <ActivityIndicator color={CORES.branco} />
        ) : (
          <Text style={styles.botaoTexto}>SALVAR ALTERAÇÕES</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoCancelar}
        onPress={() => navegar('consultaAlunos')}
      >
        <Text style={styles.textoCancelar}>CANCELAR</Text>
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
  botaoTexto: {
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