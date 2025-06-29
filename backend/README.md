# Coffee Shop Backend

## Getting Started

### Installing Dependencies

#### Python 3.7

Follow instructions to install the latest version of python for your platform in the [python docs](https://docs.python.org/3/using/unix.html#getting-and-installing-the-latest-version-of-python)

#### Virtual Environment

We recommend working within a virtual environment whenever using Python for projects. This keeps your dependencies for each project separate and organized. Instructions for setting up a virtual environment for your platform can be found in the [python docs](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)

#### PIP Dependencies

Once you have your virtual environment setup and running, install dependencies by naviging to the `/backend` directory and running:

```bash
pip install -r requirements.txt
```

This will install all of the required packages we selected within the `requirements.txt` file.

##### Key Dependencies

- [Flask](http://flask.pocoo.org/) is a lightweight backend microservices framework. Flask is required to handle requests and responses.

- [SQLAlchemy](https://www.sqlalchemy.org/) and [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/) are libraries to handle the lightweight sqlite database. Since we want you to focus on auth, we handle the heavy lift for you in `./src/database/models.py`. We recommend skimming this code first so you know how to interface with the Drink model.

- [jose](https://python-jose.readthedocs.io/en/latest/) JavaScript Object Signing and Encryption for JWTs. Useful for encoding, decoding, and verifying JWTS.

## Running the server

From within the `./src` directory first ensure you are working using your created virtual environment.

Each time you open a new terminal session, run:

```bash
export FLASK_APP=api.py;
```

To run the server, execute:

```bash
flask run --reload
```

The `--reload` flag will detect file changes and restart the server automatically.

## Tasks

### Setup Auth0

1. Create a new Auth0 Account
2. Select a unique tenant domain
3. Create a new, single page web application
4. Create a new API
   - in API Settings:
     - Enable RBAC
     - Enable Add Permissions in the Access Token
5. Create new API permissions:
   - `get:drinks`
   - `get:drinks-detail`
   - `post:drinks`
   - `patch:drinks`
   - `delete:drinks`
6. Create new roles for:
   - Barista
     - can `get:drinks-detail`
   - Manager
     - can perform all actions
7. Test your endpoints with [Postman](https://getpostman.com).
   - Register 2 users - assign the Barista role to one and Manager role to the other.
   - Sign into each account and make note of the JWT.
   - Import the postman collection `./starter_code/backend/udacity-fsnd-udaspicelatte.postman_collection.json`
   - Right-clicking the collection folder for barista and manager, navigate to the authorization tab, and including the JWT in the token field (you should have noted these JWTs).
   - Run the collection and correct any errors.
   - Export the collection overwriting the one we've included so that we have your proper JWTs during review!

### Implement The Server

1. `./src/auth/auth.py`
2. `./src/api.py`

## Endpoints
### Categories

#### `GET /drinks`

##### `Permissons: None`

- Fetches all the drinks from the database
- Request Arguments : None
- Returns: a list of drinks `Short-Format`

#### `Response`
```json
{ 
    "success": true,
    "drinks": [
        {
            "id" : 1, 
            "title" : "Mocha",
            "recipe" : {
              "color": "Brownish",
              "parts": "Chocolate, Coffee"
            }
        },
        {
            "id" : 2, 
            "title" : "Cappuccino",
            "recipe" : {
              "color": "Yellowish",
              "parts": "Milk, Espresso"
            }
        }
    ]
}
```

#### `GET /drinks-detail`

##### `Permissons: get:drinks-detail`

- Fetches all the drinks from the database
- Request Arguments : Token payload
- Returns: a list of drinks `Long-Format`

#### `Response`
```json
{
    "drinks": [
        {
            "id": 1,
            "recipe": [
                {
                    "color": "Latte",
                    "name": "coffee",
                    "parts": 1
                }
            ],
            "title": "coffee"
        },        
        {
            "id": 3,
            "recipe": [
                {
                    "color": "white",
                    "name": "Jasmine tea",
                    "parts": 1
                }
            ],
            "title": "Tea"
        }
    ],
    "success": true
}
```

#### `POST /drinks`

##### `Permissons: post:drinks`

- Inserts a drink to the db using the information provided
- Request Arguments : Token payload
- Returns: the inserted drink `Long-Format`

#### `Response`
```json
{
    "drinks": [
        {
            "id": 3,
            "recipe": [
                {
                    "color": "white",
                    "name": "Jasmine tea",
                    "parts": 1
                }
            ],
            "title": "Tea"
        }
    ],
    "success": true
}
```

#### `PATCH /drinks/<int:drink_id>`

##### `Permissons: patch:drinks`

- Updates drink information and commit the changes to the db
- Request Arguments : Token payload and drink id
- Returns: the updated drink `Long-Format`

#### `Response`
```json
{
    "drinks": [
        {
            "id": 1,
            "recipe": [
                {
                    "color": "pale brown",
                    "name": "Latee",
                    "parts": 1
                }
            ],
            "title": "Coffee"
        }
    ],
    "success": true
}
```

#### `DELETE /drinks/<int:drink_id>`

##### `Permissons: delete:drinks`

- Updates drink information and commit the changes to the db
- Request Arguments : Token payload and drink id
- Returns: success message

#### `Response`
```json
{
    "delete": 1,
    "success": true
}
```

## Status Codes
- `200` : OK
- `401` : Unauthorized
- `404` : resource not found
- `422` : The request can not be processed