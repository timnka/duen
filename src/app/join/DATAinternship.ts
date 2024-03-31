/**

-----------DATAinternship.js

This file provides data for the Internship tab in the TabComponent in the JOIN page.

********* This exports a JSON constant with data for the internship tab ********

The JSON format must be as follows:

{
    title: 'Want to become a DUEN officer?',
    subtitle: 'Go through our internship program to...',
    imagePath: '/join-content/sp23-cohort.jpg',
    imageDesc: 'Our Spring \'23 Cohort & their hockey table project!',
    bulletPoints: [
        '[BULLET POINT #1]',
        '[BULLET POINT #2]',
        '[BULLET POINT #3]',
        ...
    ]
}

******* Each json must follow the above format. If any properties are in a different order as listed above or
even missing, the program will likely crash. *************

JSON property guide:
The properties are pretty self explanatory, but I'll elaborate on bulletPoints.
The bulletPoints property is a list, of bullet points, NOT another JSON. The order which the bullets are listed here is the order they will be displayed on the web page.

This entire project imports all photos from the 'public' directory. 
The path prefix '/' is already set to already reference this folder.
So, if the file 'image1.png' is in the 'folder1' directory in the 'public' directory, reference this file with the file path:
    '/folder1/image1.png'. DO NOT USE THE PATH '/public/folder1/image1.png', IT WILL NOT WORK IF YOU DO SO.
Having '/' be the prefix for the path is already recognized as referencing the 'public' directory.

THIS component will pull images from the directory '/join-content' in the 'public' directory.
When updating the photo, add your desired photo in this directory, and update the
exported JSONs with the appropriate image paths and descriptions. The path should be '/join-content/[logo-file].[file-type]'.
So, if you want to display the flyer called 'image1.jpg', the path should be '/join-content/image1.jpg'. Make sure the file is actually there too, of course.

Practice good file management by placing files in the correct directories, using descriptive file names, and by deleting obsolete content from previous terms.

*/

export const internship = {
    title: 'Want to become a DUEN officer?',
    subtitle: 'Go through our internship program to...',
    imagePath: '/join-content/fall23-cohort.JPG',
    imageDesc: 'Our Fall \'23 Cohort & their airplane launcher project!',
    bulletPoints: [
        'Join a fun, welcoming group of engineers at UC Davis!',
        'Take on high impact leadership roles to keep serving the Davis engineering community.',
        'Acquire invaluable professional development through our simulated internship program.',
        'Get hands on engineering experience by contributing to a group construction project.',
        'Gain access to an extensive alumni network with deep roots in industry.'
    ]
}