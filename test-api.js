import fs from 'fs';
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = "AIzaSyDgD_2ZBB7Kpa3jufPxnERXEccvJJH_4tA";
const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
    let output = "Testing gemini-2.5-flash...\n";
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const result = await model.generateContent("Is 1+1 equal to 2?");
        output += "Success: " + result.response.text();
    } catch (e) {
        output += "Error: " + e.message;
    }
    fs.writeFileSync('api-test-output.txt', output, 'utf8');
}
run();
