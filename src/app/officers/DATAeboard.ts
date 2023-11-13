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

export const eboard = [
    {
        name: 'Samantha Wang',
        year: 'Class of 2024',
        major: 'Biochemical Engineering',
        cohort: 'Founding Cohort',
        position: 'President',
        linkedin: 'https://www.linkedin.com/in/samanthaswang/',
        image: '/officers/Wang_Samantha.JPG',
    },
    {
        name: 'Michael Leong',
        year: 'Class of 2024',
        major: 'Biochemical Engineering',
        cohort: 'Founding Cohort',
        position: 'Vice President',
        linkedin: 'https://www.linkedin.com/in/mtleong/',
        image: '/officers/Michael Leong.png',
    },
    {
        name: 'Jared Ura',
        year: 'Class of 2024',
        major: 'Materials Science and Engineering',
        cohort: 'Founding Cohort',
        position: 'Secretary',
        linkedin: 'https://www.linkedin.com/in/jaredura/',
        image: '/officers/Ura_Jared.JPG',
    },
    {
        name: 'Semra Khan',
        year: 'Class of 2024',
        major: 'Computer Science',
        cohort: 'Founding Cohort',
        position: 'Program Manager',
        linkedin: 'https://www.linkedin.com/in/semra-khan-ba9902201/',
        image: '/officers/Khan_Semra.JPG',
    },
    {
        name: 'Darshan Shivakumar',
        year: 'Class of 2025',
        major: 'Computer Science',
        cohort: 'Founding Cohort',
        position: 'Program Manager',
        linkedin: 'https://www.linkedin.com/in/darshan-shivakumar/',
        image: '/officers/Shivakumar_Darshan.JPG',
    }
    
]