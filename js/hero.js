
main();

 export function main (){
   
    
};

class hero{
    constructor(name, age, type, attack){
        this.name = name;
        this.age = age;
        this.type = type;
        this.attack = attack;

    };

        write(){
        console.log(`${this.type} atacou usando ${this.attack}`);
        console.log(`${this.name} o ${this.type} de ${this.age} anos atacou usando ${this.attack}`);
    };
};


let attackHero = new hero("Hercules", 29 , "guerreiro", "espada");
let attackHero1 = new hero("Relry", 273, "mago", 'magia');

attackHero.write();
attackHero1.write();

