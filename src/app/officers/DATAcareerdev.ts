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

export const careerdev = [
  {
    name: 'Natalie Kuang',
    year: 'Class of 2025',
    major: 'Biomedical Engineering',
    cohort: 'Spring 2023 Cohort',
    position: 'Career Development',
    linkedin: 'https://www.linkedin.com/in/natalie-kuang-ucd2025/',
    image: '/officers/Kuang_Natalie.JPG',
  },
  {
    name: 'Adrian Chan',
    year: 'Class of 2026',
    major: 'Mechanical and Aerospace Engineering',
    cohort: 'Fall 2023 Cohort',
    position: 'Career Development',
    linkedin: 'https://www.linkedin.com/in/adriansc004/',
    image: '/officers/Chan_Adrian.jpg',
  },
  {
    name: 'Michelle Huo',
    year: 'Class of 2026',
    major: 'Mechanical Engineering',
    cohort: 'Fall 2023 Cohort',
    position: 'Career Development',
    linkedin: 'https://www.linkedin.com/in/michelle-huo-667b80273/',
    image: '/officers/Huo_Michelle.jpg',
  },
  {
    name: 'Taylor Chin',
    year: 'Class of 2026',
    major: 'Mechanical Engineering',
    cohort: 'Spring 2023 Cohort',
    position: 'Career Development',
    linkedin: 'https://www.linkedin.com/in/taylorchin2/',
    image: '/officers/Chin_Taylor.jpeg',
  },
  {
    name: 'Toby Li',
    year: 'Class of 2025',
    major: 'Aerospace Engineering',
    cohort: 'Fall 2023 Cohort',
    position: 'Career Development',
    linkedin: 'https://www.linkedin.com/in/toby-li/',
    image: '/officers/Li_Toby.jpg',
  },
  {
    name: 'Kayla Hom',
    year: 'Class of 2024',
    major: 'Computer Science and Engineering',
    cohort: 'Fall 2023 Cohort',
    position: 'Career Development',
    linkedin: 'https://www.linkedin.com/in/kayla-hom/',
    image: '/officers/Hom_Kayla.jpg',
  },
  {
    name: 'Jeyashree Chandrahasan',
    year: 'Class of 2026',
    major: 'Biomedical Engineering',
    cohort: 'Fall 2023 Cohort',
    position: 'Career Development',
    linkedin: 'https://www.linkedin.com/in/jeyashreechandrahasan/',
    image: '',
  },
  {
    name: 'Justin Kwong',
    year: 'Class of 2025',
    major: 'Mechanical Engineering',
    cohort: 'Spring 2023 Cohort',
    position: 'Career Development',
    linkedin: 'https://www.linkedin.com/in/justin-kwong-4855b7242/',
    image: '/officers/Kwong_Justin.jpeg',
  },
  {
    name: 'Kenneth Bui',
    year: 'Class of 2024',
    major: 'Biomedical Engineering',
    cohort: 'Founding Cohort',
    position: 'Career Development',
    linkedin: 'https://www.linkedin.com/in/kenneth-bui-92b9a4214/',
    image: '/officers/Bui_Kenneth.JPG',
  },
];
