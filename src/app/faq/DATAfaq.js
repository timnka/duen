/*

----------- DATAfaq.js
This is the frequently asked questions for the the FAQ page.

********* It exports an array of JSON objects. ************

Each JSON object has the format:

{
    question: '[INSERT QUESTION HERE]',
    answer: '[INSERT ANSWER HERE]'
}

******* Each json must follow the above format. If any properties are in a different order as listed above or
even missing, the program will likely crash. *************

The order which you list the Question and Answers JSONs here is there order they will be displayed on the webpage.

*/

export const faqlist = [
    {
        question: 'How tall is Suye?',
        answer: `Matthew Suyetani is 5 feet, 8 inches.`
    },
    {
        question: 'What is the difference between being an officer and a general member?',
        answer: 'I dont know.'
    },
    {
        question: 'What does whatbujitao mean?',
        answer: 'I dont know.'
    },
    
    {
        question: 'I am an underwater basket weaving major, can I join DUEN?',
        answer: 'mayhaps mayhaps.'
    },
]