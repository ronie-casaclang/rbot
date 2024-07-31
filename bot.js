
function BotMessage(msg)
{
    setTimeout(() => {
        CreateNewMessage(getResponse(msg.toLowerCase()), 2);
    }, 2000);
}

function getResponse(msg)
{
    const choice1 = '\n\n\nPlease just ask me with WHAT, WHY, WHEN, WHERE, and WHO. \nI answer it all about my creation...';
    const choice2 = '\n\n\nHope you get it! Please ask me more with WHAT, WHY, WHEN, WHERE, and WHO. \nLezzzgo human...';

    if (msg === '') return "Hello human, have a great day! 👋\nWill you please greet me just a simple hi or hello?";
    else if (msg.includes('haha')) return "Does I make you laugh? Good for you human." + choice1;
    else if (msg.includes('hello') || msg.includes('hi') || msg.includes('ok') || msg.includes('okay')) 
        return "Glad you came here. Let's start this conversation right now!" + choice1;
    else if (msg === 'what') 
        return "My name is Ronie Chatbot, or you can call me RBot to make it short." + choice2;
    else if (msg === 'who') 
        return "My creator is Master Ronie Casaclang. He has a deep passion and a great love in Software Development. \n\n\nGet to know him more in LinkedIn using this link https://www.linkedin.com/in/ronie-casaclang." + choice2;
    else if (msg === 'why') 
        return "I am created just for fun and just to enhance the skills of my master in web development." + choice2;
    else if (msg === 'when') 
        return "My creation was in day 28th of July in year 2024. I'm completed in approximately 11 hrs." + choice2;
    else if (msg === 'where') 
        return "I am just created in a web development tools such as; HTML, CSS, and JavaScript. \n\n\nHTML (Hypertext Markup Language) - for structure \nCSS (Cascading Style Sheet) - for style and design \nJavaScript - for the functionality" + choice2;
    else return "I'm not sure what you mean, sorry for it human."  + choice1;
}