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
    name: 'Naomi Petersen',
    year: 'Class of 2027',
    major: 'Design',
    cohort: 'Fall 2024 Cohort',
    position: 'Committee Director, Marketing',
    linkedin: 'https://www.linkedin.com/in/naomipetersen-/',
    image: '/officers/Petersen_Naomi.jpeg',
  },
  {
    name: 'Charlie Edwards',
    year: 'Class of 2026',
    major: 'Computer Science',
    cohort: 'Fall 2023 Cohort',
    position: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/charles-edwards-7540a12a7/',
    image: '/officers/Edwards_Charlie.jpeg',
  },
  {
    name: 'Ariba Arif',
    year: 'Class of 2026',
    major: 'Civil Engineering',
    cohort: 'Fall 2024 Cohort',
    position: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/ariba-arif-92315a32a/',
    image: '/officers/Arif_Ariba.jpeg',
  },
  {
    name: 'Donald Le',
    year: 'Class of 2028',
    major: 'Chemical Engineering',
    cohort: 'Fall 2025 Cohort',
    position: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/donald-l-a46009283/',
    image: '/officers/le_donald.jpeg',
  },
  {
    name: 'Ethan Thurston',
    year: 'Class of 2027',
    major: 'Electrical Engineering',
    cohort: 'Spring 2025 Cohort',
    position: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/ethanthurston/',
    image: '/officers/Thurston_Ethan.jpeg',
  },
  {
    name: 'Jonathan Wu',
    year: 'Class of 2026',
    major: 'Electrical Engineering',
    cohort: 'Fall 2023 Cohort',
    position: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/jonathan-wu-link/',
    image: '/officers/Wu_Jonathan.jpeg',
  },
  {
    name: 'Madeleine Kim',
    year: 'Class of 2029',
    major: 'Biological Systems Engineering',
    cohort: 'Fall 2025 Cohort',
    position: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/madeleine-kim-b7554637a/',
    image: '/officers/kim_madeleine.jpeg',
  },
  {
    name: 'Nancy Wang',
    year: 'Class of 2028',
    major: 'Computer Science',
    cohort: 'Fall 2025 Cohort',
    position: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/nancywang22/',
    image: '/officers/wang_nancy.jpeg',
  }
];
