import React, { useState, useEffect } from 'react';
import { Image, Alert } from 'react-native';
import { API_URL } from './api';

// TELAS PRINCIPAIS
import HomeScreen from './Screens/HomeScreen';
import DashboardScreen from './Screens/DashboardScreen';
import SobreScreen from './Screens/SobreScreen';

// ALUNOS
import CadastroAlunoScreen from './Screens/CadastroAlunoScreen';
import ConsultaAlunosScreen from './Screens/ConsultaAlunosScreen';
import EditarAlunoScreen from './Screens/EditarAlunoScreen';

// PROFESSORES
import CadastroProfessorScreen from './Screens/CadastroProfessorScreen';
import ConsultaProfessoresScreen from './Screens/ConsultaProfessoresScreen';
import EditarProfessorScreen from './Screens/EditarProfessorScreen';

// TURMAS
import CadastroTurmaScreen from './Screens/CadastroTurmaScreen';
import ConsultaTurmasScreen from './Screens/ConsultaTurmasScreen';
import EditarTurmaScreen from './Screens/EditarTurmaScreen';

// CURSOS
import CadastroCursoScreen from './Screens/CadastroCursoScreen';
import ConsultaCursosScreen from './Screens/ConsultaCursosScreen';
import EditarCursoScreen from './Screens/EditarCursoScreen';

// DISCIPLINAS
import CadastroDisciplinaScreen from './Screens/CadastroDisciplinaScreen';
import ConsultaDisciplinasScreen from './Screens/ConsultaDisciplinasScreen';
import EditarDisciplinaScreen from './Screens/EditarDisciplinaScreen';

// MATRÍCULAS
import CadastroMatriculaScreen from './Screens/CadastroMatriculaScreen';
import ConsultaMatriculasScreen from './Screens/ConsultaMatriculasScreen';
import EditarMatriculaScreen from './Screens/EditarMatriculaScreen';

// RESPONSÁVEIS
import CadastroResponsavelScreen from './Screens/CadastroResponsavelScreen';
import ConsultaResponsaveisScreen from './Screens/ConsultaResponsaveisScreen';
import EditarResponsavelScreen from './Screens/EditarResponsavelScreen';

// AVALIAÇÕES
import CadastroAvaliacaoScreen from './Screens/CadastroAvaliacaoScreen';
import ConsultaAvaliacoesScreen from './Screens/ConsultaAvaliacoesScreen';
import EditarAvaliacaoScreen from './Screens/EditarAvaliacaoScreen';

// COORDENADORES
import CadastroCoordenadorScreen from './Screens/CadastroCoordenadorScreen';
import ConsultaCoordenadoresScreen from './Screens/ConsultaCoordenadoresScreen';
import EditarCoordenadorScreen from './Screens/EditarCoordenadorScreen';

// BOLETINS
import CadastroBoletimScreen from './Screens/CadastroBoletimScreen';
import ConsultaBoletinsScreen from './Screens/ConsultaBoletinsScreen';
import EditarBoletimScreen from './Screens/EditarBoletimScreen';

import logo from './logo.png';

export default function App() {

  const [tela, setTela] = useState('home');
  const [dadosSelecionados, setDadosSelecionados] = useState(null);

  const [alunos, setAlunos] = useState([
    {
      id: 1,
      nome: 'Ana Luiza',
      email: 'ana@email.com',
      curso: 'Desenvolvimento de Sistemas',
      turma: '3º A',
    },
  ]);

  // CARREGAR ALUNOS DO BANCO PHP AO ABRIR O APP
  useEffect(() => {
    carregarAlunosDoBanco();
  }, []);

  async function carregarAlunosDoBanco() {
    try {
      const response = await fetch(`${API_URL}/consultar_aluno.php`);
      const dados = await response.json();

      if (Array.isArray(dados)) {
        setAlunos(dados);
      } else if (dados.success && Array.isArray(dados.alunos)) {
        setAlunos(dados.alunos);
      }
    } catch (error) {
      console.log("Erro ao carregar alunos do servidor:", error.message);
    }
  }

  const [professores, setProfessores] = useState([
    {
      id: 1,
      nome: 'Carlos Eduardo',
      email: 'carlos@email.com',
      disciplina: 'Programação',
    },
    {
      id: 2,
      nome: 'Mariana Silva',
      email: 'mariana@email.com',
      disciplina: 'Banco de Dados',
    },
  ]);

  const [turmas, setTurmas] = useState([
    {
      id: 1,
      nome: '3º A',
      curso: 'Desenvolvimento de Sistemas',
      ano: '2026',
    },
  ]);

  const [cursos, setCursos] = useState([
    {
      id: 1,
      nome: 'Desenvolvimento de Sistemas',
      descricao: 'Curso Técnico em Desenvolvimento de Sistemas',
    },
    {
      id: 2,
      nome: 'Recursos Humanos',
      descricao: 'Curso Técnico em Recursos Humanos',
    },
    {
      id: 3,
      nome: 'Comércio Exterior',
      descricao: 'Curso Técnico em Comércio Exterior',
    },
    {
      id: 4,
      nome: 'Farmácia',
      descricao: 'Curso Técnico em Farmácia',
    },
    {
      id: 5,
      nome: 'Agronegócio',
      descricao: 'Curso Técnico em Agronegócio',
    },
  ]);

  const [disciplinas, setDisciplinas] = useState([

    // DESENVOLVIMENTO DE SISTEMAS
    {
      id: 1,
      nome: 'Algoritmos e Lógica de Programação',
      curso: 'Desenvolvimento de Sistemas',
    },
    {
      id: 2,
      nome: 'Modelagem e Banco de Dados',
      curso: 'Desenvolvimento de Sistemas',
    },
    {
      id: 3,
      nome: 'Engenharia de Software e Requisitos',
      curso: 'Desenvolvimento de Sistemas',
    },
    {
      id: 4,
      nome: 'Programação Orientada a Objetos',
      curso: 'Desenvolvimento de Sistemas',
    },
    {
      id: 5,
      nome: 'Desenvolvimento Web Front-End',
      curso: 'Desenvolvimento de Sistemas',
    },
    {
      id: 6,
      nome: 'Estrutura de Dados',
      curso: 'Desenvolvimento de Sistemas',
    },
    {
      id: 7,
      nome: 'Desenvolvimento Web Back-End',
      curso: 'Desenvolvimento de Sistemas',
    },
    {
      id: 8,
      nome: 'Arquitetura de Computadores e SO',
      curso: 'Desenvolvimento de Sistemas',
    },
    {
      id: 9,
      nome: 'Desenvolvimento de Aplicações Mobile',
      curso: 'Desenvolvimento de Sistemas',
    },
    {
      id: 10,
      nome: 'Segurança da Informação e DevOps',
      curso: 'Desenvolvimento de Sistemas',
    },

    // RECURSOS HUMANOS
    {
      id: 11,
      nome: 'Rotinas de Departamento Pessoal',
      curso: 'Recursos Humanos',
    },
    {
      id: 12,
      nome: 'Recrutamento e Seleção de Pessoas',
      curso: 'Recursos Humanos',
    },
    {
      id: 13,
      nome: 'Cargos, Salários e Remuneração',
      curso: 'Recursos Humanos',
    },
    {
      id: 14,
      nome: 'Treinamento e Desenvolvimento de RH',
      curso: 'Recursos Humanos',
    },
    {
      id: 15,
      nome: 'Legislação Trabalhista e Previdenciária',
      curso: 'Recursos Humanos',
    },

    // COMÉRCIO EXTERIOR
    {
      id: 16,
      nome: 'Sistemática de Importação e Exportação',
      curso: 'Comércio Exterior',
    },
    {
      id: 17,
      nome: 'Logística e Transportes Internacionais',
      curso: 'Comércio Exterior',
    },
    {
      id: 18,
      nome: 'Legislação e Direito Aduaneiro',
      curso: 'Comércio Exterior',
    },

  ]);

  const [matriculas, setMatriculas] = useState([]);

  const [responsaveis, setResponsaveis] = useState([
    {
      id: 1,
      nome: 'Maria Oliveira',
      aluno: 'Ana Luiza',
      telefone: '(12) 99999-9999',
    },
  ]);

  const [avaliacoes, setAvaliacoes] = useState([
    {
      id: 1,
      aluno: 'Ana Luiza',
      disciplina: 'Algoritmos e Lógica de Programação',
      nota: '8,5',
    },
  ]);

  const [coordenadores, setCoordenadores] = useState([
    {
      id: 1,
      nome: 'Coordenador Geral',
      email: 'coordenacao@davinci.com',
    },
  ]);

  const [boletins, setBoletins] = useState([
    {
      id: 1,
      aluno: 'Ana Luiza',
      media: '8,5',
      situacao: 'Aprovada',
    },
  ]);

  function navegar(nomeTela, dados = null) {
    setDadosSelecionados(dados);
    setTela(nomeTela);
  }

  function voltarHome() {
    setDadosSelecionados(null);
    setTela('home');
  }

  function adicionarAluno(novoAluno) {
    setAlunos((lista) => [
      ...lista,
      {
        ...novoAluno,
        id: novoAluno.id || Date.now(),
      },
    ]);
  }

  function atualizarAluno(alunoAtualizado) {
    setAlunos((lista) =>
      lista.map((item) =>
        item.id === alunoAtualizado.id
          ? alunoAtualizado
          : item
      )
    );
  }

  function excluirAluno(id) {
    setAlunos((lista) =>
      lista.filter((item) => item.id !== id)
    );
  }

  function adicionarProfessor(novoProfessor) {
    setProfessores((lista) => [
      ...lista,
      {
        ...novoProfessor,
        id: novoProfessor.id || Date.now(),
      },
    ]);
  }

  function atualizarProfessor(professorAtualizado) {
    setProfessores((lista) =>
      lista.map((item) =>
        item.id === professorAtualizado.id
          ? professorAtualizado
          : item
      )
    );
  }

  function excluirProfessor(id) {
    setProfessores((lista) =>
      lista.filter((item) => item.id !== id)
    );
  }

  function adicionarTurma(novaTurma) {
    setTurmas((lista) => [
      ...lista,
      {
        ...novaTurma,
        id: novaTurma.id || Date.now(),
      },
    ]);
  }

  function atualizarTurma(turmaAtualizada) {
    setTurmas((lista) =>
      lista.map((item) =>
        item.id === turmaAtualizada.id
          ? turmaAtualizada
          : item
      )
    );
  }

  function excluirTurma(id) {
    setTurmas((lista) =>
      lista.filter((item) => item.id !== id)
    );
  }

  function adicionarCurso(novoCurso) {
    setCursos((lista) => [
      ...lista,
      {
        ...novoCurso,
        id: novoCurso.id || Date.now(),
      },
    ]);
  }

  function atualizarCurso(cursoAtualizado) {
    setCursos((lista) =>
      lista.map((item) =>
        item.id === cursoAtualizado.id
          ? cursoAtualizado
          : item
      )
    );
  }

  function excluirCurso(id) {
    setCursos((lista) =>
      lista.filter((item) => item.id !== id)
    );
  }

  function adicionarDisciplina(novaDisciplina) {
    setDisciplinas((lista) => [
      ...lista,
      {
        ...novaDisciplina,
        id: novaDisciplina.id || Date.now(),
      },
    ]);
  }

  function atualizarDisciplina(disciplinaAtualizada) {
    setDisciplinas((lista) =>
      lista.map((item) =>
        item.id === disciplinaAtualizada.id
          ? disciplinaAtualizada
          : item
      )
    );
  }

  function excluirDisciplina(id) {
    setDisciplinas((lista) =>
      lista.filter((item) => item.id !== id)
    );
  }

  function adicionarMatricula(novaMatricula) {
    setMatriculas((lista) => [
      ...lista,
      {
        ...novaMatricula,
        id: novaMatricula.id || Date.now(),
      },
    ]);
  }

  function atualizarMatricula(matriculaAtualizada) {
    setMatriculas((lista) =>
      lista.map((item) =>
        item.id === matriculaAtualizada.id
          ? matriculaAtualizada
          : item
      )
    );
  }

  function excluirMatricula(id) {
    setMatriculas((lista) =>
      lista.filter((item) => item.id !== id)
    );
  }

  function adicionarResponsavel(novoResponsavel) {
    setResponsaveis((lista) => [
      ...lista,
      {
        ...novoResponsavel,
        id: novoResponsavel.id || Date.now(),
      },
    ]);
  }

  function atualizarResponsavel(responsavelAtualizado) {
    setResponsaveis((lista) =>
      lista.map((item) =>
        item.id === responsavelAtualizado.id
          ? responsavelAtualizado
          : item
      )
    );
  }

  function excluirResponsavel(id) {
    setResponsaveis((lista) =>
      lista.filter((item) => item.id !== id)
    );
  }

  function adicionarAvaliacao(novaAvaliacao) {
    setAvaliacoes((lista) => [
      ...lista,
      {
        ...novaAvaliacao,
        id: novaAvaliacao.id || Date.now(),
      },
    ]);
  }

  function atualizarAvaliacao(avaliacaoAtualizada) {
    setAvaliacoes((lista) =>
      lista.map((item) =>
        item.id === avaliacaoAtualizada.id
          ? avaliacaoAtualizada
          : item
      )
    );
  }

  function excluirAvaliacao(id) {
    setAvaliacoes((lista) =>
      lista.filter((item) => item.id !== id)
    );
  }

  function adicionarCoordenador(novoCoordenador) {
    setCoordenadores((lista) => [
      ...lista,
      {
        ...novoCoordenador,
        id: novoCoordenador.id || Date.now(),
      },
    ]);
  }

  function atualizarCoordenador(coordenadorAtualizado) {
    setCoordenadores((lista) =>
      lista.map((item) =>
        item.id === coordenadorAtualizado.id
          ? coordenadorAtualizado
          : item
      )
    );
  }

  function excluirCoordenador(id) {
    setCoordenadores((lista) =>
      lista.filter((item) => item.id !== id)
    );
  }

  function adicionarBoletim(novoBoletim) {
    setBoletins((lista) => [
      ...lista,
      {
        ...novoBoletim,
        id: novoBoletim.id || Date.now(),
      },
    ]);
  }

  function atualizarBoletim(boletimAtualizado) {
    setBoletins((lista) =>
      lista.map((item) =>
        item.id === boletimAtualizado.id
          ? boletimAtualizado
          : item
      )
    );
  }

  function excluirBoletim(id) {
    setBoletins((lista) =>
      lista.filter((item) => item.id !== id)
    );
  }

  if (tela === 'home') {
    return (
      <HomeScreen
        navegar={navegar}
        logo={logo}
      />
    );
  }

  if (tela === 'sobre') {
    return (
      <SobreScreen
        navegar={navegar}
      />
    );
  }

  if (tela === 'dashboard') {
    return (
      <DashboardScreen
        navegar={navegar}
        sair={voltarHome}
      />
    );
  }

  if (tela === 'cadastroAluno') {
    return (
      <CadastroAlunoScreen
        alunos={alunos}
        setAlunos={setAlunos}
        adicionarAluno={adicionarAluno}
        cursos={cursos}
        turmas={turmas}
        navegar={navegar}
      />
    );
  }

  if (tela === 'consultaAlunos') {
    return (
      <ConsultaAlunosScreen
        alunos={alunos}
        setAlunos={setAlunos}
        excluirAluno={excluirAluno}
        navegar={navegar}
      />
    );
  }

  if (tela === 'editarAluno') {
    return (
      <EditarAlunoScreen
        aluno={dadosSelecionados}
        alunos={alunos}
        setAlunos={setAlunos}
        atualizarAluno={atualizarAluno}
        cursos={cursos}
        turmas={turmas}
        navegar={navegar}
      />
    );
  }

  if (tela === 'cadastroProfessor') {
    return (
      <CadastroProfessorScreen
        professores={professores}
        setProfessores={setProfessores}
        adicionarProfessor={adicionarProfessor}
        navegar={navegar}
      />
    );
  }

  if (tela === 'consultaProfessores') {
    return (
      <ConsultaProfessoresScreen
        professores={professores}
        setProfessores={setProfessores}
        excluirProfessor={excluirProfessor}
        navegar={navegar}
      />
    );
  }

  if (tela === 'editarProfessor') {
    return (
      <EditarProfessorScreen
        professor={dadosSelecionados}
        professores={professores}
        setProfessores={setProfessores}
        atualizarProfessor={atualizarProfessor}
        navegar={navegar}
      />
    );
  }

  if (tela === 'cadastroTurma') {
    return (
      <CadastroTurmaScreen
        turmas={turmas}
        setTurmas={setTurmas}
        adicionarTurma={adicionarTurma}
        cursos={cursos}
        navegar={navegar}
      />
    );
  }

  if (tela === 'consultaTurmas') {
    return (
      <ConsultaTurmasScreen
        turmas={turmas}
        setTurmas={setTurmas}
        excluirTurma={excluirTurma}
        navegar={navegar}
      />
    );
  }

  if (tela === 'editarTurma') {
    return (
      <EditarTurmaScreen
        turma={dadosSelecionados}
        turmas={turmas}
        setTurmas={setTurmas}
        atualizarTurma={atualizarTurma}
        cursos={cursos}
        navegar={navegar}
      />
    );
  }

  if (tela === 'cadastroCurso') {
    return (
      <CadastroCursoScreen
        cursos={cursos}
        setCursos={setCursos}
        adicionarCurso={adicionarCurso}
        navegar={navegar}
      />
    );
  }

  if (tela === 'consultaCursos') {
    return (
      <ConsultaCursosScreen
        cursos={cursos}
        setCursos={setCursos}
        excluirCurso={excluirCurso}
        navegar={navegar}
      />
    );
  }

  if (tela === 'editarCurso') {
    return (
      <EditarCursoScreen
        curso={dadosSelecionados}
        cursos={cursos}
        setCursos={setCursos}
        atualizarCurso={atualizarCurso}
        navegar={navegar}
      />
    );
  }

  if (tela === 'cadastroDisciplina') {
    return (
      <CadastroDisciplinaScreen
        disciplinas={disciplinas}
        setDisciplinas={setDisciplinas}
        cursos={cursos}
        adicionarDisciplina={adicionarDisciplina}
        navegar={navegar}
      />
    );
  }

  if (tela === 'consultaDisciplinas') {
    return (
      <ConsultaDisciplinasScreen
        disciplinas={disciplinas}
        setDisciplinas={setDisciplinas}
        excluirDisciplina={excluirDisciplina}
        navegar={navegar}
      />
    );
  }

  if (tela === 'editarDisciplina') {
    return (
      <EditarDisciplinaScreen
        disciplina={dadosSelecionados}
        disciplinas={disciplinas}
        setDisciplinas={setDisciplinas}
        cursos={cursos}
        atualizarDisciplina={atualizarDisciplina}
        navegar={navegar}
      />
    );
  }

  if (tela === 'cadastroMatricula') {
    return (
      <CadastroMatriculaScreen
        matriculas={matriculas}
        setMatriculas={setMatriculas}
        alunos={alunos}
        cursos={cursos}
        adicionarMatricula={adicionarMatricula}
        navegar={navegar}
      />
    );
  }

  if (tela === 'consultaMatriculas') {
    return (
      <ConsultaMatriculasScreen
        matriculas={matriculas}
        setMatriculas={setMatriculas}
        excluirMatricula={excluirMatricula}
        navegar={navegar}
      />
    );
  }

  if (tela === 'editarMatricula') {
    return (
      <EditarMatriculaScreen
        matricula={dadosSelecionados}
        matriculas={matriculas}
        setMatriculas={setMatriculas}
        alunos={alunos}
        cursos={cursos}
        atualizarMatricula={atualizarMatricula}
        navegar={navegar}
      />
    );
  }

  if (tela === 'cadastroResponsavel') {
    return (
      <CadastroResponsavelScreen
        responsaveis={responsaveis}
        setResponsaveis={setResponsaveis}
        alunos={alunos}
        adicionarResponsavel={adicionarResponsavel}
        navegar={navegar}
      />
    );
  }

  if (tela === 'consultaResponsaveis') {
    return (
      <ConsultaResponsaveisScreen
        responsaveis={responsaveis}
        setResponsaveis={setResponsaveis}
        excluirResponsavel={excluirResponsavel}
        navegar={navegar}
      />
    );
  }

  if (tela === 'editarResponsavel') {
    return (
      <EditarResponsavelScreen
        responsavel={dadosSelecionados}
        responsaveis={responsaveis}
        setResponsaveis={setResponsaveis}
        alunos={alunos}
        atualizarResponsavel={atualizarResponsavel}
        navegar={navegar}
      />
    );
  }

  if (tela === 'cadastroAvaliacao') {
    return (
      <CadastroAvaliacaoScreen
        avaliacoes={avaliacoes}
        setAvaliacoes={setAvaliacoes}
        alunos={alunos}
        disciplinas={disciplinas}
        adicionarAvaliacao={adicionarAvaliacao}
        navegar={navegar}
      />
    );
  }

  if (tela === 'consultaAvaliacoes') {
    return (
      <ConsultaAvaliacoesScreen
        avaliacoes={avaliacoes}
        setAvaliacoes={setAvaliacoes}
        excluirAvaliacao={excluirAvaliacao}
        navegar={navegar}
      />
    );
  }

  if (tela === 'editarAvaliacao') {
    return (
      <EditarAvaliacaoScreen
        avaliacao={dadosSelecionados}
        avaliacoes={avaliacoes}
        setAvaliacoes={setAvaliacoes}
        alunos={alunos}
        disciplinas={disciplinas}
        atualizarAvaliacao={atualizarAvaliacao}
        navegar={navegar}
      />
    );
  }

  if (tela === 'cadastroCoordenador') {
    return (
      <CadastroCoordenadorScreen
        coordenadores={coordenadores}
        setCoordenadores={setCoordenadores}
        adicionarCoordenador={adicionarCoordenador}
        navegar={navegar}
      />
    );
  }

  if (tela === 'consultaCoordenadores') {
    return (
      <ConsultaCoordenadoresScreen
        coordenadores={coordenadores}
        setCoordenadores={setCoordenadores}
        excluirCoordenador={excluirCoordenador}
        navegar={navegar}
      />
    );
  }

  if (tela === 'editarCoordenador') {
    return (
      <EditarCoordenadorScreen
        coordenador={dadosSelecionados}
        coordenadores={coordenadores}
        setCoordenadores={setCoordenadores}
        atualizarCoordenador={atualizarCoordenador}
        navegar={navegar}
      />
    );
  }

  if (tela === 'cadastroBoletim') {
    return (
      <CadastroBoletimScreen
        boletins={boletins}
        setBoletins={setBoletins}
        alunos={alunos}
        adicionarBoletim={adicionarBoletim}
        navegar={navegar}
      />
    );
  }

  if (tela === 'consultaBoletins') {
    return (
      <ConsultaBoletinsScreen
        boletins={boletins}
        setBoletins={setBoletins}
        excluirBoletim={excluirBoletim}
        navegar={navegar}
      />
    );
  }

  if (tela === 'editarBoletim') {
    return (
      <EditarBoletimScreen
        boletim={dadosSelecionados}
        boletins={boletins}
        setBoletins={setBoletins}
        alunos={alunos}
        atualizarBoletim={atualizarBoletim}
        navegar={navegar}
      />
    );
  }

  return (
    <HomeScreen
      navegar={navegar}
      logo={logo}
    />
  );
}