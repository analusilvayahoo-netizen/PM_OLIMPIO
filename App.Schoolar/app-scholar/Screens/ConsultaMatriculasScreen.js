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

export default function ConsultaMatriculasScreen({
  navegar,
  matriculas = [],
  excluirMatricula,
}) {
  const [busca, setBusca] = useState('');

  const filtradas = matriculas.filter((matricula) =>
    matricula.aluno?.toLowerCase().includes(busca.toLowerCase())
  );

  function excluir(id) {
    Alert.alert(
      'Excluir matrícula',
      'Deseja realmente excluir esta matrícula?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => excluirMatricula && excluirMatricula(id),
        },
      ]
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Consulta de Matrículas</Text>

        <TextInput
          style={styles.input}
          placeholder="Pesquisar pelo aluno"
          value={busca}
          onChangeText={setBusca}
        />

        {filtradas.map((matricula) => (
          <View key={matricula.id} style={styles.item}>
            <Text style={styles.nome}>{matricula.aluno}</Text>
            <Text style={styles.info}>Curso: {matricula.curso}</Text>
            <Text style={styles.info}>Ano: {matricula.ano}</Text>

            <View style={styles.acoes}>
              <TouchableOpacity
                style={styles.botaoEditar}
                onPress={() => navegar('editarMatricula', matricula)}
              >
                <Text style={styles.textoEditar}>EDITAR</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botaoExcluir}
                onPress={() => excluir(matricula.id)}
              >
                <Text style={styles.textoExcluir}>EXCLUIR</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {filtradas.length === 0 && (
          <Text style={styles.vazio}>Nenhuma matrícula encontrada.</Text>
        )}

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
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
  },

  item: {
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
  },

  nome: {
    fontSize: 17,
    fontWeight: 'bold',
    color: CORES.verde,
    marginBottom: 8,
  },

  info: {
    color: CORES.cinza,
    marginBottom: 4,
  },

  acoes: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  },

  botaoEditar: {
    flex: 1,
    backgroundColor: CORES.verde,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  textoEditar: {
    color: CORES.branco,
    fontWeight: 'bold',
  },

  botaoExcluir: {
    flex: 1,
    borderWidth: 1,
    borderColor: CORES.vermelho,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  textoExcluir: {
    color: CORES.vermelho,
    fontWeight: 'bold',
  },

  vazio: {
    textAlign: 'center',
    color: CORES.cinza,
    marginVertical: 20,
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