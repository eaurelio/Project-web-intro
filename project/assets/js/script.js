const principal = []
const acompanhamento = []

const pratos = [
{
    id: 1,
    nome: 'Pizzas',
    principal: true,
    tamanho: ['P', 'M', 'G', 'F'],
    sabor: [
      'A moda da casa',
      'Bacon',
      'Calabresa',
      'Franco c/ catupiry',
      'Italiana',
      'Portuquesa',
      'Marguerita'
    ],
    doce: false
  },
  
  {
    id: 2,
    nome: 'Lasanhas',
    principal: true,
    tamanho: ['P', 'M', 'G'],
    sabor: [
      'Bolonhesa',
      'Quatro quejos',
      'Franco c/ catupiry',
      'Carne'
    ],
    doce: false
  },
  
  {
    id: 3,
    nome: 'Spaghetti',
    principal: true,
    tamanho: ['Único'],
    sabor: [
      'Fettuccine Allegro',
      'Massa Alfredo',
      'Massa ao molho pomodoro',
      'Massa Bolognesa Clássico',
      'Massa Carmonara',
      'Penne Caprese',
      'Massa Italiaa com filé de frango',
      'Al Mare',
    ],
    doce: false
  },
  
  {
    id: 4,
    nome: 'Focaccia',
    principal: true,
    tamanho: ['Único'],
    sabor: [
      'Focaccia Calabresa',
      'Focaccia Champgnon',
      'Focaccia Marguerita',
      'Focaccia Mussarela',
      'Focaccia Queijos'
    ]
  },
  
  {
    id: 5,
    nome: 'Saladas',
    principal: false,
    tamanho: ['Único'],
    sabor: [
      'Bambini',
      'Tradizionale',
      'Caesar',
    ]
  },
  
  {
    id: 6,
    nome: 'Sobremesas',
    principal: false,
    tamanho: ['Único'],
    sabor: [
      'Cannoli',
      'Cioccolato',
      'Mil Folhas',
      'Pudim'
    ]
  },
  
  {
    id: 7,
    nome: 'Vinhos',
    principal: false,
    tamanho: ['Único'],
    sabor: [
      'Tinto',
      'Branco',
      'Rosé',
      'Espumante',
      'Licoroso'
    ]
  }
]

pratos.map(function (el, i, array) {
  let sabores = el.sabor.toString()
  el.sabor = sabores
})


pratos.map(function (el, i, array) {
  if(el.principal === true) {
    principal.push(el)
  } else {
    acompanhamento.push(el)
  }
})

// console.log(principal)
// console.log(acompanhamento)

// *****************************************************************
// Semana 5
// for (i in principal) {
//   console.log(principal[i])
// }


// *****************************************************************
// Semana 6-1

// const objetoTeste ={
//   id: 1,
//   nome: 'Pizzas',
//   principal: true,
//   tamanho: ['P', 'M', 'G', 'F'],
//   sabor: [
//     'A moda da casa',
//     'Bacon',
//     'Calabresa',
//     'Franco c/ catupiry',
//     'Italiana',
//     'Portuquesa',
//     'Marguerita'
//   ],
//   doce: false
// }
// const retornaObjeto = x => {
//   let string
//   for (let i in x) {
//     string += x[i]
//   }
//   return string
// }

// console.log(retornaObjeto(objetoTeste))

// *****************************************************************
// Semana 6-2

const retornaObjetoNome = (array, chave) => {
  let obj
  for (let i in array) {
    if (array[i].nome === chave) {
      // console.log(array[i])
      obj = {...array[i]}
      // console.log(obj)
    } else if (obj === undefined){
      obj = 'Não encontrado!'
    }
  }
  return obj
}

// Imprime os arrays
// console.log(principal); console.log(acompanhamento);

console.log(retornaObjetoNome(acompanhamento, 'Vinhos'))
