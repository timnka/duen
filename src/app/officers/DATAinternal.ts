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
  //   image: '/officers/Chu_Colin.jpeg',
  // },
  {
    name: 'Michelle Lin',
    year: 'Class of 2027',
    major: 'Data Science',
    cohort: 'Spring 2025 Cohort',
    position: 'Committee Director, Internal Affairs',
    linkedin: 'https://www.linkedin.com/in/michelle-lin-3a441b281/',
    image: '/officers/Lin_Michelle.jpeg',
  },
  {
    name: 'Benjamin Brundage',
    year: 'Class of 2028',
    major: 'Computer Engineering',
    cohort: 'Fall 2025 Cohort',
    position: 'Internal Affairs',
    linkedin: 'https://www.linkedin.com/in/benjamin-brundage-63319633a/',
    image: '/officers/brundage_ben.jpeg',
  },
  {
    name: 'Devin Sidhu',
    year: 'Class of 2028',
    major: 'Statistics',
    cohort: 'Fall 2025 Cohort',
    position: 'Internal Affairs',
    linkedin: 'https://www.linkedin.com/in/devin-gill-sidhu-a03745328/',
    image: '/officers/sidhu_devin.jpeg',
  },
  {
    name: 'Etienne Rousseau',
    year: 'Class of 2026',
    major: 'Computer Science',
    cohort: 'Spring 2024 Cohort',
    position: 'Internal Affairs',
    linkedin: 'https://www.linkedin.com/in/etienne-rousseau/',
    image: '/officers/Rousseau_Etienne.jpg',
  },
  {
    name: 'Hanna Dao',
    year: 'Class of 2028',
    major: 'Mechanical Engineering',
    cohort: 'Spring 2025 Cohort',
    position: 'Internal Affairs',
    linkedin: 'https://www.linkedin.com/in/hannadao/',
    image: '/officers/Dao_Hanna.jpeg',
  },
  {
    name: 'Jessica Ting',
    year: 'Class of 2026',
    major: 'Computer Science and Technology Management',
    cohort: 'Fall 2025 Cohort',
    position: 'Internal Affairs',
    linkedin: 'https://www.linkedin.com/in/jessica-ting-404034352/overlay/background-image/',
    image: '/officers/ting_jessica.jpeg',
  },
  {
    name: 'Joshua Wei',
    year: 'Class of 2027',
    major: 'Data Science and Neuroscience',
    cohort: 'Spring 2025 Cohort',
    position: 'Internal Affairs',
    linkedin: 'https://www.linkedin.com/in/joshuaweiiii/',
    image: '/officers/Wei_Joshua.JPG',
  },
  {
    name: 'Justin Yee',
    year: 'Class of 2026',
    major: 'Data Science',
    cohort: 'Fall 2025 Cohort',
    position: 'Internal Affairs',
    linkedin: 'https://www.linkedin.com/in/jhyee/',
    image: '/officers/Yee_Justin.png',
  },
  {
    name: 'Maya Athayasay',
    year: 'Class of 2028',
    major: 'Chemical Engineering',
    cohort: 'Fall 2025 Cohort',
    position: 'Internal Affairs',
    linkedin: 'https://www.linkedin.com/in/maya-athayasay/',
    image: '/officers/Athaysay_Maya.jpeg',
  }

];
