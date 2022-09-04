async function getRandomArbitrary(){
        return Math.round(Math.random() * (1000 - 1) + 1);
}

async function objectGenerate(value){
    const array = []
    for (let index = 0; index <= value; index++) {
        array[index] = await getRandomArbitrary() 
    }
    array.sort()

    let object = []
    let objectAux = {}
    let aux = ""
    let contador = 0;
    for (let index = 0; index < array.length; index++) {
        if(index == 0){
            contador++
        }
        if(index >= 1){
            if(array[index-1] == array[index]){
                contador++
            }
            else{
                aux = `${Number(array[index-1])}`
                objectAux[aux] = contador
                object.push(objectAux)
                objectAux = {}
                contador = 1
            }
        }
    }
    return object

}

process.on("message", async msg => {
    if(msg){
        const object1 = await objectGenerate(msg)
        process.send(object1)
    }
})

process.send("ok")