const faker = require('faker');

function generateUsers(){
  const users = [];
  for(let i = 0; i < 10; i++){
    const name = faker.name.firstName(),
        id = faker.random.uuid(),
        email = faker.internet.email(),
        phone = faker.phone.phoneNumber(),
        password = faker.internet.password(),
        location = faker.address.streetAddress(),
        description = faker.lorem.sentence();
        latitude = faker.address.latitude();
        longitude = faker.address.longitude();

    users.push({
      'id': id,
      'name': name,
      'email': email,
      'phone': phone,
      'password': password,
      'location': {
        'address': location,
        'latitude': latitude,
        'longitude': longitude,
      },
      'description': description
    })
  }

  return {'users': users}
}

module.exports = generateUsers
