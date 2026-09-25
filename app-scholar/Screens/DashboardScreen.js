import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { CORES } from './Cores';

export default function DashboardScreen({
  navegar,
  sair,
}) {

  const menus = [
    ['ALUNOS', 'consultaAlunos'],
    ['PROFESSORES', 'consultaProfessores'],
    ['TURMAS', 'consultaTurmas'],
    ['CURSOS', 'consultaCursos'],
    ['DISCIPLINAS', 'consultaDisciplinas'],
    ['MATRÍCULAS', 'consultaMatriculas'],
    ['RESPONSÁVEIS', 'consultaResponsaveis'],
    ['AVALIAÇÕES', 'consultaAvaliacoes'],
    ['COORDENADORES', 'consultaCoordenadores'],
    ['BOLETINS', 'consultaBoletins'],
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
    >

      {/* CABEÇALHO */}
      <View style={styles.header}>

        <Text style={styles.titulo}>
          App Scholar
        </Text>

        <Text style={styles.subtitulo}>
          Sistema de Gestão Escolar
        </Text>

      </View>


      {/* TÍTULO */}
      <View style={styles.areaTitulo}>

        <Text style={styles.menuTitulo}>
          Menu Principal
        </Text>

        <Text style={styles.descricao}>
          Selecione uma área para continuar
        </Text>

      </View>


      {/* MENUS */}
      <View style={styles.lista}>

        {menus.map(([nome, tela]) => (

          <TouchableOpacity
            key={tela}
            style={styles.botao}
            onPress={() => navegar(tela)}
            activeOpacity={0.7}
          >

            <View style={styles.indicador} />

            <Text style={styles.botaoTexto}>
              {nome}
            </Text>

            <Text style={styles.seta}>
              ›
            </Text>

          </TouchableOpacity>

        ))}

      </View>


      {/* BOTÃO VOLTAR */}
      <TouchableOpacity
        style={styles.botaoSair}
        onPress={sair}
        activeOpacity={0.7}
      >

        <Text style={styles.textoSair}>
          ← VOLTAR PARA HOME
        </Text>

      </TouchableOpacity>

    </ScrollView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: CORES.fundo,
  },

  conteudo: {
    paddingBottom: 30,
  },


  // ================================
  // CABEÇALHO
  // ================================

  header: {
    backgroundColor: CORES.verde,
    paddingHorizontal: 25,
    paddingTop: 50,
    paddingBottom: 30,
  },

  titulo: {
    color: CORES.branco,
    fontSize: 30,
    fontWeight: 'bold',
  },

  subtitulo: {
    color: CORES.branco,
    fontSize: 15,
    marginTop: 7,
    opacity: 0.9,
  },


  // ================================
  // TÍTULO
  // ================================

  areaTitulo: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 15,
  },

  menuTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: CORES.verde,
  },

  descricao: {
    fontSize: 14,
    color: CORES.cinza,
    marginTop: 5,
  },


  // ================================
  // LISTA
  // ================================

  lista: {
    paddingHorizontal: 20,
  },

  botao: {
    backgroundColor: CORES.branco,
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 12,
    marginBottom: 12,
    paddingVertical: 18,
    paddingHorizontal: 15,

    flexDirection: 'row',
    alignItems: 'center',

    elevation: 2,
  },

  indicador: {
    width: 5,
    height: 35,
    backgroundColor: CORES.verde,
    borderRadius: 5,
    marginRight: 15,
  },

  botaoTexto: {
    flex: 1,
    color: CORES.verde,
    fontSize: 16,
    fontWeight: 'bold',
  },

  seta: {
    color: CORES.verde,
    fontSize: 30,
    fontWeight: '300',
  },


  // ================================
  // VOLTAR
  // ================================

  botaoSair: {
    borderWidth: 1,
    borderColor: CORES.verde,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
  },

  textoSair: {
    color: CORES.verde,
    fontWeight: 'bold',
    fontSize: 14,
  },

});