// ACCOUNT 1 MADRE

class MotherAccount {
    nome: string;
    cognome: string;
    conto:number;
    constructor(_nome:string, _cognome:string){
        this.nome = _nome;
        this.cognome = _cognome;
        this.conto = 0;
    }

    oneDeposit():number{
        this.conto = this.conto + 200;
        let uscita = this.calcInterest(this.conto);
        return uscita;
    }

    oneWithDraw():number{
        let value = this.oneDeposit() - 120;
        let uscita = this.calcInterest(value);
        return uscita;
    }

    twoDeposit():number{
        return this.oneWithDraw() + Math.floor((Math.random()*100)+1);
    }

    twoWithDraw():number {
        return this.twoDeposit() - Math.floor((Math.random()*200)+1);
    }

    threeDeposit():number {
        return this.twoWithDraw() + Math.floor((Math.random()*100)+1);
    }

    threeWithDraw():number {
        return this.twoWithDraw() - Math.floor((Math.random()*100)+1);
    }

    private calcInterest(number:number) {
        return (number - (number/100)*10);
    }
}

let newAccount = new MotherAccount ('Maria', 'Rossi');

console.log(`👤Questo è il conto di ${newAccount.nome} ${newAccount.cognome}`);

console.log('MADRE Conto iniziale: ', newAccount.conto);

console.log('Conto dopo il primo deposito: ', newAccount.oneDeposit());
console.log('Conto dopo il primo prelievo: ', newAccount.oneWithDraw());
console.log('Conto dopo il secondo deposito: ', newAccount.twoDeposit());

let controllo = newAccount.twoWithDraw();

console.log('Conto dopo il secondo prelievo: ', controllo);

if(controllo <= 0){
    console.log('🚨 Il conto è in rosso, fai un deposito');
    console.log('Deposito urgente: ', newAccount.threeDeposit())
}else{
    console.log('💶 Disponi ancora di liquidità, puoi fare un altro prelievo');
    console.log('Nuovo prelievo: ', newAccount.threeWithDraw())
}


// ACCOUNT 2 FIGLIO

class SonAccount extends MotherAccount {
    conto!:number;
    constructor(_nome:string, _cognome:string){
    super(_nome,_cognome)
    this.conto = 200;
    }
}

let newAccount2 = new SonAccount ('Paolo', 'Bianchi')

console.log(`👤Questo è il conto di ${newAccount2.nome} ${newAccount2.cognome}`);

console.log('FIGLIO Conto iniziale: ', newAccount2.conto);

console.log('Conto Figlio dopo il primo deposito: ', newAccount2.oneDeposit());
console.log('Conto Figlio dopo il primo prelievo: ', newAccount2.oneWithDraw());
console.log('Conto Figlio dopo il secondo deposito: ', newAccount2.twoDeposit());


let controllo2 = newAccount2.twoWithDraw();

console.log('Conto Figlio dopo il secondo prelievo: ', controllo2);

if(controllo2 <= 0){
    console.log('🚨 Il conto Figlio è in rosso, fai un deposito');
    console.log('Deposito urgente: ', newAccount2.threeDeposit())
}else{
    console.log('💶 Disponi ancora di liquidità nel conto Figlio, puoi fare un altro prelievo');
    console.log('Nuovo prelievo: ', newAccount2.threeWithDraw())
}
