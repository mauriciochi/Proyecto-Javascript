function mostrar(){
    let item1=document.getElementById('prod1');
    let item2=document.getElementById('prod2');
    let item3=document.getElementById('prod3');
    let adic=0;
    //primer item de factura
    if(item1.selectedIndex==0)
    {
        document.getElementById('desc01').value="";
        document.getElementById('vau01').value=0;
        document.getElementById('cant01').value=0;
        document.getElementById('vat01').value=0;
        /--/
    }
    if(item1.selectedIndex==1){
        document.getElementById('desc01').value="Computador portatil HP exclusivo";
        document.getElementById('vau01').value=item1.options[item1.selectedIndex].value;
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat
        (document.getElementById('vau01').value)||0).toFixed(0);
    }

    if(item1.selectedIndex==2){
        document.getElementById('desc01').value="Computador de Mesa HP exclusivo"; /--/
        document.getElementById('vau01').value=item1.options[item1.selectedIndex].value;
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01'),
        value)*parseFloat(document.getElementById('vau01').value) || 0).toFixed(0);
    }
    if(item1.selectedIndex==3){
        document.getElementById( 'desc01').value="Impresora nuevo movelo HP exclusivo";/* */
        document.getElementById('vau01').value=item1.options[item1.selectedIndex].value;
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').
        value)*parseFloat (document.getElementById('vau01').value) || 0).toFixed(0);
        }
        //segundo item de factura
    if(item2.selectedIndex==0){
        document.getElementById('desc02').value="";
        document.getElementById('vau02').value=0;
        document.getElementById('cant02').value=0;
        document.getElementById('vat02').value=0;
    }/--/
    if(item2.selectedIndex==1){
        document.getElementById('desc02').value="Computador portatil HP exclusivo"; /--/
        document.getElementById( 'vau02').value=item2.options[item2.selectedIndex].value;
        document.getElementById('vat02').value=(parseFloat(document-getElementById('cant02').
        value)*parseFloat(document.getElementById('vaue2').value)||0).toFixed(0);
    }
    if(item2.selectedIndex==2){
        document.getElementById('desc02').value="Computador de Mesa HP exclusivo"; /--/
        document.getElementById('vau02').value=item2.options[item2.selectedIndex].value;
        document.getElementById('vat02').value=(parseFloat(document.getElementById('cant02').
        value)*parseFloat(document.getElementById('vau02').value)|| 0).toFixed(0);
    }
    if(item2.selectedIndex==3){
        document.getElementById('desc02').value="Impresora nuevo movelo HP exclusivo";/* */
        document.getElementById('vau02').value=item2.options [item2.selectedIndex].value;
        document.getElementById ('vat02').value=(parseFloat(document-getElementById('cant02').
        value)*parseFloat(document.getElementById('vau02').value)|| 0).toFixed(0);
    }
    //tercer item defactura
    if(item3.selectedIndex==0){
        document.getElementById('desc03').value="";
        document.getElementById('vau03').value=0;
        document.getElementById('cant03').value=0;
        document.getElementById('vat03').value=0;
    }/--/
    if(item3.selectedIndex==1){
        document.getElementById('desc03').value="Computador portatil HP exclusivo"; /--/
        document.getElementById('vau03').value=item3.options[item3.selectedIndex].value;
        document.getElementById('vat03').value=(parseFloat(document.getElementById('cant03').
        value)*parseFloat(document.getElementById('vau03').value) || 0).toFixed(0);
    }
    if(item3.selectedIndex==2){
        document.getElementById('desc03').value="Computador de Mesa HP exclusivo"; /--/
        document.getElementById('vau03').value=item3.options[item3.selectedIndex].value;
        document.getElementById('vat03').value=(parseFloat(document.getElementById('cant03').
        value)*parseFloat(document.getElementById('vau03').value)|| 0).toFixed(0);
    }
    if(item3.selectedIndex==3){
        document.getElementById('desc03').value="Impresora nuevo movelo HP exclusivo";/* */
        document.getElementById('vau03').value=item3.options [item3.selectedIndex].value;
        document.getElementById ('vat03').value=(parseFloat(document.getElementById('cant03').
        value)*parseFloat(document.getElementById('vau03').value)|| 0).toFixed(0);
    }
    //Calcular Adicionales//
    let totaladic0=0;
    if(document.getElementById('checkbox1').checked)
    {
        totaladic0 += 23000; //Sumar el valor de cerveza
    }
    if(document.getElementById('checkbox2').checked)
    {
        totaladic0 += 20500; // Sumar el valor de helado
    }
    if(document.getElementById('checkbox3').checked)
    {
    totaladic0 += 10700; // Sumar el valor de jugo
    }
        // Asignar el valor total al campo correspondiente
    document.getElementById('adic0').value = totaladic0;

        //Calcular valor subtotal***//
    document.getElementById('subt').value=(parseFloat(document.getElementById('vat01').value)+parseFloat(document.getElementById('vat02').value)+parseFloat(document.getElementById('vat03').value) +parseFloat(document.getElementById('adic0').value) || 0).toFixed(0);

        // Calcular Iva****//
        document.getElementById('iva').value=(parseFloat(document.getElementById('subt').value)*0.19|| 0).toFixed(0);

        //Calcular Descuento
    if(document.getElementById('radio1').checked)
        {
            document.getElementById('desc').value=(parseFloat(document.getElementById('subt').
            value)*0.10|| 0).toFixed(0);
        }
    else if(document.getElementById('radio2').checked)
        {
            document.getElementById('desc').value=(parseFloat(document.getElementById('subt').
            value)*0.00|| 0).toFixed(0);
        }
        else if (document.getElementById('radio3').checked)
        {
            document.getElementById('desc').value=(parseFloat(document.getElementById( 'subt').
            value)*0.00|| 0).toFixed(0);
        }
            // Calcular Neto****//
            document.getElementById('neto').value=(parseFloat (document.getElementById('subt').value)
            +parseFloat(document.getElementById('iva').value)-parseFloat (document.getElementById
            ('desc').value)|| 0).toFixed(0);
        }
function enviar(){
    swal("ESTIMADO CLIENTE", "SU PEDIDO ESTA EN PROCESO .. ESPERE AL LLAMMADO DE SU TURNO..","success"); 
}