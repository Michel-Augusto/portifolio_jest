const { pokemonData, berrieData } = require('./api');
const { berrieContract } = require('./fixtures');


test('Validação de Campos na Resposta da Requisição GET /pokemon', async () => {
  const data = await pokemonData();

  expect(data).toHaveProperty('id');
  expect(data.id).toEqual(25);

  expect(data).toHaveProperty('name');
  expect(data.name).toEqual('pikachu')

  expect(data).toHaveProperty('types');
  expect(data.types).toBeInstanceOf(Array);
  expect(data.types[0]).toHaveProperty('type');
  expect(data.types[0].type).toHaveProperty('name');
  expect(data.types[0].type.name).toEqual('electric')
});


test('Validação de Campos na Resposta da Requisição GET /berry', async () => {
  const data = await berrieData();

  expect(data).toHaveProperty('id');
  expect(data.id).toEqual(1);

  expect(data).toHaveProperty('name');
  expect(data.name).toEqual('cheri');

  expect(data).toHaveProperty('flavors');
  expect(data.flavors).toBeInstanceOf(Array);
  expect(data.flavors[0].flavor).toHaveProperty('name');
  expect(data.flavors[0].flavor.name).toEqual('spicy');

  expect(data).toHaveProperty('item');
  expect(data.item).toHaveProperty('name');
  expect(data.item.name).toEqual('cheri-berry');
});


test('Validação do contrato da berry cheri', async () => {
  const data = berrieContract;

  expect(data).toHaveProperty('id');
  expect(data.id).toEqual(expect.any(Number));

  expect(data).toHaveProperty('name');
  expect(data.name).toEqual(expect.any(String));

  expect(data).toHaveProperty('growth_time');
  expect(data.growth_time).toEqual(expect.any(Number));

  expect(data).toHaveProperty('max_harvest');
  expect(data.max_harvest).toEqual(expect.any(Number));

  expect(data).toHaveProperty('natural_gift_power');
  expect(data.natural_gift_power).toEqual(expect.any(Number));

  expect(data).toHaveProperty('size');
  expect(data.size).toEqual(expect.any(Number));

  expect(data).toHaveProperty('smoothness');
  expect(data.smoothness).toEqual(expect.any(Number));

  expect(data).toHaveProperty('soil_dryness');
  expect(data.soil_dryness).toEqual(expect.any(Number));

  expect(data).toHaveProperty('firmness');
  expect(data.firmness).toHaveProperty('name');
  expect(data.firmness.name).toEqual(expect.any(String));
  expect(data.firmness).toHaveProperty('url');
  expect(data.firmness.url).toEqual(expect.any(String));

  expect(data).toHaveProperty('flavors');
  expect(data.flavors).toBeInstanceOf(Array);
  expect(data.flavors[0]).toHaveProperty('potency');
  expect(data.flavors[0].potency).toEqual(expect.any(Number));
  expect(data.flavors[0]).toHaveProperty('flavor');
  expect(data.flavors[0].flavor).toHaveProperty('name');
  expect(data.flavors[0].flavor.name).toEqual(expect.any(String));
  expect(data.flavors[0].flavor).toHaveProperty('url');
  expect(data.flavors[0].flavor.url).toEqual(expect.any(String));

  expect(data).toHaveProperty('item');
  expect(data.item).toHaveProperty('name');
  expect(data.item.name).toEqual(expect.any(String));

  expect(data.item).toHaveProperty('url');
  expect(data.item.url).toEqual(expect.any(String));

  expect(data).toHaveProperty('natural_gift_type');
  expect(data.natural_gift_type).toHaveProperty('name');
  expect(data.natural_gift_type.name).toEqual(expect.any(String));
  expect(data.natural_gift_type).toHaveProperty('url');
  expect(data.natural_gift_type.url).toEqual(expect.any(String));
});