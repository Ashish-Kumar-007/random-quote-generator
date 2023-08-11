import axios from "axios";

const topics = [
  "age",
  "alone",
  "amazing",
  "anger",
  "architecture",
  "art",
  "attitude",
  "beauty",
  "best",
  "birthday",
  "business",
  "car",
  "change",
  "communications",
  "computers",
  "cool",
  "courage",
  "dad",
  "dating",
  "death",
  "design",
  "dreams",
  "education",
  "environmental",
  "equality",
  "experience",
  "failure",
  "faith",
  "family",
  "famous",
  "fear",
  "fitness",
  "food",
  "forgiveness",
  "freedom",
  "friendship",
  "funny",
  "future",
  "god",
  "good",
  "government",
  "graduation",
  "great",
  "happiness",
  "health",
  "history",
  "home",
  "hope",
  "humor",
  "imagination",
  "inspirational",
  "intelligence",
  "jealousy",
  "knowledge",
  "leadership",
  "learning",
  "legal",
  "life",
  "love",
  "marriage",
  "medical",
  "men",
  "mom",
  "money",
  "morning",
  "movies",
  "success",
];

const getRandomCategory = () => {
  const randomIndex = Math.floor(Math.random() * topics.length);
  return topics[randomIndex];
};

export const generateRandomQuote = () => {
  const category = getRandomCategory();
  const apiUrl = `${process.env.REACT_APP_API_URL}${category}`;
  return axios
    .get(apiUrl, {
      headers: {
        "X-Api-Key": process.env.REACT_APP_API_KEY,
      },
    })
    .then((response) => {
      // Handle the response data
      return response.data[0];
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error:", error);
      throw error; // Re-throw the error to be caught by the caller
    });
};
