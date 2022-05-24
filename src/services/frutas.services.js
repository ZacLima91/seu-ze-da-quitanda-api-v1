const frutas = [
    {
      id: 1,
      nome: 'Melancia',
      descricao:
        'Melancia é uma planta da família Cucurbitaceae e do seu fruto. Trata-se de uma trepadeira rastejante originária da África.',
      foto: './assets/images/melancia.png',
      preco: 10.0,
    },
    {
      id: 2,
      nome: 'Banana',
      descricao:
        'Banana, pacoba ou pacova é uma pseudobaga da bananeira, uma planta herbácea vivaz acaule da família Musaceae.',
      foto: './assets/images/banana.png',
      preco: 10.0,
    },
    {
      id: 3,
      nome: 'Uva',
      descricao:
      'A uva é o fruto da videira, uma planta da família das Vitaceae. É utilizada frequentemente para produzir sumo, doce, vinho e passas, podendo também ser consumida ao natural',
      foto: './assets/images/uva.png',
      preco: 7.0,
    },
    {
      id: 4,
      nome: 'Manga',
      descricao:
      'A manga é o fruto da mangueira, árvore frutífera da família Anacardiaceae, nativa do sul e do sudeste asiático desde o leste da Índia até as Filipinas, e introduzida com sucesso no Brasil, em Angola, em Moçambique, Portugal e Espanha',
      foto: './assets/images/manga.png',
      preco: 14.0,
    },
  ];

const findAllFrutasServices = ()=>{
    return frutas;
}

const findByIdFrutasService = (parametroId)=>{
    const fruta = frutas.find((fruta) => fruta.id === parametroId);
    return fruta;
}

const createFrutaService = (newFruta)=>{
    const newId = frutas.length +1;
    newFruta.id = newId;
    frutas.push(newFruta);
    return newFruta;
}

const updateFrutaService = (id, frutaEdit)=>{
    frutaEdit['id'] = id;
    const frutaIndex = frutas.findIndex((fruta) => fruta.id == id);
    frutas[frutaIndex] = frutaEdit;
    return frutaEdit;
}

const deleteFrutaService = (id)=>{
    const frutaIndex = frutas.findIndex((fruta)=> fruta.id == id);
    return frutas.splice(frutaIndex, 1)
}

export default {
    findAllFrutasServices,
    findByIdFrutasService,
    createFrutaService,
    updateFrutaService,
    deleteFrutaService
}
