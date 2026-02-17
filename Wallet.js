
const readlineSync = require('readline-sync');

const infuraUrl = 'https://mainnet.infura.io/v3/...';
const { Web3 } = require('web3');



console.log("\x1b[30m#######################################\x1b[0m");
console.log("\x1b[30m#💎####💎##💎💎💎##💎💎💎💎###💎##💎###\x1b[0m");
console.log("\x1b[30m##💎##💎###💎#########💎######💎##💎###\x1b[0m");
console.log("\x1b[30m###💎💎####💎💎💎#####💎######💎💎💎###\x1b[0m");
console.log("\x1b[30m##💎#💎####💎#########💎######💎##💎###\x1b[0m");
console.log("\x1b[30m#💎###💎###💎💎💎#####💎######💎##💎###\x1b[0m");
console.log("\x1b[30m#######################################\x1b[0m");
console.log('\x1b[36m __________________________________\n \x1b[0m');
console.log('\x1b[36m  Ethereum console wallet with Web3    \x1b[0m');
console.log('\x1b[36m ___________________________________ \x1b[0m');






console.log('\n\n');


console.log('\x1b[36m[1]\x1b[0m Crear Wallet ETH-ERC2\n');
console.log('\x1b[36m[2]\x1b[0m Consultar saldo ETH-ERC20\n');
console.log('\x1b[36m[3]\x1b[0m Transferencia T2T-ERC20\n');
console.log('\x1b[36m[4]\x1b[0m Red XETH de ETH');







const opcion = readlineSync.question('\n\x1b[36m[-]\x1b[0m Digite opción: ');




switch (opcion) {

case '1':





function z23() {


const readlineSync = require('readline-sync');



 const { Web3 } = require('web3'); // Importar web3

 const infuraUrl = 'https://mainnet.infura.io/v3/...';


const web3_0 = new Web3(infuraUrl);


// 2. Función para crear la wallet (cuenta nueva)
const createWallet = () => {
    try {
        // Genera una cuenta nueva aleatoria (clave privada + dirección)


const newAccount = web3_0.eth.accounts.create();

console.log('\n\n\n[-] Modulo de creación de Wallet ETH-ERC20\n\n');




        console.log("💎Wallet Creada Exitosamente💎");
        console.log("\n📄 Dirección pública: ", newAccount.address);
        console.log("\n📄 Clave Privada: ", newAccount.privateKey);
        console.log("");

        return newAccount;
    } catch (error) {
//        console.error("Error al crear la wallet:", error);


console.error("❎Wallet no creada vuelva intentar nuevamente❎");



    }
};







// CREATE WALLET


createWallet();

}



z23();





break;










case '2':

// GET BALANCE


function z12() {





const { Web3 } = require('web3');
const readlineSync = require('readline-sync');




console.log('\n\n\n\x1b[36m[-]\x1b[0m Modulo de consulta de saldo ETH');

const direccion_publica_a_consultar = readlineSync.question('\n\n\x1b[36m[-]\x1b[0m Digite dirección publica ETH a consultar: ');


// const { Web3 } = require('web3');

// 1. Configura tu proveedor de Infura (Mainnet o Testnet)
const infuraUrl = 'https://mainnet.infura.io/v3/...';
const web3_1 = new Web3(new Web3.providers.HttpProvider(infuraUrl));

// 2. Dirección a consultar
const address = direccion_publica_a_consultar; // Pon aquí la dirección ETH

async function getBalance() {
    try {
        // 3. Obtener el balance en Wei (BigInt)
        const balanceWei = await web3_1.eth.getBalance(address);
        
        // 4. Convertir Wei a Ether
        const balanceEth = web3_1.utils.fromWei(balanceWei, 'ether');
        
       console.log("\n\n💰 Balance: "+balanceEth.slice(0, 10)+" ETH\n\n");





    } catch (error) {
//        console.error('❎ Error:', error);


console.error('\n\n❎\x1b[31mDirección no encontrada\x1b[0m❎\n\n');

    }





}

getBalance();





}



z12();








break;


case '3':

// TRANSFER WALLET




function z5744() {




// Bibliotecas de Javadcript con nodejs

const readlineSync = require('readline-sync');

const { Web3 } = require('web3');

// const { ethers } = require('ethers');
// import Web3 from 'web3';


// 1. Configuración de Infura y Cuenta
// Reemplaza con tu URL de Infura (Mainnet) y tus datos reales
const INFURA_URL = 'https://mainnet.infura.io/v3/...';
const web3 = new Web3(new Web3.providers.HttpProvider(INFURA_URL));

















console.log('\n\n\n\x1b[36m[-]\x1b[0m Modulo de transferencia T2T-ERC20');



const Direccion_publica_remitente = readlineSync.question('\n\n📤 Dirección ETH remitente: ');




const Clave_privada_remitente = readlineSync.question('\n\n💳 Clave privada ETH remitente: ');


const Direccion_publica_destinatario = readlineSync.question('\n\n📥 Dirección ETH destinatario: ');












const MontoTransferencia = readlineSync.question('\n\n📄 Monto a enviar de ETH: ');











// !!! NUNCA EXPONGAS TU CLAVE PRIVADA EN PRODUCCIÓN !!!
const cuentaOrigen = Direccion_publica_remitente;
const clavePrivada = Clave_privada_remitente; // Sin el '0x' al inicio
const cuentaDestino = Direccion_publica_destinatario;


    







                                                                                              
















async function enviarTransferencia() {
    try {


     console.log("\n\n\n\n⏳ Iniciando transferencia [...]");




        // 2. Obtener nonce (cantidad de transacciones de la cuenta)
        const nonce = await web3.eth.getTransactionCount(cuentaOrigen, 'latest');

        // 3. Definir la transacción
        const transaccion = {
            from: cuentaOrigen,
            to: cuentaDestino,
            value: web3.utils.toWei(MontoTransferencia, 'ether'), // Monto solicitado
            gas: 21000, // Límite de gas estándar para ETH transfer
            gasPrice: await web3.eth.getGasPrice(), // Precio de gas actual
            nonce: nonce,
            chainId: 1 // 1 para Mainnet
      



  };









     


        // 4. Firmar la transacción
        const signedTx = await web3.eth.accounts.signTransaction(transaccion, clavePrivada);

        // 5. Enviar la transacción firmada
  




     
        // 5. Enviar la transacción firmada
        console.log("\n\n📥 Enviando transacción [...]");
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);





       




const balanceWei = await web3.eth.getBalance(cuentaOrigen);
        
        // 4. Convertir Wei a Ether
        const balanceEth = web3.utils.fromWei(balanceWei, 'ether');




          


// 2. Extraer gasUsed y effectiveGasPrice
        const miHash = receipt.transactionHash;
        const gasUsado = receipt.gasUsed; // Unidades de gas consumidas
        const precioGasEfectivo = receipt.effectiveGasPrice; // Precio real por unidad en Wei

        // 3. Calcular el costo total en Wei (BigInt para evitar pérdida de precisión)
        const costoTotalWei = BigInt(gasUsado) * BigInt(precioGasEfectivo);

        // 4. Convertir a ETH para legibilidad
        const costoTotalEth = web3.utils.fromWei(costoTotalWei.toString(), 'ether');





// 3. Bucle para verificar confirmaciones







// Ejemplo conceptual
//  const receipt = await web3.eth.getTransactionReceipt(txHash);
   const currentBlock = await web3.eth.getBlockNumber();


    // +1 porque el bloque donde se incluyó cuenta como la 1ra
    const confirmations = Number(currentBlock) - Number(receipt.blockNumber) + 1;
  
//      console.log('\n\n⏳ Confirmaciones: '+confirmations+'\n\n');




  
       










console.log(`\n\n🏁Transacción exitosa🏁\n\n\n\n\📄Información detallada de Transacción📄\n\n\n📄 Hash: ${receipt.transactionHash}\n\n📄 Monto enviado: `+MontoTransferencia+' ETH\n\n📄 Saldo restante: '+balanceEth.slice(0, 10)+' ETH\n\n📄 Comisión Gas-ERC20: '+costoTotalEth.slice(0, 10)+' ETH\n\n📄 Confirmaciones: '+confirmations+'\n\n📄 Status: Completada\n\n📄 Transacción: Enviada exitosamente\n\n');







    } catch (error) {
        console.error("❎Error en la transacción❎", error);
    }
}

enviarTransferencia();



























}


z5744();


























break;




case '4':





console.log('\n\n\n\x1b[36m[-]\x1b[0m Modulo de consulta de red ETH');



console.log('\n\n💎ERC20 o ETHEREUM💎\n\n');

break;

case '5':

console.log('\n\n\n🔒Cerrando XETH🔒\n\n');


break;

default:



console.log('\n\n\n❎Opción equivocada intenté nuevamente❎\n\n');



break;




}








