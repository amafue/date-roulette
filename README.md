# Date Roulette
A dating ideas randomizer that generates challenges for couples to spend quality time together.

## Key Features

- Add sessions to a history
- Random challenge generator
- Add/create new challenges
- Delete existing challenges
- Customize challenges
- Filter (budget/category)

## How To Use

For cloning and running this application it is required to use Git and have Node.js installed on the computer.  
From the terminal writte the following:
```bash
#Clone this repository
git clone https://github.com/amafue/date-roulette.git

#Go into the repository
cd date-roulette

#Set up Backend
cd backend
npm install
npm run dev  #http://localhost:5001
```
```.env
#Still inside backend folder create a .env file with the following:
PORT=5001
MONGODB_URI=mongodb+srv://<your_user>:<your_password>@<your_cluster>.mongodb.net/date-roulette-clouster
```

```bash
#Set up Frontend
#here you need to open a new terminal while the backend is also running on its own terminal
cd frontend
npm install
npm run dev  #http://localhost:5173
```
To seed the database:
```bash
cd backend
npm run seed
```

## API Endpoints

### Challenges
GET /challenges → Get list of challenges  
POST /challenges/create → Create a challenge  
GET /challenges/random → Get random challenge  
PUT /challenges/:id → Update a challenge  
DELETE /challenges/:id → Delete a challenge  

### Sessions
POST /sessions/create → Create session  
GET /sessions/:id → Get session details  
GET /sessions → Get History sessions  

