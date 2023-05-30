const cashModel = require('../model/cashModel');
const moment = require('moment');

class CashController{

    async create(req, res){
        
        try{
            const {value, description, move_date} = req.body;

            const newOperation = new cashModel({
               value,
               description,
               move_date: moment(move_date, 'DD/MM/YYYY')
            });
    
            const result = await newOperation.save();

            return res.status(200).json({
                statusCode: 200,
                success: true,
                result
            })
        }catch(error){
            return res.status(500).json({
                statusCode: 500,
                success: false,
                error
            })
        }
    }

    async readAll(req, res){
        try{
            const result = await cashModel.find();

            return res.status(200).json({
                statusCode: 200,
                success: true,
                result
            })
        }catch(error){
            return res.status(500).json({
                statusCode: 500,
                success: false,
                error
            })
        }
    }

    async readById(req, res){
        try{

            const {id} = req.query;
            
            const result = await cashModel.find({_id: id});

            if (result.length == 0){
                return res.status(404).json({
                    statusCode: 404,
                    success:true,
                    message: 'Not found',
                    result
                })
            }

            return res.status(200).json({
                statusCode: 200,
                success: true,
                result
            })

        }catch(error){
            return res.status(500).json({
                statusCode: 500,
                success: false,
                error
            })
        }
    }

    async update(req, res){
        try{
            const {_id, value, description, move_date} = req.body;
            
            const result = await cashModel.updateOne({
                _id
            }, {value, description, move_date});

            return res.status(200).json({
                statusCode: 200,
                success: true,
                result
            })
        }catch(error){
            return res.status(500).json({
                statusCode: 500,
                success: false,
                error
            })
        }
    }

    async delete(req, res){
        try{
            const {_id} = req.body;

            const result = await cashModel.findByIdAndDelete({_id});

            return res.status(200).json({
                statusCode: 200,
                success: 200,
                result
            })
        }catch(error){
            return res.status(500).json({
                statusCode: 500,
                success: false,
                error
            })
        }   
    }
}

module.exports = CashController;