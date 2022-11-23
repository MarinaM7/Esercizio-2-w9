// ACCOUNT 1 MADRE
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MotherAccount = /** @class */ (function () {
    function MotherAccount(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.conto = 0;
    }
    MotherAccount.prototype.oneDeposit = function () {
        this.conto = this.conto + 200;
        var uscita = this.calcInterest(this.conto);
        return uscita;
    };
    MotherAccount.prototype.oneWithDraw = function () {
        var value = this.oneDeposit() - 120;
        var uscita = this.calcInterest(value);
        return uscita;
    };
    MotherAccount.prototype.twoDeposit = function () {
        return this.oneWithDraw() + Math.floor((Math.random() * 100) + 1);
    };
    MotherAccount.prototype.twoWithDraw = function () {
        return this.twoDeposit() - Math.floor((Math.random() * 200) + 1);
    };
    MotherAccount.prototype.threeDeposit = function () {
        return this.twoWithDraw() + Math.floor((Math.random() * 100) + 1);
    };
    MotherAccount.prototype.threeWithDraw = function () {
        return this.twoWithDraw() - Math.floor((Math.random() * 100) + 1);
    };
    MotherAccount.prototype.calcInterest = function (number) {
        return (number - (number / 100) * 10);
    };
    return MotherAccount;
}());
var newAccount = new MotherAccount('Maria', 'Rossi');
console.log("\uD83D\uDC64Questo \u00E8 il conto di ".concat(newAccount.nome, " ").concat(newAccount.cognome));
console.log('MADRE Conto iniziale: ', newAccount.conto);
console.log('Conto dopo il primo deposito: ', newAccount.oneDeposit());
console.log('Conto dopo il primo prelievo: ', newAccount.oneWithDraw());
console.log('Conto dopo il secondo deposito: ', newAccount.twoDeposit());
var controllo = newAccount.twoWithDraw();
console.log('Conto dopo il secondo prelievo: ', controllo);
if (controllo <= 0) {
    console.log('🚨 Il conto è in rosso, fai un deposito');
    console.log('Deposito urgente: ', newAccount.threeDeposit());
}
else {
    console.log('💶 Disponi ancora di liquidità, puoi fare un altro prelievo');
    console.log('Nuovo prelievo: ', newAccount.threeWithDraw());
}
// ACCOUNT 2 FIGLIO
var SonAccount = /** @class */ (function (_super) {
    __extends(SonAccount, _super);
    function SonAccount(_nome, _cognome) {
        var _this = _super.call(this, _nome, _cognome) || this;
        _this.conto = 200;
        return _this;
    }
    return SonAccount;
}(MotherAccount));
var newAccount2 = new SonAccount('Paolo', 'Bianchi');
console.log("\uD83D\uDC64Questo \u00E8 il conto di ".concat(newAccount2.nome, " ").concat(newAccount2.cognome));
console.log('FIGLIO Conto iniziale: ', newAccount2.conto);
console.log('Conto Figlio dopo il primo deposito: ', newAccount2.oneDeposit());
console.log('Conto Figlio dopo il primo prelievo: ', newAccount2.oneWithDraw());
console.log('Conto Figlio dopo il secondo deposito: ', newAccount2.twoDeposit());
var controllo2 = newAccount2.twoWithDraw();
console.log('Conto Figlio dopo il secondo prelievo: ', controllo2);
if (controllo2 <= 0) {
    console.log('🚨 Il conto Figlio è in rosso, fai un deposito');
    console.log('Deposito urgente: ', newAccount2.threeDeposit());
}
else {
    console.log('💶 Disponi ancora di liquidità nel conto Figlio, puoi fare un altro prelievo');
    console.log('Nuovo prelievo: ', newAccount2.threeWithDraw());
}
