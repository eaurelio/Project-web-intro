const salgada = []
const doce = []

const pratos = [
  {
    id: 1,
      nome: 'À moda da casa',
      salgada: true,
      tamanho: ['P', 'M', 'G', 'F'],
      img: 'moda.jpg',
      ingredientes: [
        'mussarela', 'orégano', 'calabresa', 'cebola', 'lombo canadense', 'tomate', 'milho', 'bacon', 'catupiry'
      ],
      tempoMedioPreparo: '50'
  },
  {
    id: 2,
      nome: 'Bacon',
      salgada: true,
      tamanho: ['P', 'M', 'G', 'F'],
      img: 'bacon.jpg',
      ingredientes: [
        'mussarela', 'orégano', 'bacon', 'milho'
      ],
      tempoMedioPreparo: '30'
  },
  {
    id: 3,
      nome: 'Calabresa',
      salgada: true,
      tamanho: ['P', 'M', 'G', 'F'],
      img: 'calabresa.jpg',
      ingredientes: [
        'mussarela', 'orégano', 'calabresa', 'cebola'
      ],
      tempoMedioPreparo: '30'
  },
  {
    id: 4,
      nome: 'Frango c/ catupiry',
      salgada: true,
      tamanho: ['P', 'M', 'G', 'F'],
      img: 'frangocatupiry.jpg',
      ingredientes: [
        'mussarela', 'orégano', 'frango', 'catupiry'
      ],
      tempoMedioPreparo: '30'
  },
  {
    id: 5,
      nome: 'Italiana',
      salgada: true,
      tamanho: ['P', 'M', 'G', 'F'],
      img: 'italiana.jpg',
      ingredientes: [
        'Mussarela', 'orégano', 'calabresa', 'bacon', 'cebola', 'azeitona', 'palmito', 'catupiry'
      ],
      tempoMedioPreparo: '48'
  },
  {
    id: 6,
      nome: 'Portuguesa',
      salgada: true,
      tamanho: ['P', 'M', 'G', 'F'],
      img: 'portuguesa.jpg',
      ingredientes: [
        'Mussarela', 'orégano', 'presunto', 'calabresa', 'cebola', 'pimentão'
      ],
      tempoMedioPreparo: '35'
  },
  {
    id: 7,
      nome: 'Marguerita',
      salgada: true,
      tamanho: ['P', 'M', 'G', 'F'],
      img: 'marguerita.jpg',
      ingredientes: [
        'Mussarela', 'orégano', 'calabresa', 'tomate', 'cebola'
      ],
      tempoMedioPreparo: '35'
  },
  {
    id: 8,
      nome: 'Atum ao catupiry',
      salgada: true,
      tamanho: ['P', 'M', 'G', 'F'],
      img: 'atum.jpg',
      ingredientes: [
        'atum', 'mussarela', 'orégano', 'cebola', 'catupiry', 'azeitona'
      ],
      tempoMedioPreparo: '35'
  },
  {
    id: 9,
      nome: 'Baiana',
      salgada: true,
      tamanho: ['P', 'M', 'G', 'F'],
      img: 'baiana.jpg',
      ingredientes: [
        'mussarela', 'orégano', 'calabresa', 'tomate', 'pimenta calabresa'
      ],
      tempoMedioPreparo: '30'
  },
  {
    id: 10,
      nome: 'Frango da roça',
      salgada: true,
      tamanho: ['P', 'M', 'G', 'F'],
      img: 'frango.jpg',
      ingredientes: [
        'mussarela', 'orégano', 'frango', 'milho', 'catupiry', 'batata palha'
      ],
      tempoMedioPreparo: '40'
  }, 
  {
    id: 11,
      nome: 'Banana',
      salgada: false,
      tamanho: ['P', 'M', 'G', 'F'],
      img: 'banana.jpg',
      ingredientes: [
        'mussarela', 'orégano', 'banana', 'canela'
      ],
      tempoMedioPreparo: '25'
  },
  {
    id: 12,
      nome: 'Chocolate',
      salgada: false,
      tamanho: ['P', 'M', 'G', 'F'],
      img: 'chocolate.jpg',
      ingredientes: [
        'mussarela', 'chocolate granulado', 'leite condensado', 'cereja'
      ],
      tempoMedioPreparo: '25'
  }
]

pratos.map(function (el, i, array) {
  let ingredientes = el.ingredientes.toString()
  el.ingredientes = ingredientes
})


salgada.map(function (el, i, array) {
  if(el.salgada === true) {
    salgada.push(el)
  } else {
    doce.push(el)
  }
})


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

const busca = document.getElementById('search')
const menu = document.getElementById('exibeMenu')
const searchItem = document.getElementById('searchItem')


function createItem (prato) {
  for (let el of prato) {
    console.log(`Sabor: ${el.nome}
    Ingredientes: ${el.ingredientes.replaceAll(',', ', ')}
    Tamanhos disponíveis: ${el.tamanho.toString().replaceAll(',', ', ')}
    Tempo médio de preparo: ${el.tempoMedioPreparo} minutos
    Salgada: ${el.salgada}
    `)
  }
  prato.map(function (el) {
    // Criando o card
    let box = document.createElement('article')
    box.classList.add('card')
    // img
    let img = document.createElement('img')
    img.setAttribute('src', `./assets/img/pizzas/${el.img}`)
    // console.log(`./assets/img/pizzas/${el.img}`)
    box.appendChild(img)
    // div description
    let desc = document.createElement('div')
    desc.classList.add('description')
    let h3 = document.createElement('h3')
    h3.innerHTML = el.nome
    desc.appendChild(h3)
    // parágrafo ingredientes
    box.appendChild(desc)
    let ingredientes = document.createElement('p')
    ingredientes.innerHTML = `<span style="font-weight: bold; color:red">Ingredientes:</span> ${el.ingredientes.replaceAll(',', ', ')}`
    desc.appendChild(ingredientes)
    // Tamanhos
    let tamanhos = document.createElement('div')
    tamanhos.className = 'tamanhos'
    tamanhos.innerHTML = `Tamanhos: <span style="font-weight: bold; color:green">${el.tamanho.toString().replaceAll(',', ', ')}</span>`
    desc.appendChild(tamanhos)
    // Tempo de preparo
    let tempo = document.createElement('div')
    tempo.className = 'tamanhos'
    tempo.innerHTML = `Tempo médio de preparo: ${el.tempoMedioPreparo} minutos`
    desc.appendChild(tempo)

    menu.appendChild(box)
  })  
}

searchItem.addEventListener('click', function() {
  let arr = pratos.filter((prato) => prato.nome.toLowerCase().includes(busca.value.toLowerCase()))
  if (busca.value === '') {
    window.alert('É necessário informar um sabor à pesquisa')
    menu.innerHTML = ''
    createItem(pratos)
  } else {
    menu.innerHTML = ''
  createItem(arr)
  }
})

// Carregando o cardápio na inicialização
window.onload = createItem(pratos)
