import { BaseModel } from 'projects/ensino-commons/src/lib/models/base.model';
import { Organizacao } from './organizacao.model';
import { EnderecoModel } from './endereco.model';

export interface Pessoa extends BaseModel {
  cpf: string;
  nomeCompleto: string;
  nomeGuerra: string;
  dataNascimento: string;
  dataPraca: string;
  dataUltimaPromocao: string;
  sexo: string;
  nrOrdem: string;
  siglaQuadro: string;
  nomeQuadro: string;
  siglaPosto: string;
  nomePosto: string;
  siglaEspecialidade: string;
  nomeEspecialidade: string;
  nrIdentidadeCivil: string;
  nrIdentidadeMilitar: string;
  nrPassaporte: string;
  siglaSituacao: string;
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
