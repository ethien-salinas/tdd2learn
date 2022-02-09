const hw = 'hello world'

function helloworld(name) {
    if (name !== undefined){
        return hw + ' ' + name
    }else{
        return hw
    }
}

module.exports = helloworld;