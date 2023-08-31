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

export const actives = [
    {
        name: 'Lauren Gee',
        year: 'Class of 2024',
        major: 'Mechanical Engineering',
        cohort: 'Fall 2022 Cohort',
        position: 'Internal Affairs',
        linkedin: 'https://www.linkedin.com/in/lauren-gee/',
        image: '/officers/lauren.jpg',
    },
    {
        name: 'Matthew Suyetani',
        year: 'Class of 2024',
        major: 'Mechanical Engineering',
        cohort: 'Fall 2022 Cohort',
        position: 'Career Development',
        linkedin: 'https://www.linkedin.com/in/matthewsuyetani/',
        image: '/officers/suye.jpg',
    },
    {
        name: 'Kenneth Bui',
        year: 'Class of 2024',
        major: 'Biomedical Engineering',
        cohort: 'Founding Cohort',
        position: 'Committee Director, Finance',
        linkedin: '',
        image: '/officers/kenny.jpg',
    },
    {
        name: 'Daphne Lee',
        year: 'Class of 2024',
        major: 'Biological Systems Engineering',
        cohort: 'Founding Cohort',
        position: 'Internal Affairs',
        linkedin: 'https://www.linkedin.com/in/daphnelee123/',
        image: '/officers/daphne.jpg',
    },
    {
        name: 'Adit Jain',
        year: 'Class of 2024',
        major: 'Biomedical Engineering',
        cohort: 'Founding Cohort',
        position: 'Committee Director, Professional Relations',
        linkedin: 'https://www.linkedin.com/in/aditjain125/',
        image: '/officers/Adit Jain.jpg',
    },
    {
        name: 'Riya Prashad',
        year: 'Class of 2024',
        major: 'Biomedical Engineering',
        cohort: 'Founding Cohort',
        position: 'Internal Affairs',
        linkedin: 'https://www.linkedin.com/in/riya-prashad-06bb74187/',
        image: '/officers/Riya Prashad.jpg',
    },
    {
        name: 'Calvin Chen',
        year: 'Class of 2024',
        major: 'Computer Science',
        cohort: 'Founding Cohort',
        position: 'Committee Director, Career Development',
        linkedin: 'https://www.linkedin.com/in/calvinchenn/',
        image: '/officers/Calvin Chen.jpeg',
    },
    {
        name: 'Xiaolin Ma',
        year: 'Class of 2024',
        major: 'Computer Science',
        cohort: 'Founding Cohort',
        position: 'Committee Director, Marketing',
        linkedin: 'https://www.linkedin.com/in/calvinchenn/',
        image: '/officers/xiaolinMa.png',
    },
    {
        name: 'Taylor Chin',
        year: 'Class of 2026',
        major: 'Mechanical Engineering',
        cohort: 'Spring 2023 Cohort',
        position: 'Professional Relations',
        linkedin: 'https://www.linkedin.com/in/taylorchin2/',
        image: '/officers/Chin_Taylor.jpeg',
    },
    {
        name: 'Cory Cadavona',
        year: 'Class of 2025',
        major: 'Computer Engineering',
        cohort: 'Spring 2023 Cohort',
        position: 'Professional Relations',
        linkedin: 'https://www.linkedin.com/in/corycadavona/',
        image: '/officers/Cadavona_cory.jpg',
    },
    {
        name: 'Justin Kwong',
        year: 'Class of 2025',
        major: 'Mechanical Engineering',
        cohort: 'Spring 2023 Cohort',
        position: 'Professional Relations',
        linkedin: 'https://www.linkedin.com/in/justin-kwong-4855b7242/',
        image: '/officers/Justin Kwong.jpg',
    },
    {
        name: 'Natalie Kuang',
        year: 'Class of 2025',
        major: 'Biomedical Engineering',
        cohort: 'Spring 2023 Cohort',
        position: 'Career Development',
        linkedin: 'https://www.linkedin.com/in/natalie-kuang-ucd2025/',
        image: '/officers/Kuang_Natalie.jpg',
    },
    {
        name: 'Keshav Lodha',
        year: 'Class of 2025',
        major: 'Computer Science and Statistics',
        cohort: 'Spring 2023 Cohort',
        position: 'Finance',
        linkedin: 'https://www.linkedin.com/in/keshav-lodha-0497541b7/',
        image: '/officers/Lodha_Keshav.jpg',
    },
    {
        name: 'Newland Luu',
        year: 'Class of 2024',
        major: 'Computer Science',
        cohort: 'Spring 2023 Cohort',
        position: 'Internal Affairs',
        linkedin: 'https://www.linkedin.com/in/newland-luu-512805210/',
        image: '/officers/luu_newland.jpeg',
    },
    {
        name: 'Bryan Nguyen',
        year: 'Class of 2026',
        major: 'Mechanical Engineering',
        cohort: 'Spring 2023 Cohort',
        position: 'Professional Relations',
        linkedin: 'https://www.linkedin.com/in/bryan-nguyen-38b397276/',
        image: '/officers/Nguyen_Bryan.jpg',
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