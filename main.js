function generateTime() {
 
    let timeNow = new Date();
  
    let hours = timeNow.getHours().toString().length < 2 ? "0" + timeNow.getHours() : timeNow.getHours();
    let minutes = timeNow.getMinutes().toString().length < 2 ? "0" + timeNow.getMinutes() : timeNow.getMinutes();
    let seconds = timeNow.getSeconds().toString().length < 2 ? "0" + timeNow.getSeconds() : timeNow.getSeconds();

  
    let mainTime = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById("time").innerHTML = mainTime;

    let fecha = new Date();

    let diaSemana = fecha.getDay();
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let year = fecha.getFullYear();

    let pDiasemana = document.getElementById('dayname');
    let pDia = document.getElementById('daynum');   
    let pMes = document.getElementById('month');
    let pYear = document.getElementById('year');

    let semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    pDiasemana.textContent = semana[diaSemana];
    
    pDia.textContent = dia;

    var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    pMes.textContent = meses[mes];

    pYear.textContent = year;
  
}


setInterval(() => {
    generateTime();
}, 1000);


