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
So, if the file 'image1.jpg' is in the 'folder1' directory in the 'public' directory, reference this file with the file path:
    '/folder1/image1.jpg'. DO NOT USE THE PATH '/public/folder1/image1.jpg', IT WILL NOT WORK IF YOU DO SO.
Having '/' be the prefix for the path is already recognized as referencing the 'public' directory.

THIS component will pull images from the directory '/officers' in the 'public' directory.
When updating the photos, add your desired photo in this directory, and update the
exported JSONs with the appropriate image paths and descriptions. The path should be '/officers/[logo-file].jpg'.

**** Executive board and active officer photos will be in the same directory, the '/officers' directory. ****

The order which you list the officers here is there order they will be displayed
on the webpage.

*/

export const finance = [

  // {
  //   name: 'Keshav Lodha',
  //   year: 'Class of 2025',
  //   major: 'Computer Science and Statistics',
  //   cohort: 'Spring 2023 Cohort',
  //   position: 'Committee Director, Finance',
  //   linkedin: 'https://www.linkedin.com/in/keshav-lodha-0497541b7/',
  //   image: '/officers/Lodha_Keshav.png',
  // },
  {
    name: 'Cody Chen',
    year: 'Class of 2027',
    major: 'Computer Science',
    cohort: 'Spring 2024 Cohort',
    position: 'Committee Director, Finance',
    linkedin: 'https://www.linkedin.com/in/cody-chen-05b379303/',
    image: '/officers/Chen_Cody.jpeg',
  },
    {
      name: 'Adam Kim',
      year: 'Class of 2028',
      major: 'Computer Engineering',
      cohort: 'Fall 2025 Cohort',
      position: 'Finance',
      linkedin: 'https://www.linkedin.com/in/adam-kim-167957327/',
      image: '/officers/kim_adam.jpeg',
  },
  // {
  //   name: 'Kenneth Wong',
  //   year: 'Class of 2025',
  //   major: 'Civil Engineering',
  //   cohort: 'Spring 2023 Cohort',
  //   position: 'Finance',
  //   linkedin: 'https://www.linkedin.com/in/krwong35/',
  //   image: '/officers/Chu_Colin.jpeg',
  // },
  // {
  //   name: 'Richard Huang',
  //   year: 'Class of 2026',
  //   major: 'Computer Science and Engineering',
  //   cohort: 'Spring 2024 Cohort',
  //   position: 'Finance',
  //   linkedin: 'https://www.linkedin.com/in/ridhuang/',
  //   image: '/officers/Chu_Colin.jpeg',
  // },
  {
    name: 'Atharva Kharwadkar',
    year: 'Class of 2027',
    major: 'Mechanical Engineering',
    cohort: 'Fall 2025 Cohort',
    position: 'Finance',
    linkedin: 'https://www.linkedin.com/in/atharvakharwadkar/',
    image: '/officers/kharwadkar_atharva.jpeg',
  },
  {
    name: 'Andrew Harrington',
    year: 'Class of 2027',
    major: 'Civil Engineering',
    cohort: 'Spring 2025 Cohort',
    position: 'Finance',
    linkedin: 'https://www.linkedin.com/in/andrewdharrington/',
    image: '/officers/Harrington_Andrew.JPEG',
  },
  {
    name: 'Ethan Cooc',
    year: 'Class of 2029',
    major: 'Computer Science',
    cohort: 'Fall 2025 Cohort',
    position: 'Finance',
    linkedin: '',
    image: '/officers/cooc_ethan.jpeg',
  },
  {
    name: 'John Macaranas',
    year: 'Class of 2027',
    major: 'Electrical Engineering',
    cohort: 'Spring 2025 Cohort',
    position: 'Finance',
    linkedin: 'https://www.linkedin.com/in/john-elrenz-macaranas/',
    image: '/officers/Macaranas_John.jpg',
  },
  {
    name: "Kenneth Nguyen",
    year: "Class of 2028",
    major: "Environmental Engineering",
    cohort: "Fall 2025 Cohort",
    position: "Finance",
    linkedin: "https://www.linkedin.com/in/kenneth-nguyen-b1098b320/",
    image: "/officers/Nguyen_Kenneth.jpeg",
  },
  {
    name: 'Vincent Ng',
    year: 'Class of 2027',
    major: 'Computer Science and Technology Management',
    cohort: 'Spring 2025 Cohort',
    position: 'Finance',
    linkedin: 'https://www.linkedin.com/in/wang-ng/',
    image: '/officers/Ng_Wang.jpeg',
  }
];
