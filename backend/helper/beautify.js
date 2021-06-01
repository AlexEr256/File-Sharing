function beautify(files){
    if(files.length == 1){
        return `${files.length} item`
    }else{
        return `${files.length} items`
    }
}

module.exports = beautify;