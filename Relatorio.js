/* Script para puxar o menu lateral */
MSL = "OFF";
function Exibir_MSL() {

    if (MSL == "OFF") {

        MSL = "ON";
        document.getElementById("menu_sanduiche_left").style.display = "block";
        document.getElementById("black_screen_MSL").style.display = "block";

        setTimeout(function () {
            document.getElementById("menu_sanduiche_left").style.transform = "translateX(0px)";
            document.getElementById("black_screen_MSL").style.opacity = "1";
        }, 100);
    } else if (MSL == "ON") {

        MSL = "OFF";
        document.getElementById("black_screen_MSL").style.opacity = "0";
        document.getElementById("menu_sanduiche_left").style.transform = "translateX(-350px)";
        setTimeout(function () {
            document.getElementById("black_screen_MSL").style.display = "none";
            document.getElementById("menu_sanduiche_left").style.display = "none";
        }, 400);

    }
}
/* Script para puxar o menu lateral */

/* Script pra saber o mês atual */
function ReceberMesAtual(){

  const month = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
  const d = new Date();
  let mes = month[d.getMonth()];

  return mes;

}
/* Script pra saber o mês atual */

function TaxadeVendas(){



    var options = {
        series: [{
          name: "Total de vendas do mês",
          data: [ /* Insira neste vetor os valores referentes a cada mês */
            10, /* Janeiro */  
            41, /* Fevereiro */ 
            35, /* Março */ 
            51, /* Abril */ 
            49, /* Maio */ 
            62, /* Julho */ 
            69, /* Junho */ 
            91, /* Agosto */ 
            148, /* Setembro */ 
            12, /* Outubro */ 
            111, /* Novembro */ 
            100] /* Dezembro */ 
      }],
        chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        colors: ['#e78e00']
      },
      title: {
        text: 'Sobreponha com o mouse para saber quanto vendeu nos ultimos meses',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f1f1f1', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set' , 'Out', 'Nov', 'Dez'],
      },
      annotations: {
        xaxis: [
          {
            x: ReceberMesAtual(),
            borderColor: '#9da3af',
            label: {
              style: {
                color: '#e78e00',
              },
              text: 'Você esta aqui'
            }
          }
        ]
      }
      
      
      };

      

      var chart = new ApexCharts(document.querySelector("#TaxadeVendas"), options);
      chart.render();


      


}


function MaisPedidos(){

  var options = {
    
    chart: {
      width: 375,
      type: "pie"
    },
    fill: {
      colors: ['#FC5404', '#fb680b', '#fb7a17', '#fa8923', '#f99831', '#f9a63f', '#f8b24f', '#f8bf5f', '#f8cb70', '#f9d682', '#fae194', '#fceca7', '#fff6ba'],
    },
    dataLabels: {
      enabled: false
    },
    series: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
    labels: ['Casamento Tradicional', 'Casamento Intermediário', 'Casamento Premium', 'Aniversário Clássico', 'Festa de Debutante', 'Formandos Tradicional', 'Formandos Premium', 'Coffe Break Classic', 'Coffe Break Prime', 'Coffe Break Premium', 'Reveillon Tradicional', 'Reveillon Prime', 'Reveillon Premium']


  };
  
  var chart = new ApexCharts(document.querySelector("#maispedidos"), options);
  
  chart.render();
  
  
  

}
