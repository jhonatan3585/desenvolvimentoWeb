$(document).ready(function(){

    $("#bMaster").click(function(){  

        nome=$("#loginAdm").val(),
        senha=$("#senhaAdm").val(),

        verificaAdm();


    });
});    



function verificaAdm(){   
     
    $.ajax({ 
        data:{
            nome:$("#loginAdm").val(),
            senha:$("#senhaAdm").val(),
        },
        type:"POST",    
        url:'../PHP/verificaAdm.php',
        dataType:"json",
        error:function(){
            alert("DEU ERRRRROOOR NO RETORNO"); //não está havendo retorno
        },
        success:function(retorno){      
             if(retorno['autenticado']){
               window.location.href="../PAGINAS/telaAdm.html";
            }else{
                alert("LOGIN/SENHA INCORRETOS!!")
            }           
                                 
        }
        


     
    });
};
 	

      