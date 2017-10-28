var faker = require('faker');

function generateUsers(){
  var users = [];
  for(var i = 0; i < 150; i++){
    var name = faker.name.firstName(),
        id = faker.random.uuid(),
        email = faker.internet.email(),
        phone = faker.phone.phoneNumber(),
        password = faker.internet.password(),
        location = faker.address.streetAddress(),
        description = faker.lorem.sentence();

    users.push({
      'id': id,
      'name': name,
      'email': email,
      'phone': phone,
      'password': password,
      'location': location,
      'description': description
    })
  }

  return {'users': users}
}

module.exports = generateUsers
