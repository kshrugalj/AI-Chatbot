import groq from './config/groq.js'
import readlineSync from 'readline-sync';
import colors from 'colors';

export async function main() {

    console.log(colors.bold.blue("Welcome to the ChatBot!"))
    console.log(colors.bold.blue("Do you need any help?"))

    const chatHistory = [];

    while (true){
        const userInput = readlineSync.question(colors.white('You: '));

        try {
            
            const chatCompletion = await groq.chat.completions.create({
                messages: [
                  {
                    role: "user",
                    content: userInput,
                  },
                ],
                model: "llama3-8b-8192",
              });
              const completionText = chatCompletion.choices[0]?.message?.content || "";


            if (userInput.toLowerCase()=== 'exit'){
                console.log(colors.green('Bot: ')+completionText);

                return;
            }
            console.log(colors.green('Bot: ')+completionText);

        } catch (error){
            console.error(colors.red(error));
        }
    }
}



main();
