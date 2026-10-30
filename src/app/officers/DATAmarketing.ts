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
    name: "Nancy Wang",
    year: "Class of 2028",
    major: "Computer Science",
    cohort: "Fall 2025 Cohort",
    position: "Committee Director, Marketing",
    linkedin: "https://www.linkedin.com/in/nancywang22/",
    image: "/officers/wang_nancy.JPG",
  },
  {
    name: "Madeleine Kim",
    year: "Class of 2029",
    major: "Biological Systems Engineering",
    cohort: "Fall 2025 Cohort",
    position: "Marketing",
    linkedin: "https://www.linkedin.com/in/madeleine-kim-b7554637a/",
    image: "/officers/kim_maddy.png",
  },
  {
    name: "Mandee Nguyen",
    year: "Class of 2028",
    major: "Mechanical Engineering",
    cohort: "Spring 2026 Cohort",
    position: "Marketing",
    linkedin: "https://www.linkedin.com/in/mandee-nguyen-936a65312/",
    image: "/officers/Nguyen_Mandee.png",
  },
  {
    name: "Vivian Shen",
    year: "Class of 2028",
    major: "Biomedical Engineering",
    cohort: "Spring 2026 Cohort",
    position: "Marketing",
    linkedin: "https://www.linkedin.com/in/vivian-shen/",
    image: "/officers/Shen_Vivian.png",
  },
  {
    name: "Rebekah Lee",
    year: "Class of 2028",
    major: "Data Science",
    cohort: "Spring 2026 Cohort",
    position: "Marketing",
    linkedin: "https://www.linkedin.com/in/rebekahlee136/",
    image: "/officers/Lee_Rebekah.jpeg",
  },
  {
    name: "Cerene Lee",
    year: "Class of 2028",
    major: "Civil Engineering",
    cohort: "Spring 2026 Cohort",
    position: "Marketing",
    linkedin: "https://www.linkedin.com/in/cerene-lee-/",
    image: "/officers/Lee_Cerene.png",
  },
  {
    name: "Sophia Palae",
    year: "Class of 2029",
    major: "Data Science",
    cohort: "Fall 2025 Cohort",
    position: "Marketing",
    linkedin: "https://www.linkedin.com/in/moe-palae/",
    image: "/officers/Palae_Sophia.jpeg",
  },
];
