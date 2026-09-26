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

export default function EditarProfessorScreen({
  navegar,
  professor,
  professores,
  setProfessores,
}) {

  const [nome, setNome] = useState(
    professor?.nome || ''
  );

  const [email, setEmail] = useState(
    professor?.email || ''
  );

  const [disciplina, setDisciplina] = useState(
    professor?.disciplina || ''
  );

  function salvar() {

    if (
      !nome.trim() ||
      !email.trim() ||
      !disciplina.trim()
    ) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );

      return;
    }

    const atualizados =
      professores.map(item => {

        if (item.id === professor.id) {
          return {
            ...item,
            nome: nome.trim(),
            email: email.trim(),
            disciplina: disciplina.trim(),
          };
        }

        return item;
      });

    setProfessores(atualizados);

    Alert.alert(
      'Sucesso',
      'Professor atualizado com sucesso!'
    );

    navegar('consultaProfessores');
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <Text style={styles.titulo}>
        Editar Professor
      </Text>

      <Text style={styles.label}>
        Nome
      </Text>

      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome completo"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>
        E-mail
      </Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        placeholderTextColor="#999"
        keyboardType="email-address"
      />

      <Text style={styles.label}>
        Disciplina
      </Text>

      <TextInput
        style={styles.input}
        value={disciplina}
        onChangeText={setDisciplina}
        placeholder="Disciplina"
        placeholderTextColor="#999"
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={salvar}
      >
        <Text style={styles.botaoTexto}>
          SALVAR ALTERAÇÕES
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoCancelar}
        onPress={() =>
          navegar('consultaProfessores')
        }
      >
        <Text style={styles.textoCancelar}>
          CANCELAR
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