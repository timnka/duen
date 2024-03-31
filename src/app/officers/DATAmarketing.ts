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
    name: "Vanessa Guo",
    year: "Class of 2025",
    major: "Computer Science",
    cohort: "Fall 2023 Cohort",
    position: "Committee Director, Marketing",
    linkedin: "https://www.linkedin.com/in/vanessaguo03/",
    image: "/officers/Guo_Vanessa.jpg",
  },
  {
    name: "Abraham Castellon",
    year: "Class of 2025",
    major: "Computer Science",
    cohort: "Fall 2023 Cohort",
    position: "Marketing",
    linkedin: "https://www.linkedin.com/in/abraham-castellon-a5488320b/",
    image: "/officers/Castellon_Abraham.jpg",
  },
  {
    name: "Jessica Trans",
    year: "Class of 2024",
    major: "Computer Science",
    cohort: "Spring 2023 Cohort",
    position: "Marketing",
    linkedin: "https://www.linkedin.com/in/jessicatrans/",
    image: "/officers/Trans_Jessica.jpg",
  },
  {
    name: "Riya Prashad",
    year: "Class of 2024",
    major: "Biomedical Engineering",
    cohort: "Founding Cohort",
    position: "Marketing",
    linkedin: "https://www.linkedin.com/in/riya-prashad-06bb74187/",
    image: "/officers/Riya Prashad.jpg",
  },
  {
    name: "Jonathan Wu",
    year: "Class of 2026",
    major: "Electrical Engineering",
    cohort: "Fall 2023 Cohort",
    position: "Marketing",
    linkedin: "https://www.linkedin.com/in/jonathan-wu-link/",
    image: "/officers/Wu_Jonathan.jpg",
  },
  {
    name: "Shruti Kakar",
    year: "Class of 2025",
    major: "Computer Science",
    cohort: "Fall 2023 Cohort",
    position: "Marketing",
    linkedin: "https://www.linkedin.com/in/kakarshruti/",
    image: "/officers/Kakar_Shruti.jpg",
  },
  {
    name: "Charles Edwards",
    year: "Class of 2026",
    major: "Computer Science",
    cohort: "Fall 2023 Cohort",
    position: "Marketing",
    linkedin: "https://www.linkedin.com/in/charles-edwards-7540a12a7/",
    image: "/officers/Edwards_Charles.jpg",
  },
  {
    name: "Sarah Sin",
    year: "Class of 2024",
    major: "Civil Engineering",
    cohort: "Spring 2023 Cohort",
    position: "Marketing",
    linkedin: "https://www.linkedin.com/in/sarahsin/",
    image: "/officers/Sin_Sarah.jpg",
  },
];