class TypeAnimal{
    
    constructor(id,name){
        this.id = id;
        this.Name = name;
    }
}

exports.TypeAnimal = TypeAnimal;

class Service{
   
    constructor(id,name,price){
        this.id = id;
        this.Name = name;
        this.Price=price;
    }
}
exports.Service = Service;

class Record{
    
    constructor(id,date, time, nameOwner, numberOwner,nameAnimal,idTypeAnimal,idService){
        let dateNow = new Date().toISOString().split('T')[0];

        this.Date = date || dateNow;
        this.Time = time || '' ;
        this.NameOwner = nameOwner || '';
        this.NumberOwner = numberOwner || '';
        this.NameAnimal = nameAnimal || '';
        this.IDTypeAnimal = idTypeAnimal || null;
        this.IDService = idService || null;

        this.id = id;
    }
}
exports.Record = Record;

exports.MainViewModel = class {
    constructor(title, records, services, typeAnimals, editItem){
        this.title = title || '';
        this.records = records || [];
        this.services = services || [];
        this.typeAnimals = typeAnimals || [];
        this.editItem=editItem || null;
    }
}