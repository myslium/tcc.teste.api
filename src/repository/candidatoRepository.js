import con from './connection.js'

export async function consultarCandidato(candidato) {

    let comando = `INSERT INTO candidato (nome_candidato, cargo, cpf) values(?, ?, ?)`;

    let [resultado] = await con.query(comando, [
        candidato.nome_candidato,
        candidato.cargo,
        candidato.cpf,
    ]);

    let into = resultado.insertId;

    return into;
}


export async function atializarcandidato(candidato, id ) {
    let comando = `UPDATE candidato SET 
        nome_candidato = ?, 
        cargo = ?, 
        cpf = ?, 
    WHERE id_candidato = ?`;

    let [resultado] = await con.query(comando, [
        vaga.nome_empresa,
        vaga.contato_empresa,
        vaga.cnpj,
        vaga.cargo,
        vaga.tipo_contrato,
        vaga.localizacao,
        vaga.modelo_trabalho,
        vaga.salario,
        vaga.beneficios,
        vaga.requisicoes,
        vaga.descricao,
        vaga.datacriacao,
        id
    ]);

    return resultado.affectedRows; 
}


export async function deletarVaga(id) {
    let comando = `DELETE FROM vagas WHERE id = ?`;

    let [resultado] = await con.query(comando, [id]);

    return resultado.affectedRows; }




export default async function consultarTodasVagas() {
    let comando = `SELECT * FROM vagas`;

    let [resultado] = await con.query(comando);
    
    return resultado; 
}