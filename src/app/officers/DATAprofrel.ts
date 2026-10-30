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
    name: "Divjot Purewal",
    year: "Class of 2028",
    major: "Mechanical Engineering",
    cohort: "Spring 2026 Cohort",
    position: "Committee Director, Professional Relations",
    linkedin: "https://www.linkedin.com/in/divjot-purewal/",
    image: "/officers/Purewal_Divjot.JPG",
  },
  {
    name: "Aneel Sethi",
    year: "Class of 2028",
    major: "Mechanical Engineering",
    cohort: "Spring 2026 Cohort",
    position: "Professional Relations",
    linkedin: "https://www.linkedin.com/in/aneel-sethi/",
    image: "/officers/Sethi_Aneel.jpeg",
  },
  {
    name: "Ema Maeda",
    year: "Class of 2028",
    major: "Civil Engineering",
    cohort: "Spring 2026 Cohort",
    position: "Professional Relations",
    linkedin: "https://www.linkedin.com/in/emamaeda/",
    image: "/officers/Maeda_Ema.jpeg",
  },
  {
    name: "Jonathan Li",
    year: "Class of 2028",
    major: "Electrical Engineering",
    cohort: "Spring 2026 Cohort",
    position: "Professional Relations",
    linkedin: "https://www.linkedin.com/in/jonathanli8/",
    image: "/officers/Li_Jonathan.jpeg",
  },
  {
    name: "Nik Buerger",
    year: "Class of 2027",
    major: "Mechanical Engineering",
    cohort: "Fall 2025 Cohort",
    position: "Internal Affairs",
    linkedin: "",
    image: "/officers/Buerger_Nik.png",
  },
  {
    name: "Shubhankar Lele",
    year: "Class of 2029",
    major: "Mechanical Engineering",
    cohort: "Spring 2026 Cohort",
    position: "Professional Relations",
    linkedin: "https://www.linkedin.com/in/shubhankar-lele-525616296/",
    image: "/officers/Lele_Shub.png",
  },
  {
    name: "Natalie Huang",
    year: "Class of 2029",
    major: "Environmental Toxicology",
    cohort: "Spring 2026 Cohort",
    position: "Professional Relations",
    linkedin: "https://www.linkedin.com/in/natalie-huang-682818342/",
    image: "/officers/Huang_Natalie.png",
  },
  {
    name: "Gavin Pasillas",
    year: "Class of 2027",
    major: "Chemical Engineering",
    cohort: "Spring 2025 Cohort",
    position: "Professional Relations",
    linkedin: "https://www.linkedin.com/in/gavinpas/",
    image: "/officers/pasillas_gavin.jpeg",
  },
  {
    name: "Rylan Kuo",
    year: "Class of 2029",
    major: "Civil Engineering",
    cohort: "Spring 2026 Cohort",
    position: "Professional Relations",
    linkedin: "https://www.linkedin.com/in/rylan-kuo-0b72452a6/",
    image: "/officers/Kuo_Rylan.png",
  },
  {
    name: "Andre Velez",
    year: "Class of 2029",
    major: "Biomedical Engineering",
    cohort: "Spring 2026 Cohort",
    position: "N/A",
    linkedin: "https://www.linkedin.com/in/avelez17/",
    image: "/officers/Velez_Andre.png",
  },
];
