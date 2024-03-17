db.createCollection('usersCRUD');
db.usersCRUD.insertMany([
    {
        nombres: "John",
        apellidos: "Doe",
        correo: "john.doe@example.com",
        ciudad: "London",
        pais: "United Kingdom",
        salario: 1500,
        edad: 35,
        altura: 180,
        peso: 170
    },
    {
        nombres: "Usuario a eliminar",
        apellidos: "Eliminar",
        correo: "borrar@riwi.io",
        ciudad: "Paris",
        pais: "France",
        salario: 2000,
        edad: 25,
        altura: 160,
        peso: 160
    },
    {
        nombres: "Usuario de Bello",
        apellidos: "Gómez",
        correo: "usuario.bello@example.com",
        ciudad: "Bello",
        pais: "Colombia",
        salario: 3000,
        edad: 40,
        altura: 175,
        peso: 180
    },
    {
        nombres: "Ana",
        apellidos: "García",
        correo: "ana.garcia@example.com",
        ciudad: "Madrid",
        pais: "Spain",
        salario: 2800,
        edad: 28,
        altura: 165,
        peso: 155
    },
    {
        nombres: "Michael",
        apellidos: "Smith",
        correo: "michael.smith@example.com",
        ciudad: "New York",
        pais: "United States",
        salario: 3500,
        edad: 45,
        altura: 190,
        peso: 180
    },
    {
        nombres: "David",
        apellidos: "Martínez",
        correo: "david.martinez@example.com",
        ciudad: "Berlin",
        pais: "Germany",
        salario: 1800,
        edad: 30,
        altura: 170,
        peso: 160
    },
    {
        nombres: "Sophia",
        apellidos: "Johnson",
        correo: "sophia.johnson@example.com",
        ciudad: "Los Angeles",
        pais: "United States",
        salario: 2300,
        edad: 32,
        altura: 175,
        peso: 150
    },
    {
        nombres: "Miguel",
        apellidos: "López",
        correo: "miguel.lopez@example.com",
        ciudad: "Madrid",
        pais: "Spain",
        salario: 2200,
        edad: 35,
        altura: 185,
        peso: 170
    },
    {
        nombres: "Isabella",
        apellidos: "Brown",
        correo: "isabella.brown@example.com",
        ciudad: "Toronto",
        pais: "Canada",
        salario: 2500,
        edad: 38,
        altura: 180,
        peso: 190
    },
    {
        nombres: "Ethan",
        apellidos: "Miller",
        correo: "ethan.miller@example.com",
        ciudad: "Chicago",
        pais: "United States",
        salario: 2700,
        edad: 40,
        altura: 192,
        peso: 195
    },
    // Otros 40 usuarios aleatorios ...
    {
        nombres: "Lucía",
        apellidos: "Gutiérrez",
        correo: "lucia.gutierrez@example.com",
        ciudad: "Barcelona",
        pais: "Spain",
        salario: 3100,
        edad: 34,
        altura: 170,
        peso: 160
    },
    {
        nombres: "Alexander",
        apellidos: "Lee",
        correo: "alexander.lee@example.com",
        ciudad: "Vancouver",
        pais: "Canada",
        salario: 2800,
        edad: 42,
        altura: 180,
        peso: 170
    },
    {
        nombres: "Emma",
        apellidos: "White",
        correo: "emma.white@example.com",
        ciudad: "Berlin",
        pais: "Germany",
        salario: 2000,
        edad: 29,
        altura: 168,
        peso: 150
    },
    {
        nombres: "Liam",
        apellidos: "Taylor",
        correo: "liam.taylor@example.com",
        ciudad: "Los Angeles",
        pais: "United States",
        salario: 3200,
        edad: 37,
        altura: 178,
        peso: 180
    },
    {
        nombres: "Valentina",
        apellidos: "Rojas",
        correo: "valentina.rojas@example.com",
        ciudad: "Bogotá",
        pais: "Colombia",
        salario: 2600,
        edad: 33,
        altura: 172,
        peso: 165
    },
    {
        nombres: "Oliver",
        apellidos: "Anderson",
        correo: "oliver.anderson@example.com",
        ciudad: "Madrid",
        pais: "Spain",
        salario: 2700,
        edad: 31,
        altura: 175,
        peso: 195
    },
    {
        nombres: "Juan",
        apellidos: "Gómez",
        correo: "juan.gomez@example.com",
        ciudad: "Bogotá",
        pais: "Colombia",
        salario: 2500,
        edad: 30,
        altura: 175,
        peso: 70
    },
    {
        nombres: "María",
        apellidos: "Martínez",
        correo: "maria.martinez@example.com",
        ciudad: "Madrid",
        pais: "España",
        salario: 3000,
        edad: 28,
        altura: 165,
        peso: 60
    },
    {
        nombres: "John",
        apellidos: "Smith",
        correo: "john.smith@example.com",
        ciudad: "New York",
        pais: "United States",
        salario: 4000,
        edad: 35,
        altura: 180,
        peso: 80
    },
    {
        nombres: "Sophie",
        apellidos: "Johnson",
        correo: "sophie.johnson@example.com",
        ciudad: "London",
        pais: "United Kingdom",
        salario: 3500,
        edad: 32,
        altura: 170,
        peso: 65
    },
    {
        nombres: "Hans",
        apellidos: "Schmidt",
        correo: "hans.schmidt@example.com",
        ciudad: "Berlin",
        pais: "Germany",
        salario: 3200,
        edad: 40,
        altura: 185,
        peso: 90
    },
    {
        nombres: "Ana",
        apellidos: "García",
        correo: "ana.garcia@example.com",
        ciudad: "Barcelona",
        pais: "Spain",
        salario: 2800,
        edad: 29,
        altura: 160,
        peso: 55
    },
    {
        nombres: "Emily",
        apellidos: "Brown",
        correo: "emily.brown@example.com",
        ciudad: "Los Angeles",
        pais: "United States",
        salario: 3200,
        edad: 33,
        altura: 175,
        peso: 70
    },
    {
        nombres: "Luca",
        apellidos: "Rossi",
        correo: "luca.rossi@example.com",
        ciudad: "Rome",
        pais: "Italy",
        salario: 2900,
        edad: 36,
        altura: 170,
        peso: 75
    },
    {
        nombres: "Sofía",
        apellidos: "Hernández",
        correo: "sofia.hernandez@example.com",
        ciudad: "Mexico City",
        pais: "Mexico",
        salario: 2600,
        edad: 31,
        altura: 165,
        peso: 63
    },
    {
        nombres: "Maximilian",
        apellidos: "Müller",
        correo: "maximilian.muller@example.com",
        ciudad: "Munich",
        pais: "Germany",
        salario: 3100,
        edad: 38,
        altura: 180,
        peso: 85
    },
    {
        nombres: "Isabella",
        apellidos: "Fernández",
        correo: "isabella.fernandez@example.com",
        ciudad: "Barcelona",
        pais: "Spain",
        salario: 2700,
        edad: 27,
        altura: 168,
        peso: 58
    },
    {
        nombres: "Gabriel",
        apellidos: "Silva",
        correo: "gabriel.silva@example.com",
        ciudad: "Rio de Janeiro",
        pais: "Brazil",
        salario: 2800,
        edad: 32,
        altura: 175,
        peso: 72
    },
    {
        nombres: "Emma",
        apellidos: "White",
        correo: "emma.white@example.com",
        ciudad: "Toronto",
        pais: "Canada",
        salario: 3300,
        edad: 34,
        altura: 170,
        peso: 68
    },
    {
        nombres: "Liam",
        apellidos: "Taylor",
        correo: "liam.taylor@example.com",
        ciudad: "Chicago",
        pais: "United States",
        salario: 3100,
        edad: 35,
        altura: 182,
        peso: 78
    },
    {
        nombres: "Olivia",
        apellidos: "Johnson",
        correo: "olivia.johnson@example.com",
        ciudad: "Sydney",
        pais: "Australia",
        salario: 2900,
        edad: 30,
        altura: 167,
        peso: 60
    },
    {
        nombres: "Noah",
        apellidos: "Anderson",
        correo: "noah.anderson@example.com",
        ciudad: "Oslo",
        pais: "Norway",
        salario: 3000,
        edad: 34,
        altura: 180,
        peso: 82
    },
    {
        nombres: "Ava",
        apellidos: "Martinez",
        correo: "ava.martinez@example.com",
        ciudad: "Madrid",
        pais: "Spain",
        salario: 2800,
        edad: 31,
        altura: 165,
        peso: 63
    },
    {
        nombres: "William",
        apellidos: "García",
        correo: "william.garcia@example.com",
        ciudad: "Mexico City",
        pais: "Mexico",
        salario: 3000,
        edad: 36,
        altura: 175,
        peso: 75
    },
    {
        nombres: "Mia",
        apellidos: "Brown",
        correo: "mia.brown@example.com",
        ciudad: "Los Angeles",
        pais: "United States",
        salario: 3200,
        edad: 33,
        altura: 170,
        peso: 65
    },
    {
        nombres: "Oliver",
        apellidos: "Lee",
        correo: "oliver.lee@example.com",
        ciudad: "Sydney",
        pais: "Australia",
        salario: 3000,
        edad: 37,
        altura: 178,
        peso: 80
    }
])

db.usersCRUD.insertOne({
    nombres: "Pedro",
    apellidos: "Perez",
    correo: "otro@riwi.net",
    ciudad: "Miami",
    pais: "Estados Unidos",
    salario: 7000,
    edad: 70,
    altura: 150,
    peso: 210
})

//Actividad 2 Eliminar

//Ejercicio 1: Eliminar todos los usuarios que tienen un salario menor que 2000 dólares.
db.usersCRUD.deleteMany({salario: {$eq: 2000}})

//Ejercicio 2: Eliminar usuarios que tienen una edad menor que 25 años.
db.usersCRUD.deleteMany({edad: {$lt: 25}})

//Ejercicio 3: Borrar todos los usuarios que viven en "París".
db.usersCRUD.deleteMany({ciudad: "París"})

//Ejercicio 4: Eliminar usuarios que tienen un peso superior a 180 libras.
db.usersCRUD.deleteMany({peso: {$gt: 180}})

//Ejercicio 5: Eliminar usuarios que tienen una altura inferior a 160 centímetros.
db.usersCRUD.deleteMany({altura: {$lt: 160}})

//Ejercicio 6: Eliminar todos los usuarios que tienen el nombre "John" y el apellido "Doe".
db.usersCRUD.deleteMany({
    $and: [
        {nombres: "John"},
        {apellidos: "Doe"}
    ]
})

//Ejercicio 7: Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com".
db.usersCRUD.deleteMany({correo: "borrar@riwi.io"})

//Ejercicio 8: Eliminar usuarios que no tienen una dirección de correo electrónico registrada.
db.usersCRUD.deleteMany({correo: {$exists: false}})

//Ejercicio 9: Eliminar usuarios que viven en "Tokyo".
db.usersCRUD.deleteMany({ciudad: "Tokyo"})

//Ejercicio 10: Borrar todos los usuarios que son menores de 18 años.
db.usersCRUD.deleteMany({edad: {$lt: 18}})

//Ejercicio 11: Eliminar usuarios que tienen un salario igual a 0.
db.usersCRUD.deleteMany({salario: {$eq: 0}})

//Ejercicio 12: Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.
db.usersCRUD.deleteMany({
    $and: [
        {ciudad: "New York"},
        {salario: {$gt: 5000}}
    ]
})

//Ejercicio 13: Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".
db.usersCRUD.deleteMany({
    correo: {
        $regex: /spam/i
    }
})

//Ejercicio 14: Borrar usuarios que viven en "Bello" y tienen más de 50 años.
db.usersCRUD.deleteMany({
    $and: [
        {ciudad: "Bello"},
        {edad: {$gt: 50}}
    ]
})

//Ejercicio 15: Eliminar todos los usuarios que tienen el apellido "González".

db.usersCRUD.deleteMany({
    apellidos: "González"
})

//Ejercicio 16: Borrar usuarios que tienen una edad superior a 70 años.

db.usersCRUD.deleteMany({
    edad: {$gt: 70}
})

//Ejercicio 17: Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.
db.usersCRUD.deleteMany({
    $and: [
        {pais: "Canadá"},
        {salario: {$lt: 4000}}
    ]
})

//Ejercicio 18: Borrar usuarios que tienen un salario entre 1000 y 2000 dólares.

db.usersCRUD.deleteMany({
    salario: {$gte: 1000, $lte: 2000}
})

//Ejercicio 19: Eliminar usuarios que tienen una edad igual a 30 años.
db.usersCRUD.deleteMany({
    edad: {$eq: 30}
})

//Ejercicio 20: Borrar usuarios que tienen una altura superior a 190 centímetros.
db.usersCRUD.deleteMany({
    altura: {$gt: 190}
})

//Actividad 3 Actualizar

//Ejercicio 1: Incrementar el salario de todos los usuarios en un 10%.
db.usersCRUD.updateMany(
    {},
    {$mul: {salario: 1.1}}
)

//Ejercicio 2: Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".
db.usersCRUD.updateMany(
    {ciudad: "New York"},
    {$set: {ciudad: "Los Angeles"}}
)

//Ejercicio 3: Agregar el correo electrónico "nuevo@riwi.com" al usuario con nombre "Juan" y apellido "Perez".
db.usersCRUD.updateMany(
    {$and: [
            {nombres: "Juan"},
            {apellidos: "Perez"}
        ]
    },
    {$set: {correo: "nuevo@riwi.com"}}
)

//Ejercicio 4: Actualizar la edad del usuario con correo electrónico "ejemplo@riwi.es" a 35 años.
db.usersCRUD.updateMany(
    {correo: "ejemplo@riwi.es"},
    {$set: {edad: 35}}
)

//Ejercicio 5: Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".
db.usersCRUD.updateMany(
    {pais: "Mexico"},
    {$set: {pais: "Canada"}}
)

//Ejercicio 6: Aumentar la altura de todos los usuarios en 5 centímetros.
db.usersCRUD.updateMany(
    {},
    {$inc: {altura: 5}}
)

//Ejercicio 7: Cambiar el apellido del usuario con correo electrónico "otro@riwi.net" a "González".
db.usersCRUD.updateMany(
    {correo: "otro@riwi.net"},
    {$set: {apellidos: "González"}}
)

//Ejercicio 8: Actualizar el peso del usuario con nombre "Maria" a 140 libras.
db.usersCRUD.updateMany(
    {nombres: "Maria"},
    {$set: {peso: 140}}
)

//Ejercicio 9: Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%.
db.usersCRUD.updateMany(
    {pais: "Estados Unidos"},
    {$mul: {salario: 1.15}}
)

//Ejercicio 10: Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co".
db.usersCRUD.updateMany(
    {nombres: "Pedro"},
    {$set: {correo: "nuevo_correo@riwi.co"}}
)

//Ejercicio 11: Cambiar la edad de todos los usuarios menores de 30 años a 30 años.
db.usersCRUD.updateMany(
    {edad: {$lt: 30}},
    {$set: {edad: 30}}
)

//Ejercicio 12: Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%.
db.usersCRUD.updateMany(
    {salario: {$lt: 3000}},
    {$mul: {salario: 1.2}}
)

//Ejercicio 13: Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín".
db.usersCRUD.updateMany(
    {ciudad: "Bogotá"},
    {$set: {ciudad: "Medellín"}}
)

//Ejercicio 14: Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia".
db.usersCRUD.updateMany(
    {salario: {$gt: 5000}},
    {$set: {pais: "Australia"}}
)

//Ejercicio 15: Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años.
db.usersCRUD.updateMany(
    {edad: {$gt: 50}},
    {$inc: {edad: -5}}
)

//Ejercicio 16: Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras.
db.usersCRUD.updateMany(
    {peso: {$gt: 200}},
    {$set: {peso: 180}}
)

//Ejercicio 17: Incrementar el salario de los usuarios que viven en "London" en un 25%.
db.usersCRUD.updateMany(
    {ciudad: "London"},
    {$mul: {salario: 1.25}}
)

//Ejercicio 18: Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith".
db.usersCRUD.updateMany(
    {salario: {$gt: 4000}},
    {$set: {apellidos: "Smith"}}
)

//Ejercicio 19: Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es".
db.usersCRUD.updateMany(
    {nombres: {$regex: /^A/}},
    {$set: {correo: "nuevo@riwi.es"}}
)

//Ejercicio 20: Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".
db.usersCRUD.updateMany(
    {altura: {$lt: 160}},
    {$set: {ciudad: "París"}}
)