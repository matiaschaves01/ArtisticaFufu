const fs = require('fs');
const path = require('path');
const {validationResult} = require ('express-validator');
const User = require('../services/user');
const bcrypt = require('bcrypt')
const db = require('../database/models');
const { log } = require('console');

const userController = { 
    login: (req, res) => {
        res.render('./user/login',{
            css: './css/login.css',
            title: 'Login'
        });
    },
    loginProcess:async(req,res) =>{
    
        try {
         const userFound = await db.User.findOne({
             where: {
                 email:req.body.emailRegistro
                }
            });
            if(!userFound){
                return res.render('user/login',{
                    css: './css/login.css',
                    title: 'Registro',
                    error: {
                        emailRegistro: {
                            msg: 'El email no esta registrado!'
                        }
                    },
                    oldBody: req.body
                })
            }

            let validPassword = bcrypt.compareSync(req.body.passwordRegistro, userFound.password);  
            
            if(!validPassword){
                return res.render('user/login',{
                    css: './css/login.css',
                    title: 'Registro',
                    error: {
                        passwordRegistro: {
                            msg: 'password invalida'
                        }
                    },
                    oldBody: req.body
                })
            }
            
            if (userFound && validPassword) {
                    delete userFound.password
                    if (userFound.user_category_id == 2) {
                        req.session.admin = userFound.dataValues
                        console.log(req.session.admin, 'este es admin');
                        // return res.redirect('/profile')
                    }
                    else {
                        req.session.userLogged = userFound.dataValues
                    }

                    if (req.body.rememberme) {
                        res.cookie('userCookie', userFound, { maxAge: 1000*60*5})
                    }

                   return res.redirect('/profile')
                }
     } catch (error) {
        res.json(error)
     }
    },
    register: async(req, res) => {
        
        let category = await db.UserCategory.findAll() 
        
        res.render('./user/register',{
           css: './css/register.css',
           title: 'Registro',
           category
        });
    },
    registerProcess:async (req,res) => {
       
        let error = validationResult (req)
        
        if (!error.isEmpty()) {
            return res.render('./user/register',{
                css: './css/register.css',
                title: 'Registro' ,
                error: error.mapped(),
                oldBody: req.body
            });
        }
        try {
            let  body = {
                name: req.body.nombre,
                lastname: req.body.apellido,
                email: req.body.emailRegistro,
                username:req.body.nombreUsuario,
                phone: req.body.numeroTelefono,
                user_category_id: req.body.user_category_id ? user_category_id: 1,
                password: bcrypt.hashSync(req.body.passwordRegistro, 10),
                image: req.file? req.file.filename:'/images/usuarioDefault.png'
           }
           delete body.checkPassword

           const invalidemail = await db.User.findOne({
            where: {
                email:req.body.emailRegistro
            }
           });
           if(invalidemail){
            return res.render('user/register',{
                css: './css/register.css',
                title: 'Registro',
                error: {
                    emailRegistro: {
                        msg: 'El email ya existente'
                    }
                },
                oldBody: req.body
            })
        }
        await db.User.create(body)
        res.redirect('/')

       } catch (error) {
        res.send(error)
       }
       
       
        // User.createUser(body)
        // res.redirect('/login')
    },
    admin: (req, res) => {
        res.render('admin',{
            css: './css/admin.css',
            title: 'administrador'
        });
    },
    profile: (req, res) => {
        console.log(req.session.userLogged || req.session.admin);
        res.render('user/profile', {
            title: 'Profile',
            css: '/css/profile.css',
            user: req.session.userLogged || req.session.admin
        });
    },
    edit:  async(req, res) =>{
        try {

            // console.log(res.session.userLogged);
            // const user = await db.User.findByPK(req.params.id)
            res.render('user/editProfile.ejs', {
                title: 'Profile',
                css:'/css/profile.css',
                user: req.session.userLogged || req.session.admin
                
            })

     } catch (error) {
        console.log(error);
        res.json(error) 
    }
},
    //// GET
   
    //PUT
    editUpdate: async (req, res) => {
        try {
            let image = req.session.userLogged || req.session.admin
        
            //  let id = req.session.userLogged.id || req.session.admin.id
            await db.User.update({
                name: req.body.name,
                email: req.body.email, 
                lastname: req.body.lastname,
                username: req.body.username,
                phone: req.body.phone,
                image: req.file? req.file.filename : image.image
            },{
                where: {
                    id: image.id
                }
            })
            const user = await db.User.findByPk(req.params.id)

            if (req.session.userLogged) {
                req.session.userLogged = user
            }
            if (req.session.admin) {
                req.session.admin = user
            }
            res.redirect('/');
        } catch (error) {
            console.log(error);
            res.json(error)    
        }
    },
    
    
    logout : (req, res) => {
        req.session.destroy()
        res.clearCookie('userCookie')
        res.redirect('/')

    },
}


module.exports = userController
// update: async (req, res) => {
    
//     try {
//         const producto = await db.Product.findByPk(req.params.id) 
        
//         const product = await db.Product.update(
//             {
//                 name: req.body.name,
//                 price: parseInt(req.body.price),
//                 description: req.body.description,
//                 image: req.file ? req.file.filename : producto.image,
//                 product_categories_id: req.body.product_categories_id ? req.body.product_categories_id : producto.product_categories_id
//             },
//             {
//                 where:{
//                     id: req.params.id
//                 }
//             }
//         )
//         res.redirect('/products/' + producto.id)
//     } catch (error) {
//        
//         res.json(error)
//     }
// },