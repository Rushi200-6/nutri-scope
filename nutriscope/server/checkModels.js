import fetch from "node-fetch";

const API_KEY = "AIzaSyAwTdxQefYU9uIMQ6Q65VP0hHyDbyjFkug";

async function listModels() {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`
  );
  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
}

listModels();
