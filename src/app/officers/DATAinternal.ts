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

export const internal = [
  //   {
  //   name: 'Aliya Abla',
  //   year: 'Class of 2025',
  //   major: 'Biological Systems Engineering',
  //   cohort: 'Fall 2023 Cohort',
  //   position: 'Committee Director, Internal Affairs',
  //   linkedin: 'https://www.linkedin.com/in/aliya-abla/',
  //   image: '/officers/Abla_Aliya.jpg',
  // },
  {
    name: 'Esha Chakrabarty',
    year: 'Class of 2026',
    major: 'Data Science',
    cohort: 'Fall 2023 Cohort',
    position: 'Committee Director, Internal Affairs',
    linkedin: 'https://www.linkedin.com/in/esha-chakrabarty/',
    image: '/officers/Chakrabarty_Esha.jpg',
  },
  {
    name: "Charlie Edwards",
    year: "Class of 2026",
    major: "Computer Science",
    cohort: "Fall 2023 Cohort",
    position: "Internal Affairs",
    linkedin: "https://www.linkedin.com/in/charles-edwards-7540a12a7/",
    image: "/officers/Edwards_Charles.jpg",
  },
  {
    name: 'Hadi Beveridge Eguino',
    year: 'Class of 2025',
    major: 'Civil Engineering',
    cohort: 'Spring 2024 Cohort',
    position: 'Internal Affairs',
    linkedin: 'https://www.linkedin.com/in/hadi-beveridge-eguino/',
    image: '/officers/Eguino_Hadi.jpg',
  },
  {
    name: 'Jeyashree Chandrahasan',
    year: 'Class of 2026',
    major: 'Biomedical Engineering',
    cohort: 'Fall 2023 Cohort',
    position: 'Internal Affairs',
    linkedin: 'https://www.linkedin.com/in/jeyashreechandrahasan/',
    image: '/officers/Chandrahasan_Jeyashree.jpg',
  },
  {
    name: 'Naomi Petersen',
    year: 'Class of 2027',
    major: 'Biomedical Engineering',
    cohort: 'Fall 2024 Cohort',
    position: 'Internal Affairs',
    linkedin: 'https://www.linkedin.com/in/naomi-petersen-1bb361334/',
    image: '/officers/Petersen_Naomi.jpeg',
  },
  {
    name: "Michelle Huo",
    year: "Class of 2026",
    major: "Mechanical Engineering",
    cohort: "Fall 2023 Cohort",
    position: "Internal Affairs",
    linkedin: "https://www.linkedin.com/in/michelle-huo-667b80273",
    image: "/officers/Huo_Michelle.jpg",
  },
  {
    name: "Sanjith Iype",
    year: "Class of 2027",
    major: "Computer Science and Engineering",
    cohort: "Fall 2024 Cohort",
    position: "Internal Affairs",
    linkedin: "https://www.linkedin.com/in/sanjithiype/",
    image: "/officers/Iype_Sanjith.png",
  },
  {
    name: 'Nicholas Xu',
    year: 'Class of 2025',
    major: 'Electrical Engineering',
    cohort: 'Fall 2023 Cohort',
    position: 'Internal Affairs',
    linkedin: 'https://www.linkedin.com/in/nicholas-x-3b2585159/',
    image: '/officers/Xu_Nicholas.jpg',
  },
  {
    name: 'Vanessa Guo',
    year: 'Class of 2025',
    major: 'Computer Science',
    cohort: 'Fall 2023 Cohort',
    position: 'Internal Affairs',
    linkedin: 'https://www.linkedin.com/in/vanessaguo03',
    image: '/officers/Guo_Vanessa.jpg',
  },
  {
    name: 'Justin Kwong',
    year: 'Class of 2025',
    major: 'Mechanical Engineering',
    cohort: 'Spring 2023 Cohort',
    position: 'Internal Affairs',
    linkedin: 'https://www.linkedin.com/in/justin-kwong-4855b7242/',
    image: '/officers/Kwong_Justin.jpeg',
  },

];
