import './models/database.js'
import challenge from "./models/challenge.js";
import session from "./models/session.js";
import user from "./models/user.js";

//deleting old data
await challenge.deleteMany()
await session.deleteMany()
await user.deleteMany()

console.log("Old data was cleared")

const aUser = await user.create({
  name: "Lola"
});

const challenges = await challenge.insertMany([
  {
    title: "Cook a new dish together",
    description: "Follow a cooking tutorial or recipe and learn new dishes together",
    category: "romantic",
    budget: "medium"
  },
  {
    title: "Movie night with snacks",
    description: "Between eachother get your fav snacks and watch a movie together",
    category: "chill",
    budget: "medium"
  },
  {
    title: "Go for a sunset walk",
    description: "Go out to get some fresh air and talk while watching the sunset",
    category: "romantic",
    budget: "low"
  },
  {
    title: "Try a new restaurant",
    description: "Go together to restaurant you've been wanting to go but never had a good moment or reason to",
    category: "romantic",
    budget: "high"
  },
  {
    title: "Play a competitive game night",
    description: "Loser cleans the dishes!!",
    category: "competitive",
    budget: "low"
  }
]);

await session.insertMany([
  {
    challengeId: challenges[0]._id,
    userId: aUser._id,
    date: new Date(),
    rating: 8,
    notes: "I loved it, might recommend to some friends, it helped me reconect with my partner"
  },
  {
    challengeId: challenges[1]._id,
    userId: aUser._id,
    date: new Date(),
    rating: 7,
    notes: "chill vibesI enjoyed it but maybe not do it again"
  }
]);

process.exit();




