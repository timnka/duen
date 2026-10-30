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

export const careerdev = [
  {
    name: "Joshua Wei",
    year: "Class of 2027",
    major: "Data Science and Neuroscience",
    cohort: "Spring 2025 Cohort",
    position: "Committee Director, Career Development",
    linkedin: "https://www.linkedin.com/in/joshuaweiiii/",
    image: "/officers/wei_joshua.jpg",
  },
  {
    name: "Maya Athayasay",
    year: "Class of 2028",
    major: "Chemical Engineering",
    cohort: "Fall 2025 Cohort",
    position: "Career Development",
    linkedin: "https://www.linkedin.com/in/maya-athayasay/",
    image: "/officers/Athaysay_Maya.jpeg",
  },
  {
    name: "Ryan Nguyen",
    year: "Class of 2027",
    major: "Electrical Engineering",
    cohort: "Spring 2025 Cohort",
    position: "Career Development",
    linkedin: "https://www.linkedin.com/in/ryan-nguyen-davis/",
    image: "/officers/nguyen_ryan.jpeg",
  },
  {
    name: "Paige Phung",
    year: "Class of 2027",
    major: "Aerospace and Mechanical Engineering",
    cohort: "Fall 2024 Cohort",
    position: "Career Development",
    linkedin: "https://www.linkedin.com/in/paige-phung/",
    image: "/officers/Phung_Paige.jpeg",
  },
  {
    name: "Michelle Lin",
    year: "Class of 2027",
    major: "Data Science",
    cohort: "Spring 2025 Cohort",
    position: "Career Development",
    linkedin: "https://www.linkedin.com/in/michelle-lin-3a441b281/",
    image: "/officers/lin_michelle.jpeg",
  },
  {
    name: "Theresa Tsai",
    year: "Class of 2028",
    major: "Mechanical Engineering",
    cohort: "Spring 2026 Cohort",
    position: "Career Development",
    linkedin: "https://www.linkedin.com/in/theresa-tsai-a74aa5211/",
    image: "/officers/Tsai_Theresa.png",
  },
];
