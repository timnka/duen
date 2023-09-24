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

export const finance = [
    {
        name: 'Kenneth Bui',
        year: 'Class of 2024',
        major: 'Biomedical Engineering',
        cohort: 'Founding Cohort',
        position: 'Committee Director, Finance',
        linkedin: '',
        image: '/officers/kenny.JPG',
    },
    {
        name: 'Abubakr Hadwan',
        year: 'Class of 2024',
        major: 'Biomedical Engineering',
        cohort: 'Fall 2022 Cohort',
        position: 'Finance',
        linkedin: 'https://www.linkedin.com/in/abubakr-hadwan-404aa918a/',
        image: '/officers/Hadwan_Abubakr.jpg',
    },
    {
        name: 'Keshav Lodha',
        year: 'Class of 2025',
        major: 'Computer Science and Statistics',
        cohort: 'Spring 2023 Cohort',
        position: 'Finance',
        linkedin: 'https://www.linkedin.com/in/keshav-lodha-0497541b7/',
        image: '/officers/Lodha_Keshav.JPG',
    },
    {
        name: 'Sarah Sin',
        year: 'Class of 2024',
        major: 'Civil Engineering',
        cohort: 'Spring 2023 Cohort',
        position: 'Finance',
        linkedin: 'https://www.linkedin.com/in/sarahsin/',
        image: '/officers/Sin_Sarah.jpg',
    },
    {
        name: 'Kenneth Wong',
        year: 'Class of 2025',
        major: 'Civil Engineering',
        cohort: 'Spring 2023 Cohort',
        position: 'Finance',
        linkedin: 'https://www.linkedin.com/in/krwong35/',
        image: '/officers/wong_kenneth.jpeg',
    },
]