const mongoose = require('mongoose')
const products = require('../Modules/products');

const isObjectId = (input)=>{
	return mongoose.Types.ObjectId.isValid(input);
};

const productsControllers = {

    create : async(req, res) =>{
		try {
			const productsFrontEnd = { 
                categoria : req.body.categoria,
                nome: req.body.nome,
                descrição: req.body.descrição,
                preço: req.body.preço,
                estoque : req.body.estoque,
                favorito: req.body.favorito,
			};

			//Adicionando dados à estrutura definida no Schema (const {Service : ServiceModel} = require('../Modules/Services');)
			const data = await products.create(productsFrontEnd);
            
			//Adicionando dados à função serviceController que sua vez levará os dados até o banco na pasta index.js
			res.status(201).json({data, msg : 'Serviço criado com sucesso!'});

		} catch (error) {
			console.log(error);
		}
    },
	getAll : async(req, res)=>{
		try {
			const data = await products.find();

			res.json({data, msg : 'Consulta realizada com sucesso!'});

		} catch (error) {
			console.log(error);
		}
	},
	getById: async(req, res)=>{
		try {
			const id = req.params.id;            

			if(isObjectId(id)){
				const productById = await products.findById(id);
				if(!productById){
					res.status(404).json({msg: `O id ${id} não existe no banco`});
					return;
				}
				res.json({productById, msg: `id ${id} consultado com sucesso`});
				return;
			}
			res.json({msg : `${id} não é um id válido`});
                        

		} catch (error) {
			console.log(error);
		}
	},
	deleteById : async(req, res)=>{

		try{ 
			const id = req.params.id;

			if(isObjectId(id)){
				const productById = await products.findById(id);
				if(!productById){
					res.status(404).json({msg: `O id ${id} não existe no banco`});
					return;
				}
				const productDelete = await products.findByIdAndDelete(id);
				res.json({productDelete, msg: `deletado`});
				return;
			}
			res.json({msg : `${id} não é um id válido`});           
           
            
		} catch (error) {
			console.log(error);
		}
	},
	updateService : async(req, res)=>{
		try {
			const id = req.params.id;
			if(isObjectId(id)){
				const productsFrontEnd = { 
					categoria : req.body.categoria,
					nome: req.body.nome,
					descrição: req.body.descrição,
					preço: req.body.preço,
					estoque : req.body.estoque,
					favorito: req.body.favorito,
				};
                
				const updatedProduct = await products.findByIdAndUpdate(id,productsFrontEnd );

				res.json({updatedProduct, msg : 'Serviço atualizado com sucesso!'});

			}
			res.json({msg : `${id} não é um id válido`});

		} catch (error) {
			console.log(error);
		}
        
	}
};

module.exports = productsControllers;