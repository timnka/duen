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


This entire project imports all photos from the 'public' directory. 
The path prefix '/' is already set to already reference this folder.
So, if the file 'image1.png' is in the 'folder1' directory in the 'public' directory, reference this file with the file path:
    '/folder1/image1.png'. DO NOT USE THE PATH '/public/folder1/image1.png', IT WILL NOT WORK IF YOU DO SO.
Having '/' be the prefix for the path is already recognized as referencing the 'public' directory.

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
        description: 'By connecting with the various majors interested in engineering, DUEN members learn more about how engineers can collaborate to achieve larger goals. As a DUEN member, you gain tight-knit bonds with fellow engineering students and find your second family at Davis. DUEN officers can be seen grabbing bingsoo at Mandro, gymming together at the ARC, or even skiing together in Tahoe!',
        imagePath: '/about-content/pillars/cam.jpg',
        imageDesc: 'Selfie time at our 2023 grad shoot!',
        isReversed: false,
    },
    {
        num: 2,
        name: 'Professionalism.',
        description: 'As a member of DUEN, you have the opportunity to foster your professional skills through workshops. DUEN members also gain access to our alumni network, who help connect and prepare us for industry. Furthermore, through our internship program, you learn invaluable skills that will not only prepare you to be an officer of DUEN, but as an industry professional as well.',
        imagePath: '/about-content//pillars/prof.jpg',
        imageDesc: 'Officers at DUEN formal 2023!',
        isReversed: true,
    },
    
    {
        num: 3,
        name: 'Community Service.',
        description: 'We as future engineers strive to create a long-lasting impact through our innovations. One way we can do that now is by giving back to the greater Davis community. By investing our time into the community, we gain a broader perspective on how we can do more for others. ',
        imagePath: '/about-content/pillars/philanthropy.jpg',
        imageDesc: 'DUEN officers volunteering to do a park cleanup!',
        isReversed: false,
    }
]