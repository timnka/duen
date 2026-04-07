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
    name: 'Paige Phung',
    year: 'Class of 2027',
    major: 'Aerospace and Mechanical Engineering',
    cohort: 'Fall 2024 Cohort',
    position: 'Committee Director, Career Development',
    linkedin: 'https://www.linkedin.com/in/paige-phung/',
    image: '/officers/Phung_Paige.jpeg',
  },
  {
    name: 'Austin Sidhu',
    year: 'Class of 2027',
    major: 'Computer Engineering',
    cohort: 'Fall 2024 Cohort',
    position: 'Career Development',
    linkedin: 'https://www.linkedin.com/in/kanvar-austin-sidhu/',
    image: '/officers/Sidhu_Austin.jpeg',
  },
  //   {
  //   name: 'Greg Chang',
  //   year: 'Class of 2025',
  //   major: 'Computer Science',
  //   cohort: 'Spring 2023 Cohort',
  //   position: 'Professional Relations',
  //   linkedin: 'https://www.linkedin.com/in/gregjchang/',
  //   image: '/officers/Chang_Greg.jpg',
  // },
  // {
  //   name: 'Toby Li',
  //   year: 'Class of 2025',
  //   major: 'Aerospace Engineering',
  //   cohort: 'Fall 2023 Cohort',
  //   position: 'Career Development',
  //   linkedin: 'https://www.linkedin.com/in/toby-li/',
  //   image: '/officers/Li_Toby.jpg',
  // },
  // {
  //   name: 'Jeyashree Chandrahasan',
  //   year: 'Class of 2026',
  //   major: 'Biomedical Engineering',
  //   cohort: 'Fall 2023 Cohort',
  //   position: 'Career Development',
  //   linkedin: 'https://www.linkedin.com/in/jeyashreechandrahasan/',
  //   image: '/officers/Chandrahasan_Jeyashree.jpg',
  // },
  {
    name: 'Hieu Minh',
    year: 'Class of 2027',
    major: 'Computer Engineering',
    cohort: 'Fall 2024 Cohort',
    position: 'Career Development',
    linkedin: 'https://www.linkedin.com/in/tovuhieuminh/',
    image: '/officers/To_HieuMinh.jpg',
  },
  {
    name: 'Jefferson Fan',
    year: 'Class of 2026',
    major: 'Mechanical Engineering',
    cohort: 'Spring 2025 Cohort',
    position: 'Career Development',
    linkedin: 'https://www.linkedin.com/in/jeffersonfan/',
    image: '/officers/Fan_Jefferson.jpg',
  },
  {
    name: 'Ryan Nakayama',
    year: 'Class of 2029',
    major: 'Mechanical Engineering',
    cohort: 'Fall 2025 Cohort',
    position: 'Career Development',
    linkedin: 'https://www.linkedin.com/in/ryannakayama/',
    image: '/officers/Nak_Ryan.jpeg',
  },
  {
    name: 'Ryan Ton',
    year: 'Class of 2028',
    major: 'Computer Engineering',
    cohort: 'Fall 2025 Cohort',
    position: 'Career Development',
    linkedin: 'https://www.linkedin.com/in/ryan-ton-788970280/',
    image: '/officers/Ton_Ryan.jpeg',
  },
  {
    name: 'Sachin Venkat',
    year: 'Class of 2028',
    major: 'Computer Science',
    cohort: 'Fall 2025 Cohort',
    position: 'Career Development',
    linkedin: 'www.linkedin.com/in/sachinvenkat/',
    image: '/officers/Venkat_Sachin.jpg',
  },
  {
    name: 'Claris Tain',
    year: 'Class of 2026',
    major: 'Electrical Engineering',
    cohort: 'Fall 2025 Cohort',
    position: 'Career Development',
    linkedin: 'https://www.linkedin.com/in/claris-tain/',
    image: '/officers/Tain_Claris.jpeg',
  }
  
  // {  
  //   name: 'Lucas Fedronic',
  //   year: 'Class of 2027',
  //   major: 'Computer Science and Engineering',
  //   cohort: 'Spring 2024 Cohort',
  //   position: 'Career Development',
  //   linkedin: 'https://www.linkedin.com/in/lucas-fedronic-4b030b217/',
  //   image: '/officers/Chu_Colin.jpeg',
  // },
  // {
  //   name: 'Oscar Wang',
  //   year: 'Class of 2025',
  //   major: 'Computer Science',
  //   cohort: 'Spring 2024 Cohort',
  //   position: 'Career Development',
  //   linkedin: 'https://www.linkedin.com/in/wang-oscar/',
  //   image: '/officers/Chu_Colin.jpeg',
  // },
    
];
