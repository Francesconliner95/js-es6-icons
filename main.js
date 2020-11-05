const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];

var type_list=[];
var icon_color=['red','green','blue']

//utilizziamo un ciclo per scorrere i vari elementi(oggetti) dell'array
icons.forEach((element, index, array) => {
    //ne estraiamo solo la variabile type
    let {type}=element;
    //se il valore di type non è contenuto nell array type_list
    if(!type_list.includes(type)){
        //l'aggiungiamo nell'array
        type_list.push(type);
        //e la inseriamo nella section nell'html
        $('#icons-filter').append(
            `
            <option value="${type}">${type}</option>
            `
        );
    }


});

printIcons(icons);

function printIcons(array){
    array.forEach((element, index, array) => {
        let {name,prefix,type,family}=element;
        //mi creo un variabile che memorizzera' la posizione(tipologia:animale,vegetale,utente) del type dell'oggetto corrente all'interno dell'array
        let pos=type_list.indexOf(type);

        //inserisco l'icona composta all'interno del html
        $('#icons-container').append(
            `
            <div class="icon">
                <i class="${family} ${prefix}${name} fa-2x" style="color:${icon_color[pos]}"></i>
                <p>${name}</p>
            </div>
            `
        );
    });
}

//non appena l'utente effettua una scelta quindi cambia il select
$('#icons-filter').change(()=>{
    //immagazziniamo il valore della scelta in una variabile
    var choise = $('#icons-filter').val();
    //resettiamo/puliamo il contenitore
    $('#icons-container').empty();
    //se la scelta è vuota (quindi corrisponde a "<option value="">all types</option>")
    if(choise == ''){
        //stampiamo tutte le icone utilizzando la funzione stampa e passando il parametro dell'array completo
        printIcons(icons);
    }
    else{
        //altrimenti
        //generiamo un nuovo array attraverso il ciclo .filter() che ci restituirà solo gli elementi che rispettano la condizione
        var new_list=icons.filter((element,index,array)=>{
            return choise==element.type;
        })
        //stampiamo solo le icone che ci interessano utilizzando la funzione stampa e passando il parametro new_list ovvero il nuovo array che abbiamo generato
        printIcons(new_list);
    }

});
