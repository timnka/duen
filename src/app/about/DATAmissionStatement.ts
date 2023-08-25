/**

-----------DATAmissionStatement.js

This file provides data for the Mission Statement component in the ABOUT page.

********* This exports a JSON constant with data for the mission statement ********

The JSON format must be as follows:

{
    title: 'Insert mission title',
    mission: 'Insert actual mission statement',
    path: 'Insert image path',
    imageDesc: 'Insert image path here'
}

******* Each json must follow the above format. If any properties are in a different order as listed above or
even missing, the program will likely crash. *************

The properties should be pretty straight forward, just make sure that the image is located in the correct
directory, the image path references the corect file, and the correct image description is provided.

This entire project imports all photos from the 'public' directory. 
The path prefix '/' is already set to already reference this folder.
So, if the file 'image1.png' is in the 'folder1' directory in the 'public' directory, reference this file with the file path:
    '/folder1/image1.png'. DO NOT USE THE PATH '/public/folder1/image1.png', IT WILL NOT WORK IF YOU DO SO.
Having '/' be the prefix for the path is already recognized as referencing the 'public' directory.

THIS component will pull images from the directory '/about-content' in the 'public' directory.
When updating the photo, add your desired photo in this directory, and update the
exported JSONs with the appropriate image paths and descriptions. The path should be '/about-content/[logo-file].[file-type]'.

*/

export const mission = {
    title: 'Our Mission',
    statement: 'The purpose of Theta Tau is to develop and manintain a high standard of professional interest among its members and to unite them in a strong bond of fraternal fellowship.',
    path: '/about-content/pitvipers.jpg',
    imageDesc: 'cool guy taking selfie before leaving for school'
}