import { TiposRepo } from "../repositories/tipos.repo";

// Service responsável pelas regras de negócio de Tipos
export const TiposService = {
  // Lista todos os tipos
  list() {
    return TiposRepo.list();
  },

  // Lista tipos junto com seus subtipos
  listWithSubtipos() {
    return TiposRepo.listWithSubtipos();
  },

  // Cria um novo tipo com validação do nome
  async create(nome: string) {
    const final = (nome ?? "").trim(); // garante que não é nulo e tira espaços

    if (!final)
      throw Object.assign(new Error("O campo 'nome' é obrigatório"), {
        status: 400, // erro de requisição inválida
      });

    return TiposRepo.create(final);
  },
};
