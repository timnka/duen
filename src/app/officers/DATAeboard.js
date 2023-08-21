/*

----------- DATAeboard.js
This is the Executive Board members data for the Executive Board panel in the OFFICERS page.

********* It exports an array of JSON object constants. ************

Each JSON object has the format:

{
    name: 'Officer Name',
    year: 'Class of []',
    major: 'Computer Science and Engineering',
    cohort: 'Fall 2021 Cohort',
    position: 'President',
    linkedin: 'https://linkedin.com/[officer]',
    image: '/officers/[officer-photo].jpg',
}

******* Each json must follow the above format. If any properties are in a different order as listed above or
even missing, the program will likely crash. *************

The project imports all photos from the 'public' directory. The path prefix '/' is
set to already reference this folder. So, if you want to access the image called
'tesla-logo.png' in the public directory, use the 'path' value '/tesla-logo.png'.

THIS component will pull images from the directory '/officers' in the 'public' directory.
When updating the photos, add your desired photo in this directory, and update the
exported JSONs with the appropriate image paths and descriptions. The path should be '/officers/[logo-file].png'.

**** Executive board and active officer photos will be in the same directory, the '/officers' directory. ****

The order which you list the officers here is there order they will be displayed
on the webpage.

*/

export const eboard = [
    {
        name: 'ama2',
        year: 'Class of 2023',
        major: 'Computer Science and Engineering',
        cohort: 'Fall 2021 Cohort',
        position: 'President',
        linkedin: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        image: '/officers/ama2.jpg',
    },
    {
        name: 'n8 dogg',
        year: 'Class of 2023',
        major: 'Podiatry Engineering',
        cohort: 'Fall 2021 Cohort',
        position: 'President',
        linkedin: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        image: '/officers/n8.jpeg',
    },
    {
        name: 'n8 dogg',
        year: 'Class of 2023',
        major: 'Podiatry',
        cohort: 'Fall 2021 Cohort',
        position: 'President',
        linkedin: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        image: '/officers/n8.jpeg',
    },
    {
        name: 'mamanda',
        year: 'Class of 2023',
        major: 'Computer Science and Engineering',
        cohort: 'Fall 2021 Cohort',
        position: 'President',
        linkedin: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        image: '/officers/ama.png',
    },
    
]