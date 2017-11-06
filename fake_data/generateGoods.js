const faker = require('faker');

function generateGoods(){
  const goods = [];
  for(let i = 0; i < 10; i++){
    const haves = faker.random.boolean(),
          email = faker.internet.email(),
          user = faker.random.uuid(),
          name = faker.company.companyName(),
          postDate = faker.date.recent(),
          desc = faker.lorem.paragraph(),
          qty = faker.random.number(),
          address = faker.address.streetAddress(),
          lat = faker.address.latitude(),
          long = faker.address.longitude(),
          img = faker.image.avatar(),
          pickUpDate = faker.date.future(),
          expDate = faker.date.future(),
          availTime = faker.date.future();

    const categoriesSelection = ['pasta', 'fruits', 'dairy', 'grains', 'oils', 'vegetables'];


    const categories = []

    for(let cat = 0; cat < 2; cat++){
      let randomCategories = categoriesSelection[Math.floor(Math.random() * categoriesSelection.length)]
      categories.push(randomCategories)
    }

    goods.push({
      haves: haves,
      email: email,
      user: user,
      name: name,
      postDate: postDate,
      categories: categories,
      desc: desc,
      qty: qty,
      location: {
        address: address,
        lat: lat,
        long: long,
      },
      img: img,
      pickUpDate: pickUpDate,
      expDate: expDate,
      availTime: availTime
    })
  }
  return {'goods': goods}
}

module.exports = generateGoods
