import * as db from '../repository/vagasRepository.js'
import consultarTodasVagas from "../repository/vagasRepository.js";
import { Router } from "express";


const endpoints = Router();



endpoints.post('/vagas', async (req, resp) => {
    try {
        let dados = req.body;
        let id = await db.consultarVagas(dados);

        resp.status(200).send({id: id});


    } 
    
    catch (err) {
    
        resp.status(400).send({
            erro: err.message
        })
    }
});

endpoints.get('/vagas', async (req, resp) => {
    try {
      
       let dados = await consultarTodasVagas();

        resp.status(200).send(dados);
    } 
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});
   

endpoints.put('/vagas/:id', async (req, resp) => {
    try {
      const dados = req.body;
      const id = req.params.id;
  
 
      const linhasAfetadas = await db.atualizarVaga(dados, id);

      resp.status(200).send({ linhasAfetadas });
    } 
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
  });


endpoints.delete('/vagas/del/:id', async (req, resp) => {
    try {
  
        let id = req.params.id;

         await db.deletarVaga (id);

        resp.status(200).send();


    } 
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});



export default endpoints;