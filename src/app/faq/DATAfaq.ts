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
        question: 'Is DUEN only open to engineering majors?',
        answer: `No, DUEN is open to all UC Davis students with an interest in engineering and/or computer science!`
    },
    {
        question: 'I want to apply to become an officer. How do I apply?',
        answer: 'Come visit us at our in-person Welcome Week events, usually at the beginning of the Fall and Spring quarters. Here, we will discuss what the application process looks like and answer any questions you may have. We are looking forward to meeting you!'
    },
    {
        question: 'When do you guys open recruitment?',
        answer: 'We open recruitment up at the beginning of Fall and Spring quarters every year.'
    },
    {
        question: 'What is the difference between being an officer and a general member?',
        answer: 'A general member is able to attend workshops and other public events with no commitment required. An officer, however, will take on high impact leadership roles in the planning, marketing, and execution of events designed to connect the greater UC Davis engineering community. In addition, officers complete our simulated internship program with a cohort of like-minded students and gain full access to our alumni network. '
    },
    {
        question: 'How can I stay updated on upcoming events and recruitment? ',
        answer: 'Follow us on Instagram @duen_ucd for updates! In addition, fill out our interest form and join our Discord to stay updated on major events.'
    },
    
    {
        question: 'When was DUEN founded?',
        answer: 'DUEN was founded in November of 2022.'
    },
    
    
]