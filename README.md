<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="https://github.com/Rocketseat/bootcamp-gostack-desafio-02/raw/master/.github/logo.png" width="300px" />
</h1>

<h3 align="center">
  GoStack Second: FastFeet
</h3>

### Feature implemented

Create the first step for fake logistics company app called FastFeet with the following goals:

- User authentication using JWT
- Admin user CREATE
- Recipients CREATE / UPDATE

Second Step of Fastfeet implementation

- Deliverymen LIST / CREATE / UPDATE / DELETE

### Instructions ###
```
yarn install && yarn dev
```
Once yarn is running, all of the requests should point to: http://localhost:3333/.

### Description ###
First step for the development of a fake logistics company app called FastFeet.

Tools and technologies used on this project:

- Javascript ES6
- Node.JS
- Express
- Sucrase + Nodemon
- Sequelize
- PostgreSQL

### Routes ###
#### Sessions ####
| Method | Path      | Params | Body                                | Description            |
| ------ | --------- | ------ | ----------------------------------- | ---------------------- |
| POST   | /sessions | -      | { email: String, password: String } | Create a session token |

#### Users ####
| Method | Path   | Params | Body                                              | Description   |
| ------ | ------ | ------ | ------------------------------------------------- | ------------- |
| POST   | /users | -      | { name: String, email: String, password: String } | Create a user |

#### Recipients ####
| Method | Path            | Params | Body               | Description        |
| ------ | --------------- | ------ | ------------------ | ------------------ |
| POST   | /recipients     | -      | [recipient_object] | Create a recipient |
| PUT    | /recipients/:id | id     | [recipient_object] | Edit recipient     |

```json
  recipient_object = {
    "name": String,
    "street": String,
    "number": String,
    "complement": String,
    "neighborhood": String,
    "city": String,
    "state": String,
    "cep": String
  }
```

#### Deliverymen ####

| Method | Path             | Params | Body                 | Description          |
| ------ | ---------------- | ------ | -------------------- | -------------------- |
| GET    | /deliverymen     | -      | -                    | List all deliverymen |
| POST   | /deliverymen     | -      | [deliveryman_object] | Create a deliveryman |
| PUT    | /deliverymen/:id | id     | [deliveryman_object] | Edit deliveryman     |
| DELETE | /deliverymen/:id | id     | -                    | Delete a deliveryman |

```json
  deliveryman_object = {
    "name": String,
    "email": String,
    "avaitar_id": Number,
  }
```