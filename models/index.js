class TypeAnimal{
    static count = 1;
    constructor(name){
        this.id = TypeAnimal.count++;
        this.Name = name;
    }
}

exports.TypeAnimal = TypeAnimal;

class Service{
    static count = 1;
    constructor(name,price){
        this.id = Service.count++;
        this.Name = name;
        this.Price=price;
    }
}
exports.Service = Service;

class Record{
    static count = 1;
    constructor(date, time, nameOwner, numberOwner,nameAnimal,idTypeAnimal,idService){
        let dateNow = new Date().toISOString().split('T')[0];

        this.Date = date || dateNow;
        this.Time = time || '' ;
        this.NameOwner = nameOwner || '';
        this.NumberOwner = numberOwner || '';
        this.NameAnimal = nameAnimal || '';
        this.IDTypeAnimal = idTypeAnimal || null;
        this.IDService = idService || null;

        this.id = Record.count++;
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