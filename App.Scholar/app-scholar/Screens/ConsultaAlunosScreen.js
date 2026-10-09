import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { CORES } from './Cores';
import { API_URL } from '../api';

export default function ConsultaAlunosScreen({ navegar, alunos, setAlunos }) {
  const [pesquisa, setPesquisa] = useState('');
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    carregarAlunos();
  }, []);

  async function carregarAlunos() {
    setCarregando(true);
    try {
      const response = await fetch(`${API_URL}/buscar_alunos.php`);
      const res = await response.json();
      if (res.success) {
        setAlunos(res.alunos || []);
      }
    } catch (error) {
      Alert.alert('Erro de Conexão', 'Não foi possível carregar os alunos do banco.');
    } finally {
      setCarregando(false);
    }
  }

  const alunosFiltrados = alunos.filter((aluno) =>
    aluno.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  function excluir(id) {
    Alert.alert('Excluir aluno', 'Deseja realmente excluir este aluno?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: () => confirmarExclusao(id),
      },
    ]);
  }

  async function confirmarExclusao(id) {
    try {
      const response = await fetch(`${API_URL}/deletar_aluno.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      const res = await response.json();

      if (res.success) {
        setAlunos(alunos.filter((aluno) => aluno.id !== id));
        Alert.alert('Sucesso', 'Aluno excluído.');
      } else {
        Alert.alert('Erro', res.message || 'Falha ao excluir.');
      }
    } catch (error) {
      Alert.alert('Erro de Conexão', 'Não foi possível conectar ao PHP para excluir.');
    }
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.titulo}>Consulta de Alunos</Text>

      <TextInput
        style={styles.input}
        placeholder="Pesquisar aluno..."
        placeholderTextColor="#999"
        value={pesquisa}
        onChangeText={setPesquisa}
      />

      <TouchableOpacity
        style={styles.cadastrar}
        onPress={() => navegar('cadastroAluno')}
      >
        <Text style={styles.cadastrarTexto}>+ CADASTRAR ALUNO</Text>
      </TouchableOpacity>

      {carregando && <ActivityIndicator size="large" color={CORES.verde} />}

      {!carregando && alunosFiltrados.length === 0 && (
        <Text style={styles.vazio}>Nenhum aluno encontrado.</Text>
      )}

      {!carregando &&
        alunosFiltrados.map((aluno) => (
          <View key={aluno.id} style={styles.card}>
            <Text style={styles.nome}>{aluno.nome}</Text>
            <Text style={styles.informacao}>E-mail: {aluno.email}</Text>
            <Text style={styles.informacao}>Curso: {aluno.curso}</Text>
            <Text style={styles.informacao}>Turma: {aluno.turma}</Text>

            <View style={styles.acoes}>
              <TouchableOpacity
                style={styles.editar}
                onPress={() => navegar('editarAluno', aluno)}
              >
                <Text style={styles.acaoTexto}>EDITAR</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.excluir}
                onPress={() => excluir(aluno.id)}
              >
                <Text style={styles.acaoTexto}>EXCLUIR</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

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
    marginBottom: 20,
  },
  input: {
    backgroundColor: CORES.branco,
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    fontSize: 16,
  },
  cadastrar: {
    backgroundColor: CORES.verde,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  cadastrarTexto: {
    color: CORES.branco,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: CORES.branco,
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 12,
    padding: 18,
    marginBottom: 15,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: CORES.verde,
    marginBottom: 10,
  },
  informacao: {
    color: CORES.cinza,
    marginBottom: 4,
  },
  acoes: {
    flexDirection: 'row',
    marginTop: 15,
    gap: 10,
  },
  editar: {
    backgroundColor: CORES.verde,
    padding: 11,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  excluir: {
    backgroundColor: CORES.vermelho,
    padding: 11,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  acaoTexto: {
    color: CORES.branco,
    fontWeight: 'bold',
  },
  vazio: {
    textAlign: 'center',
    marginTop: 30,
    color: CORES.cinza,
  },
  botaoVoltar: {
    borderWidth: 1,
    borderColor: CORES.verde,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  textoVoltar: {
    color: CORES.verde,
    fontWeight: 'bold',
  },
});