const campo = document.getElementById('nome');
let alvo = document.getElementById('alvo');
function carregarApi (){
    fetch(`https://api.github.com/users`)

    .then((res)=>{
     return res.json();
    })
    .then((json)=>{
         json;
         let dados = json;
        console.log(dados);

       let infosList =  dados.map((valor,index)=>{
            return `<li class="d-flex flex-column bg-primary" id=${valor.login}>
                        <div class="card bg-info" style="width:100%">
                            <img class="card-img-top" src="${valor.avatar_url}" alt="Card image">
                            <div class="card-body">
                            <h4 class="card-title">${valor.login}</h4>
                            
                            <a href="${valor.html_url}" target="_blanck" class="btn btn-primary">Profile Github</a>
                            </div>
                        </div>
                    </li>` 

        });

       alvo.innerHTML = infosList.join(' ');

    });
     
    
}

carregarApi();

campo.addEventListener('keyup',(event)=>{

    
 let user = campo.value = event.target.value;
 console.log(user);
 
    /*fetch(`https://api.github.com/users/${user}`)

    .then((res)=>{
    return res.json();
    })
    .then((json)=>{
        json;*/

     
     let itens = document.querySelectorAll('li');
     let  novoArray = Array.from(itens);
    
     
        //alvo.innerHTML="";
        novoArray.filter((item)=>{
            if(item.id !== user){
            
                if(user.length <1 ){
                    console.log(user);
                    item.classList.remove('filtrar');
                }
                else
                {
                    item.classList.add('filtrar');
                }
            
                
            }
            else
            {
                    item.classList.remove('filtrar');
            }
            


            
                
                
                
                
            
        })

 
});




