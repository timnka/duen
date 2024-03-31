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

export const finance = [
  {
    name: 'Matthew Wang',
    year: 'Class of 2025',
    major: 'Computer Engineering',
    cohort: 'Spring 2023 Cohort',
    position: 'Committee Director, Finance',
    linkedin: 'https://www.linkedin.com/in/matthew-wang-a41093214/',
    image: '/officers/Wang_Matthew.jpg',
  },
  {
    name: 'Shana Chen',
    year: 'Class of 2026',
    major: 'Systems and Synthetic Biology',
    cohort: 'Fall 2023 Cohort',
    position: 'Finance',
    linkedin: 'https://www.linkedin.com/in/shana-chen-7b853627b/',
    image: '/officers/Chen_Shana.jpg',
  },
  {
    name: 'Alexander Ilusorio',
    year: 'Class of 2025',
    major: 'Electrical Engineering',
    cohort: 'Fall 2023 Cohort',
    position: 'Finance',
    linkedin: 'https://www.linkedin.com/in/alexander-ilusorio-955819296/',
    image: '/officers/Ilusorio_Alexander.jpg',
  },
  {
    name: 'Kenneth Wong',
    year: 'Class of 2025',
    major: 'Civil Engineering',
    cohort: 'Spring 2023 Cohort',
    position: 'Finance',
    linkedin: 'https://www.linkedin.com/in/krwong35/',
    image: '/officers/wong_kenneth.jpeg',
  },
  {
    name: 'Kaitlyn Tran',
    year: 'Class of 2024',
    major: 'Civil Engineering',
    cohort: 'Spring 2023 Cohort',
    position: 'Finance',
    linkedin: 'https://www.linkedin.com/in/kaitlyn-tran-111966174/',
    image: '/officers/Tran_Kaitlyn.jpeg',
  },
  {
    name: 'Christopher Lo',
    year: 'Class of 2025',
    major: 'Computer Science and Economics',
    cohort: 'Spring 2023 Cohort',
    position: 'Finance',
    linkedin: 'https://www.linkedin.com/in/christopherlo34/',
    image: '/officers/Lo_Chris.jpg',
  },
  {
    name: 'Michael Leong',
    year: 'Class of 2024',
    major: 'Biochemical Engineering',
    cohort: 'Founding Cohort',
    position: 'Finance',
    linkedin: 'https://www.linkedin.com/in/mtleong/',
    image: '/officers/Michael Leong.png',
  },
  {
    name: 'Daniel Petroski',
    year: 'Class of 2024',
    major: 'Civil Engineering',
    cohort: 'Spring 2023 Cohort',
    position: 'Finance',
    linkedin: 'https://www.linkedin.com/in/daniel-petroski/',
    image: '/officers/Petroski_Daniel.jpg',
  },
  {
    name: 'Keshav Lodha',
    year: 'Class of 2025',
    major: 'Computer Science and Statistics',
    cohort: 'Spring 2023 Cohort',
    position: 'Finance',
    linkedin: 'https://www.linkedin.com/in/keshav-lodha-0497541b7/',
    image: '/officers/Lodha_Keshav.JPG',
  },
];
