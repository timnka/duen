/*

----------- DATAactives.js
This is the active officer data for the Active Officers panel in the OFFICERS page.

********* It exports an array of JSON object constants. ************

Each JSON object has the format:

{
    name: 'Officer Name',
    year: 'Class of []',
    major: '[INSERT MAJOR HERE]',
    cohort: '[TERM] [YEAR] Cohort',
    position: 'President',
    linkedin: 'https://linkedin.com/[officer]',
    image: '/officers/[officer-photo].jpg',
}

******* Each json must follow the above format. If any properties are in a different order as listed above or
even missing, the program will likely crash. *************

This entire project imports all photos from the 'public' directory. 
The path prefix '/' is already set to already reference this folder.
So, if the file 'image1.png' is in the 'folder1' directory in the 'public' directory, reference this file with the file path:
    '/folder1/image1.png'. DO NOT USE THE PATH '/public/folder1/image1.png', IT WILL NOT WORK IF YOU DO SO.
Having '/' be the prefix for the path is already recognized as referencing the 'public' directory.

THIS component will pull images from the directory '/officers' in the 'public' directory.
When updating the photos, add your desired photo in this directory, and update the
exported JSONs with the appropriate image paths and descriptions. The path should be '/officers/[logo-file].png'.

**** Executive board and active officer photos will be in the same directory, the '/officers' directory. ****

The order which you list the officers here is there order they will be displayed
on the webpage.

*/

export const marketing = [
  {
    name: "Hieu Minh To",
    year: "Class of 2027",
    major: "Computer Engineering",
    cohort: "Fall 2024 Cohort",
    position: "Committee Director, Marketing",
    linkedin: "https://www.linkedin.com/in/tovuhieuminh/",
    image: "/officers/Chiv_Sumain.jpg",
  },
  {
    name: "Simone Robson",
    year: "Class of 2026",
    major: "Civil and Environmental Engineering",
    cohort: "Spring 2024 Cohort",
    position: "Marketing",
    linkedin: "https://www.linkedin.com/in/simone-robson1/",
    image: "/officers/Robson_Simone.jpeg",
  },
  {
    name: "Jaclyn Lee",
    year: "Class of 2027",
    major: "Biological Systems Engineering",
    cohort: "Spring 2024 Cohort",
    position: "Marketing",
    linkedin: "https://www.linkedin.com/in/jaclyn-lee-7059841a4/",
    image: "/officers/Lee_Jaclyn.jpg",
  },
  {
    name: 'Cody Chen',
    year: 'Class of 2027',
    major: 'Computer Science and Engineering',
    cohort: 'Spring 2024 Cohort',
    position: 'Marketing',
    linkedin: '',
    image: '/officers/Chen_Cody.jpeg',
  },
  {
    name: 'Maya Chou',
    year: 'Class of 2027',
    major: 'Electrical Engineering',
    cohort: 'Fall 2024 Cohort',
    position: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/maya-chou-350754290/',
    image: '/officers/Chou_Maya.jpeg',
  },
  {  
    name: 'Colin Chu',
    year: 'Class of 2027',
    major: 'Computer Science',
    cohort: 'Spring 2024 Cohort',
    position: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/colinchu27/',
    image: '/officers/Chu_Colin.jpeg',
  },
  {
    name: 'Richard Huang',
    year: 'Class of 2026',
    major: 'Computer Science and Engineering',
    cohort: 'Spring 2024 Cohort',
    position: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/ridhuang/',
    image: '/officers/Huang_Richard.jpeg',
  },
  {
    name: 'Jiya Patel',
    year: 'Class of 2028',
    major: 'Aerospace Engineering',
    cohort: 'Fall 2024 Cohort',
    position: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/jiya-patel-bb0690332/',
    image: '/officers/Patel_Jiya.jpeg',
  },
];
