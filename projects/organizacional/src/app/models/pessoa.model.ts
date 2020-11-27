import { BaseModel } from 'projects/ensino-commons/src/lib/models/base.model';
import { Organizacao } from './organizacao.model';
import { EnderecoModel } from './endereco.model';

export interface Pessoa extends BaseModel {
  nrCpf: string;
  nome: string;
  nomeGuerra: string;
  dataNascimento: string;
  dataPraca: string;
  dataPromocaoAtual: string;
  sexo: string;
  nrOrdem: number;
  siglaQuadro: string;
  nomeQuadro: string;
  siglaPosto: string;
  nomePosto: string;
  siglaEspecialidade: string;
  nomeEspecialidade: string;
  identidadeCivil: string;
  identidadeMilitar: string;
  passaporte: string;
  situacao: string;
  raca: string;
  altura: string;
  peso: string;
  contatoPrincipal: string;
  contatoSecundario: string;
  email: string;
  estadoCivil: string;
  endereco: EnderecoModel;
  organizacao: Organizacao;
  organizacaoId?: number;
}
