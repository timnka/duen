/*

----------- DATApillars.js


This is the pillar data for the DUEN pillars panel in the ABOUT page.

********* It exports an array of JSON constants. ************

Each JSON object has the format:
{
    num: 1,
    name: 'Insert pillar name here.',
    description: 'Insert short blurb about pillar here.',
    imagePath: '/about-content/pillars/[PILLAR_PHOTO].jpg',
    imageDesc: 'Insert image description here',
    isReversed: false | true,
}

******* Each json must follow the above format. If any properties are in a different order as listed above or
even missing, the program will likely crash. *************

The properties above are all self explanatory, except for the isReversed property.
The isReversed property is a boolean value that is toggled for every other pillar rendered.
When set to true, it flips the photo and description horizontally. We only have three pillars,
so only pillar 2's isreversed value should be set to true. For the other two pillars, they should be
set to false, as we want them to be displayed regularly.


*** The project imports static photos from the 'public' directory. The path prefix '/' is
set to already reference this folder. So, if you want to access the image called
'tesla-logo.png' in the public directory, use the 'imagePath' value '/tesla-logo.png'. ***

The pillars component will pull images from the directory '/about-content/pillars'.
When updating the photos, add your desired photos in this directory, and update the
exported JSONs with the appropriate image paths and descriptions. The image path should follow the
format: '/about-content/pillars/[image-name].[file-type]'

The order which you list the pillars below is the order they will be displayed
on the webpage.

*/

export const pillars = [
    {
        num: 1,
        name: 'Camaraderie.',
        description: 'Insert short blurb about camaraderie here.',
        imagePath: '/about-content/pillars/cam.jpg',
        imageDesc: 'Selfie time at our 2023 grad shoot!',
        isReversed: false,
    },

    {
        num: 2,
        name: 'Professionalism.',
        description: 'Insert short blurb about professionalism here.',
        imagePath: '/about-content//pillars/prof.jpg',
        imageDesc: 'Officers at DUEN formal 2023!',
        isReversed: true,
    },
    
    {
        num: 3,
        name: 'Philanthropy.',
        description: 'Insert blurb about philanthropy here.',
        imagePath: '/about-content/pillars/cs.jpg',
        imageDesc: 'DUEN officer feeding the hungry!',
        isReversed: false,
    }
]