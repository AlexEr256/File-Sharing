const File = require('../models/File');
const Post = require('../models/Post');
const mongoose = require('mongoose')
const path = require('path');
const newArchive = require('../zip/zip')
const size = require('../helper/FileSize')
const beautify = require('../helper/beautify')

const transporter = require('../nodemailer/nodemailer');

class FileController{

    create(req, res){
        let files = req.files;
        let newfiles = [];
        let ids = [];
        let zipPath;
        for(let file of files){
            newfiles.push(file);
            let id = new mongoose.mongo.ObjectID();
            ids.push(id);
         } 
        newfiles.forEach((file, index) => {
            File.create({   _id: ids[index],
                            originalname: file.originalname,
                            encoding:file.encoding,
                            mimetype:file.mimetype,
                            destination:file.destination,
                            filename:file.filename,
                            size: file.size}).then(function(){
            console.log('File Inserted')
            }).catch(function(error){ 
             console.log('Error', error)
             });
            })    

        if(newfiles.length){

            let pathes = [];
                zipPath =`${+Date.now() }.zip`;

            files.forEach((file) => {
                pathes.push(path.join(__dirname, `../storage/${file.filename}`))
            });
            newArchive(zipPath, pathes);

        }
        let post = new Post({
            files: ids,
            emailsTo: req.body.emailsTo,
            emailFrom: req.body.emailFrom,
            message: req.body.message,
            zipPath: zipPath
         });
        

        Post.create(post).then(function(){
            if(!req.body.emailsTo && !req.body.emailsFrom){
                res.json({
                    post: post.shortId,
                    newfiles
                }) 
            }else{
                console.log(size(newfiles), newfiles);
                let message = {
                    to: req.body.emailsTo,
                    subject:'Transfer Files',
                    template:'index',
                    context:{
                        emailsTo:post.emailsTo,
                        filesLength: beautify(post.files),
                        ref:`http://localhost:3001/download/${post.shortId}/`,
                        message: post.message,
                        size: size(newfiles)
                    },
                }
                transporter.sendMail(message, function(err, info){
                    if(err){
                        res.json({
                            message:'Error',
                            err
                        })
                    }
                    res.json({
                        message:'Check email',
                        info,
                        newfiles
                    })
                })
                   
               
            }
               
            })
          
    }


    search(req, res){
        let post = req.params.post;
        //console.log(post)
        if(!post){
            return;
        }
        Post.findOne({shortId: post}).populate('files').exec((err, found) =>{
                if(err){
                    res.json({
                        message:'Error',
                        err
                    })
                }
                let files = found.files;
                let zipPath = found.zipPath

                if(!files.length) {
                    res.status(404).json({
                        message:'No Files'
                    })
                } 
                if(files.length){
                        res.send({
                            message:'Your files',
                            files,
                            zipPath
                        })
                }
            });    
       
        }
        download(req, res){
            let id = req.params.id;
            console.log(id)
            if(id.match(/.zip/)){
                let directory = path.join(__dirname, '../', `storage/zip/${id}`)
                res.download(directory)
            }else{
                File.findOne({_id:id}).exec((err, found) =>{
                    //console.log(found)
                    if(err){
                        res.json({
                            err
                        })
                    }else{                    
                        let directory = path.join(__dirname, '../', `storage/${found.filename}`)
                        res.download(directory)
                    }
                })
            }
            
        }

}

module.exports = FileController;