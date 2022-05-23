//Modificar
const {  response } = require('express');
const { Usuario } = require('../models');

const obtenerUsuarios= async (req,res= response)=>{
    const { limite= 10  , desde=0   } =  req.query;
    const query= { estado:true   };
    const [ total, productos ] =  await Promise.all(
        [
            Producto.countDocuments(),
            Producto.find(query)
            .skip(desde)
            .limit(limite)
        ]
    )
    res.json({
        total,
        productos
    })
}
const obtenerUsuario = async (req,res= response)=>{
    const {id} =req.params
    const producto =  await Producto.findById(id);
    res.json(producto);
}
const crearUsuario = async (req,res)=>{
    const {estado, ...body } =req.body;
    const existeProducto= await Producto.findOne({nombre:body.nombre});
    if (existeProducto)
    {
        return res.status(400).json({
            message:`El producto con ese nombre ${body.nombre} ya se encuentra registrado`
        })
    }
    const producto = new Producto(body);
    const productoNuevo= await producto.save();
    return res.status(201).json(productoNuevo);

}
//////////////////////////////////////////////////////////////////




module.exports={
    crearUsuario
}