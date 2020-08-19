const fs = require('fs');
const csvParser = require('csv-parser');
const stream = fs.createReadStream("houses.csv");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

console.log("O arquivo começou a ser processado...")
let conteudo=[]
stream.pipe(csvParser()).on("data",(data)=>{
    //console.log("Processando...")
    conteudo.push({
        id: conteudo.length+1,
        city: data['city'],
        area: Number(data['area']),
        rooms: Number(data['rooms']),
        bathroom: Number(data['bathroom']),
        'parking spaces': Number(data['parking spaces']),
        floor: Number(data['floor'].replace("-","0")),
        animal: Boolean(data['animal']),
        furniture: Boolean(data['furniture']),
        hoa: Number(data['hoa']),
        'rent amount': Number(data['rent amount']*100),
        'property tax': Number(data['property tax']*100),
        'fire insurance': Number(data['fire insurance']*100),
        total: Number(data['total']*100)
        //city,area,rooms,bathroom,parking spaces,floor
        //,animal,furniture,hoa,rent amount,property tax,fire insurance,total

    })
})

let arquivo='imoveis_saida.csv'
stream.on("end",()=>{
    const csvWriter = createCsvWriter({
        path: arquivo,
        header: [
            {id: 'id',title:'id'},
            {id: 'city',title:'city'},
            {id: 'area',title:'area'},
            {id:'rooms',title:'rooms'},
            {id: 'bathroom',title:'bathroom'},
            {id: 'parking spaces',title:'parking_spaces'},
            {id: 'floor',title:'floor'},
            {id: 'animal',title:'animal'},
            {id: 'furniture',title:'furniture'},
            {id: 'hoa',title:'hoa'},
            {id: 'rent amount',title:'rent'},
            {id: 'property tax',title:'tax'},
            {id: 'fire insurance',title:'fire_insurance'},
            {id: 'total',title:'total'}
             //city,area,rooms,bathroom,parking spaces,floor
        //,animal,furniture,hoa,rent amount,property tax,fire insurance,total

            ]
    });
    csvWriter.writeRecords(conteudo);
    console.log(`O arquivo terminou de ser processado e o arquivo ${arquivo} foi criado`)
});
    

