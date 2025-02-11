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
    name: 'Desiree Poon',
    year: 'Class of 2028',
    major: 'Biochemistry and Biomedical Engineering',
    cohort: 'Fall 2024 Cohort',
    position: 'Committee Director, Professional Relations',
    linkedin: 'https://www.linkedin.com/in/desiree-poon-86b334328/',
    image: '/officers/Chiv_Sumain.jpg',
  },
  {
    name: 'Adrian Chan',
    year: 'Class of 2026',
    major: 'Aerospace Engineering',
    cohort: 'Fall 2023 Cohort',
    position: 'Professional Relations',
    linkedin: 'https://www.linkedin.com/in/adriansc004',
    image: '/officers/Chan_Adrian.jpg',
  },
  {
    name: 'Braeden Wagner',
    year: 'Class of 2025',
    major: 'Electrical Engineering',
    cohort: 'Spring 2024 Cohort',
    position: 'Professional Relations',
    linkedin: 'https://www.linkedin.com/in/braedenwagner/',
    image: '/officers/Wagner_Braeden.jpg',
  },
  {
    name: 'Kyoungdeok Han',
    year: 'Class of 2027',
    major: 'Computer Science',
    cohort: 'Fall 2023 Cohort',
    position: 'Professional Relations',
    linkedin: '',
    image: '/officers/Han_KD.jpeg',
  },
  {
    name: 'Nina Dao',
    year: 'Class of 2028',
    major: 'Mechanical Engineering',
    cohort: 'Fall 2024 Cohort',
    position: 'Professional Relations',
    linkedin: 'https://www.linkedin.com/in/nina-dao-98a034272/',
    image: '/officers/Dao_Nina.jpeg',
  },
  {
    name: 'Paige Phung',
    year: 'Class of 2027',
    major: 'Mechanical Engineering and Aerospace Engineering',
    cohort: 'Fall 2024 Cohort',
    position: 'Professional Relations',
    linkedin: 'https://www.linkedin.com/in/paige-phung/',
    image: '/officers/Phung_Paige.jpg',
  },
  {
    name: 'Sukhman Kahlon',
    year: 'Class of 2025',
    major: 'Electrical Engineering',
    cohort: 'Fall 2024 Cohort',
    position: 'Professional Relations',
    linkedin: 'https://www.linkedin.com/in/sukhmankahlon/',
    image: '/officers/Chiv_Sumain.jpg',
  },
  {
    name: 'Kanvar Austin Sidhu',
    year: 'Class of 2027',
    major: 'Computer Engineering',
    cohort: 'Fall 2024 Cohort',
    position: 'Professional Relations',
    linkedin: 'https://www.linkedin.com/in/kanvar-austin-sidhu/',
    image: '/officers/Chiv_Sumain.jpg',
  },
  // {
  //   name: 'Cory Cadavona',
  //   year: 'Class of 2025',
  //   major: 'Computer Engineering',
  //   cohort: 'Spring 2023 Cohort',
  //   position: 'Professional Relations',
  //   linkedin: 'https://www.linkedin.com/in/corycadavona/',
  //   image: '/officers/Cadavona_Cory.jpg',
  // },
  // {
  //   name: 'Bryan Nguyen',
  //   year: 'Class of 2026',
  //   major: 'Mechanical Engineering',
  //   cohort: 'Spring 2023 Cohort',
  //   position: 'Professional Relations',
  //   linkedin: 'https://www.linkedin.com/in/bryan-nguyen-38b397276/',
  //   image: '/officers/Nguyen_Bryan.JPG',
  // },
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
