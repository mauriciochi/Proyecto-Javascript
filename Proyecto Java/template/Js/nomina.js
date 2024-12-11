//variables de nomina
let smlv=1300000;//salario 2024
let subtte=162000;//Transporte 2024
let Sueldo=0;//
let n1=0;//
let n2=0;//
function liquidar(){
    //Sueldo basico
    let n1=document.getElementById("salario").value;
    let n2=document.getElementById("dias").value;
    Sueldo=parseInt(n1)/30*parseInt(n2);
    document.getElementById("basico").value=Sueldo.toFixed(0);
    //subsidio de transporte
    if(n1>=2*smlv){
        subsidiot=0; // No tiene el derecho al subsidio
        document.getElementById("subsidio").value=subsidiot.toFixed(0);
    }else{
        subsidiot=subtte/30*parseInt(n2); // No tiene el derecho al subsidio
        document.getElementById("subsidio").value=subsidiot.toFixed(0);
    }
    //recargo nocturno
    var nhrn=document.getElementById("hrn").value;
    let vhrn=n1/240*nhrn*1.35;
    document.getElementById("totrecn").value=vhrn.toFixed(0);
    //total Devengado
    document.getElementById("totaldev").value=(parseFloat(document.getElementById("basico").value)+parseFloat(document.getElementById("subsidio").value)+parseFloat(document.getElementById("bonif").value)+parseFloat(document.getElementById("totrecn").value)||0).toFixed(0);
    //
    let totaldeve=document.getElementById("totaldev").value;
    // Seccion de deducciones
    //EPS y pension
    let eps00=(totaldeve-subsidiot)*0.04; // EPS
    let pens00=(totaldeve-subsidiot)*0.04; // Pension
    document.getElementById("eps").value=eps00.toFixed(0);// visualizacion resultado en el formulario
    document.getElementById("pension").value=pens00.toFixed(0);
    // Fondo de Solidaridad
    let fondo=0;
    if(n1>=4*smlv){
        let fondo=totaldeve*0.01;
        document.getElementById("fondos").value=fondo.toFixed(0);
    }else{
        document.getElementById("fondos").value=fondo.toFixed(0);
    }
    // Total deducciones
    document.getElementById("totaldedu").value=(parseFloat(document.getElementById("fondos").value)+parseFloat(document.getElementById("prestam").value)+parseFloat(document.getElementById("eps").value)+parseFloat(document.getElementById("pension").value)||0).toFixed(0);
    // total
    let totalddc=document.getElementById("totaldedu").value;
    //total neto
    let vneto=totaldeve-totalddc;
    document.getElementById("neto").value=vneto.toFixed(0);
}