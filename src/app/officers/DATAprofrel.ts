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

export const profrel = [
  {
    name: 'Gavin Pasillas',
    year: 'Class of 2027',
    major: 'Chemical Engineering',
    cohort: 'Spring 2024 Cohort',
    position: 'Committee Director, Professional Relations',
    linkedin: 'https://www.linkedin.com/in/gavinpas/',
    image: '/officers/Pasillas_Gavin.jpeg',
  },
  {
    name: 'Arnav Akula',
    year: 'Class of 2026',
    major: 'Computer Science and Statistics',
    cohort: 'Spring 2025 Cohort',
    position: 'Professional Relations',
    linkedin: 'https://www.linkedin.com/in/arnavakula/',
    image: '/officers/Akula_Arnav.jpg',
  },
  {
    name: 'Ellaina Kimura',
    year: 'Class of 2029',
    major: 'Biomedical Engineering',
    cohort: 'Fall 2025 Cohort',
    position: 'Professional Relations',
    linkedin: 'https://www.linkedin.com/in/ellaina-kimura-176b74389/',
    image: '/officers/Kimura_Ellaina.jpeg',
  },
  {
    name: 'Hishaan Rajwani',
    year: 'Class of 2028',
    major: 'Computer Science and Engineering',
    cohort: 'Spring 2025 Cohort',
    position: 'Professional Relations',
    linkedin: 'https://www.linkedin.com/in/hishaanrajwani/',
    image: '/officers/Rajwani_Hishaan.jpeg',
  },
  {
    name: 'Kaitlyn Hahn',
    year: 'Class of 2027',
    major: 'Computer Science',
    cohort: 'Spring 2025 Cohort',
    position: 'Professional Relations',
    linkedin: 'https://www.linkedin.com/in/kaitlyn-hahn/',
    image: '/officers/Hahn Kaitlyn.JPG',
  },
  {
    name: 'Lianne R. De Leon',
    year: 'Class of 2027',
    major: 'Mechanical Engineering',
    cohort: 'Spring 2025 Cohort',
    position: 'Professional Relations',
    linkedin: 'https://www.linkedin.com/in/liannerdl/',
    image: '/officers/Leon_Lianne.jpg',
  },
  // {
  //   name: 'Sukhman Kahlon',
  //   year: 'Class of 2025',
  //   major: 'Electrical Engineering',
  //   cohort: 'Fall 2024 Cohort',
  //   position: 'Professional Relations',
  //   linkedin: 'https://www.linkedin.com/in/sukhmankahlon/',
  //   image: '/officers/Chu_Colin.jpeg',
  // },
  {
    name: 'Ryan Nguyen',
    year: 'Class of 2027',
    major: 'Electrical Engineering',
    cohort: 'Spring 2025 Cohort',
    position: 'Career Development',
    linkedin: 'https://www.linkedin.com/in/ryan-nguyen-davis/',
    image: '/officers/Nguyen_Ryan.jpeg',
  },
  {
    name: 'Saatvik Subramaniam',
    year: 'Class of 2027',
    major: 'Electrical Engineering',
    cohort: 'Spring 2025 Cohort',
    position: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/saatvik-subramaniam/',
    image: '/officers/Subramaniam_Saatvik.JPG',
  },
  {
    name: 'Sumain Chiv',
    year: 'Class of 2026',
    major: 'Mechanical Engineering',
    cohort: 'Spring 2024 Cohort',
    position: 'Professional Relations',
    linkedin: 'https://www.linkedin.com/in/sumain-chiv/',
    image: '/officers/Chiv_Sumain.jpeg',
  }
  // {
  //   name: 'Vikram Gopalan',
  //   year: 'Class of 2025',
  //   major: 'Materials Science and Engineering',
  //   cohort: 'Spring 2023 Cohort',
  //   position: 'Professional Relations',
  //   linkedin: 'https://www.linkedin.com/in/vikramgopalan65/',
  //   image: '/officers/Gopalan_Vikram.jpg',
  // },
  
];
