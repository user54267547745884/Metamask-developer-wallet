
const readlineSync = require('readline-sync');


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


console.log('\x1b[36m[]]\x1b[0m Crear Wallet ETH-ERC2\n');
console.log('\x1b[36m[2]\x1b[0m Consultar saldo ETH-ERC20\n');
console.log('\x1b[36m[3]\x1b[0m Transferencia T2T-ERC20\n');
console.log('\x1b[36m[4]\x1b[0m Red XETH de ETH\n');
console.log('\x1b[36m[5]\x1b[0m Salir de XETH');






const opcion = readlineSync.question('\n\x1b[36m[-]\x1b[0m Digite opción: ');




switch (opcion) {

case '1':





function z23() {


const readlineSync = require('readline-sync');



 const { Web3 } = require('web3'); // Importar web3

 const infuraUrl = 'https://ethereum-rpc.publicnode.com';


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






        // Llamada a la API de CoinGecko
//        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');








const { Web3 } = require('web3');
const readlineSync = require('readline-sync');


const axios = require('axios');
//const amount;

console.log('\n\n\n\x1b[36m[-]\x1b[0m Modulo de consulta de saldo ETH');

const direccion_publica_a_consultar = readlineSync.question('\n\n\n\x1b[36m[-]\x1b[0m Digite dirección publica ETH a consultar: ');


// const { Web3 } = require('web3');

// 1. Configura tu proveedor de Infura (Mainnet o Testnet)
const infuraUrl = 'https://ethereum-rpc.publicnode.com'; // URL Nodo publico
const web3_1 = new Web3(new Web3.providers.HttpProvider(infuraUrl));

// 2. Dirección a consultar
const address = direccion_publica_a_consultar; // Pon aquí la dirección ETH

async function getBalance() {




/**


const response1 = await axios.get('https://api.coingecko.com/api/v>
            params: {
                ids: 'ethereum',
                vs_currencies: 'cop'
            }
        });

**/
/**

const response1 = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
            params: {
                ids: 'ethereum',
                vs_currencies: 'cop'
            }
        });




**/



    try {





        // 3. Obtener el balance en Wei (BigInt)
        const balanceWei = await web3_1.eth.getBalance(address);
        
        // 4. Convertir Wei a Ether
        const balanceEth = web3_1.utils.fromWei(balanceWei, 'ether');
        
//        console.log("\n\n💰 Balance: "+balanceEth.toFixed(9)+" ETH");

const balance_eth = Number(balanceEth).toFixed(8);



console.log("\n\n\n\n📄Datos de consulta balance📄\n\n\n");


      console.log("💰 Balance ETH: "+balance_eth+" ETH");




/**



const stringNumero = "123.4567";

// 1. Convertir string a número y fijar a 2 decimales
// Resultado: "123.46" (String)
const numeroFormateado = Number(stringNumero).toFixed(2);
console.log(numeroFormateado); 

// 2. Si necesitas volver a convertirlo en número (perdiendo los ceros finales)
const numeroFinal = parseFloat(numeroFormateado);
console.log(numeroFinal); // Resultado: 123.46 (Number)
**/




        // Llamada a la API de CoinGecko
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd,cop');






// CANTIDAD EN COP 





/**
const response1 = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
            params: {
                ids: 'ethereum',
                vs_currencies: 'cop'
            }
        });
**/




//    const response = await axios.get(coingeckoUrl);



// const ethData = response.data.ethereum;






        const precioUnitario = response.data.ethereum.cop;
        const valorTotal = precioUnitario * balanceEth;







      

// CANTIDAD EN USD

        const ethPriceUsd = response.data.ethereum.usd;

        const totalValue = ethPriceUsd * balanceEth;




const formattedPrice = valorTotal.toLocaleString('es-CO', { 
  minimumFractionDigits: 2,
  maximumFractionDigits: 2 // Opcional: asegura que siempre sean exactamente 2
});




/**


        console.log(`Precio actual de 1 ETH: $${ethPriceUsd} USD`);
        console.log(`Valor de ${amount} ETH: $${totalValue.toFixed(9)} USD`);
        console.log(amount.toFixed(9));


**/



console.log("\n\n💵 Balance USD: "+totalValue.toFixed(9)+" USD\n\n");

//    $${copPrice.toLocaleString('es-CO', {minimumFractionDigits: 2}



//console.log("💷 Balance COP: "+valorTotal.toLocaleString('es-cop')+" COP\n\n");




console.log("💷 Balance COP: "+formattedPrice+" COP\n\n");




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




const axios = require('axios');



// Bibliotecas de Javadcript con nodejs

const readlineSync = require('readline-sync');

const { Web3 } = require('web3');

// const { ethers } = require('ethers');
// import Web3 from 'web3';


// 1. Configuración de Infura y Cuenta
// Reemplaza con tu URL de Infura (Mainnet) y tus datos reales
const INFURA_URL = 'https://ethereum-rpc.publicnode.com';
const web3 = new Web3(new Web3.providers.HttpProvider(INFURA_URL));

















console.log('\n\n\n\x1b[36m[-]\x1b[0m Modulo de transferencia T2T-ERC20');



const Direccion_publica_remitente = readlineSync.question('\n\n📤 Dirección ETH remitente: ');




const Clave_privada_remitente = readlineSync.question('\n\n💳 Clave privada ETH remitente: ');


const Direccion_publica_destinatario = readlineSync.question('\n\n📥 Dirección ETH destinatario: ');





console.log("\n\n⛔ Monto mínimo de envío: 0.00000900 ETH");






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





const balanceWei1 = await web3.eth.getBalance(cuentaOrigen);

        // 4. Convertir Wei a Ether
        const balanceEth1 = web3.utils.fromWei(balanceWei1, 'ether');

/**

if(MontoTransferencia > 0.00000900 == balanceEth1 > 0.00000900) {




console.log("\n\n❎Fondos insuficientes para transacción y gasfee❎\n\n");

process.exit(1);





}
**/

// Redondear a decimales específicos (devuelve cadena, usar parseFloat)
//let val1 = 10.567;
//let val2 = 3.212;
//let valorMinimo = parseFloat((balanceEth1 - MontoTransferencia).toFixed(8));
//console.log(restaRedondeada); // Resul


const aprox_gas = 0.00000200;

const valor_minimo = parseFloat((balanceEth1 - MontoTransferencia).toFixed(8));


const value_Minimo = parseFloat((valor_minimo - aprox_gas).toFixed(8));


if (MontoTransferencia <= 0.00000899 || balanceEth1 <= 0.00000899) {
    console.log("\n\n❎Fondos insuficientes para transacción y gasfee❎\n\n");
    process.exit(1);
}




if (value_Minimo <= 0.00000200) {
    console.log("\n\n❎Fondos insuficientes para transacción o gasfee❎\n\n");
    process.exit(1);



}



        // 4. Firmar la transacción
        const signedTx = await web3.eth.accounts.signTransaction(transaccion, clavePrivada);

        // 5. Enviar la transacción firmada





          // 5. Enviar la transacción firmada
        console.log("\n\n📥 Enviando transacción [...]");
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);





/**
const balanceWei = await web3.eth.getBalance(cuentaOrigen);

        // 4. Convertir Wei a Ether
        const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
**/





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




  
       



const balanceWei = await web3.eth.getBalance(cuentaOrigen);

        // 4. Convertir Wei a Ether
        const balanceEth = web3.utils.fromWei(balanceWei, 'ether');

/**

//const amount = balanceEth;


const url = 'https://api.coingecko.com';
    const response = await fetch(url);
    const data = await response.json();
    
    const ethPriceInUsd = data.ethereum.usd;
//    const totalInUsd = amount * ethPriceInUsd;

// totalInUsd.toFixed(2));



**/






        // Llamada a la API de CoinGecko
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd,cop');






        const precioUnitario = response.data.ethereum.cop;
  //      const valorTotal = precioUnitario * balanceEth;








 

        const ethPriceUsd = response.data.ethereum.usd;

//        const totalValue = ethPriceUsd * balanceEth;







/**

const formattedPrice = valorTotal.toLocaleString('es-CO', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2 // Opcional: asegura que siempre sean exactamente 2
});



**/















// Variable cantidad envuada de Ethereum en USD amount




// USD

const montoEnviadoUsd = MontoTransferencia * ethPriceUsd;


const monto_Enviado_Usd = Number(montoEnviadoUsd).toFixed(8);


// COP


const MontoTransferenciaCop = precioUnitario * MontoTransferencia;


const Monto_Transferencia_Cop = MontoTransferenciaCop.toLocaleString('es-CO', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2 // Opcional: asegura que siempre sean exactamente 2
});











// Variable gas gastado gasusd





// USD


const gasusd = costoTotalEth * ethPriceUsd;


const gas_usd = Number(gasusd).toFixed(8);


const costo_total_eth = Number(costoTotalEth).toFixed(8);



// COP



const GasUsedCop = precioUnitario * costoTotalEth;




const Gas_used_cop = GasUsedCop.toLocaleString('es-CO', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2 // Opcional: asegura que siempre sean exactamente 2
});













// Variable balance restante




//const balance_eth = Number(balanceEth).toFixed(8);




// USD

const balanceRestanteUsd = balanceEth * ethPriceUsd;

const balance_restante_usd = Number(balanceRestanteUsd).toFixed(8);


const balance_ethereum = Number(balanceEth).toFixed(8);


// COP




const BalanceRestanteCop = precioUnitario * balanceEth;




const Balance_Restante_Cop = BalanceRestanteCop.toLocaleString('es-CO', {


  minimumFractionDigits: 2,
  maximumFractionDigits: 2 // Opcional: asegura que siempre sean exactamente 2


});









console.log(`\n\n🏁Transacción exitosa🏁\n\n\n\n\📄Información detallada de Transacción📄\n\n\n📄 Hash TX: ${receipt.transactionHash}\n\n📄 Monto enviado ETH: `+MontoTransferencia+' ETH\n\n📄 Monto enviado USD: '+monto_Enviado_Usd+' USD\n\n📄 Monto enviado COP: '+Monto_Transferencia_Cop+' COP\n\n📄 Saldo restante ETH: '+balance_ethereum+' ETH\n\n📄 Saldo restante USD: '+balance_restante_usd+' USD\n\n📄 Saldo restante COP: '+Balance_Restante_Cop+' COP\n\n📄 Comisión Gas-ERC20 ETH: '+costo_total_eth+' ETH\n\n📄 Comisión Gas ERC-20 USD: '+gas_usd+' USD\n\n📄 Comisión Gas-ERC20 COP: '+Gas_used_cop+' COP\n\n📄 Confirmaciones: '+confirmations+'\n\n📄 Status: Completada\n\n📄 Transacción: Enviada exitosamente\n\n');







    } catch (error) {


     // Codigo para conocer error en caso de un error en la transacción 
      //  console.error("❎Error en la transacción❎", error);

    console.error("❎Error en la transacción❎");







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








