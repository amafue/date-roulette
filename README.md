# Date Rouletee
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
From the terminal:
```bash
#Clone this repository
git clone https://github.com/amafue/date-roulette.git

#Go into the repository
cd date-roulette

#Set up Backend
cd backend
npm install
npm run dev

#Set up Frontend, here you need to open a new terminal besides
cd frontend
npm install
npm run dev
```
To seed the database:
```bash
cd backend
npm run seed
```

## API Endpoints

### Challenges
GET /challenges → Get all challenges
POST /challenges/create → Create a challenge
GET /challenges/random → Get random challenge
PUT /challenges/:id → Update a challenge
DELETE /challenges/:id → Delete a challenge

### Sessions
POST /sessions/create → Create session
GET /sessions/:id → Get session details
GET /sessions → Get History sessions

