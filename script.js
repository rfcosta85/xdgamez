let inserts = document.getElementById('box_products')
let list = document.getElementById('result')
let ordered_list = document.getElementById('result')
let products = []

function inLista(products,list)
{

    if(list.indexOf(inserts.value)!= -1)
    {

        return true

    }else 
    {

        return false 

    }

}

function register()
{  
    
    if(!inLista(products.value, products))
    {

        products.push(inserts.value)
        window.alert(`${inserts.value} adicionado com sucesso`)    
        inserts.value = '' 
        inserts.focus() 

    }else 
    {

        window.alert('Produto já encontrado na lista')

    }

    console.log(inList())
    

}

function presentation()
{

   list.innerHTML = products 
   
    /*for(let i = 0; i <= products.length; i++)
    {

        list.innerHTML = `${products}`        

    }*/

    /*let itens = document.createElement('option')
    itens.text = `${products}`
    list.appendChild(itens)*/

}

function ordered()
{

    window.alert(`Ordenando lista...`)    
    ordered_list.innerHTML = products.sort()
    /*let teste = document.createElement('option')       
    teste.text = `${products.sort()}`
    lista.appendChild(teste)*/   

}

function exclude()
{

    
   
    let erase = products.pop()
    window.alert('Será excluído sempre o último elemento da lista de produtos')   
    window.alert(`Produto: ${erase} Excluído!`)
    ordered_list.innerHTML = ''
   

    /*let zoando = document.createElement('option')
   zoando.text = `${products.pop()}`
   excluir.appendChild(zoando)*/

}

