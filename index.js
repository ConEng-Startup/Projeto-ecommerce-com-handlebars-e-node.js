const express =  require('express')
const exphbs = require('express-handlebars')

const app = express();
const hbs = exphbs.create({
		partialsDir: ['views/partials']
});

app.engine('handlebars', hbs.engine)
app.set('view engine','handlebars')

app.use(express.static('public'))

const produtos = [
    {
        title: 'Color shine',
        description: 'O melhor limpador automotivo do mercado, altamente eficaz e durável.',
        img: '/img/color-shine.png',
        price: 35.90,
        id: '0',
    },
    {
        title: 'Conta Griros',
        description: 'Conta-giros de até 12 mil rpm para carros de alta performance',
        img: '/img/conta-giros.png',
        price: 118.00,
        id: '1',
    },
    {
        title: 'Jogo Parachoque e portas',
        description: 'Kit com parachoques e portas pronto',
        img: '/img/jogo-parachoque-portas-palio.png',
        price: 452.00,
        id: '2',
    },
    {
        title: 'Kit Clean Master',
        description: 'Kit completo para carro impecável em todas as partes. A melhor escolha',
        img: '/img/Kit_CleanMaster.png',
        price: 46.45,
        id: '3',
    },
    {
        title: 'Kit suspensão e rodas aro 15',
        description: 'Rodas para VW: Gol, Saveiro, Golf, Polo e Jetta. Alta qualidade e variedade.',
        img: '/img/kit_suspensao.png',
        price: 490.00,
        id: '4',
    },
    {
        title: 'limpa car Jimo',
        description: 'Limpador potente para sujeiras difíceis. Fórmula avançada para limpeza profunda.',
        img: '/img/limpacarJimo.png',
        price: 40.90,
        id: '5',
    }
]

app.get('/', (req, res) => {

    res.render('home',{produtos:produtos})
})

app.get('/produtos/:id', (req,res) => {
    const produto = produtos[parseInt(req.params.id)]
    res.render('prodPage', {produto})
})



app.listen(3004, () => {
    console.log('app funcionando com sucesso')
}) 