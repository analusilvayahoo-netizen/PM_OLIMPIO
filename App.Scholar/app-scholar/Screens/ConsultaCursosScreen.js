import React, { useState } from 'react';

import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
  StyleSheet,
  Alert,
} from 'react-native';

import { CORES } from './Cores';

export default function ConsultaCursosScreen({
  navegar,
  cursos,
  setCursos,
}) {
  const [pesquisa, setPesquisa] = useState('');

  const lista = cursos.filter((item) =>
    `${item.nome} ${item.descricao}`
      .toLowerCase()
      .includes(pesquisa.toLowerCase())
  );

  function excluir(id) {
    Alert.alert(
      'Excluir curso',
      'Deseja realmente excluir este curso?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () =>
            setCursos(
              cursos.filter(
                (item) => item.id !== id
              )
            ),
        },
      ]
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.titulo}>
        Consulta de Cursos
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Pesquisar curso..."
        placeholderTextColor="#999"
        value={pesquisa}
        onChangeText={setPesquisa}
      />

      <TouchableOpacity
        style={styles.cadastrar}
        onPress={() =>
          navegar('cadastroCurso')
        }
      >
        <Text style={styles.cadastrarTexto}>
          + CADASTRAR CURSO
        </Text>
      </TouchableOpacity>

      {lista.length === 0 && (
        <Text style={styles.vazio}>
          Nenhum curso encontrado.
        </Text>
      )}

      {lista.map((item) => (
        <View
          key={item.id}
          style={styles.card}
        >
          <Text style={styles.nome}>
            {item.nome}
          </Text>

          <Text style={styles.descricao}>
            {item.descricao}
          </Text>

          <TouchableOpacity
            style={styles.editar}
            onPress={() =>
              navegar(
                'editarCurso',
                item
              )
            }
          >
            <Text style={styles.acaoTexto}>
              EDITAR
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.excluir}
            onPress={() =>
              excluir(item.id)
            }
          >
            <Text style={styles.acaoTexto}>
              EXCLUIR
            </Text>
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() =>
          navegar('dashboard')
        }
      >
        <Text style={styles.textoVoltar}>
          ← VOLTAR
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
    marginBottom: 8,
  },

  descricao: {
    color: CORES.cinza,
    lineHeight: 21,
    marginBottom: 5,
  },

  editar: {
    backgroundColor: CORES.verde,
    padding: 11,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },

  excluir: {
    backgroundColor: CORES.vermelho,
    padding: 11,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
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