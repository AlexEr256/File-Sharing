const byte = 1; 
const KB = 1024 * byte;
const MB = 1024 * KB;
const GB = 1024 * MB;

function betterNumber(size){
    if(size > byte && size < KB){
        return Number(size/byte).toFixed(1) + 'byte'
    }
    if(size > KB && size < MB){
        return Number(size/KB).toFixed(1) + 'KB'
    }
    if(size > MB && size < GB){
        return Number(size/MB).toFixed(1) + 'MB'
    }
    if(size === byte){
        return '1 byte'
    }
    if(size === KB){
        return '1 KB'
    }
    if(size === MB){
        return '1 MB'
    }
}

function size(files){
    let size = 0;
    Array.from(files).forEach((file) =>{
        size += file.size
    })
    return betterNumber(size);
}

module.exports = size;