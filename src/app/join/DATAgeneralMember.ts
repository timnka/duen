/**

-----------DATAgeneralMember.js

This file provides data for the General Member tab in the TabComponent in the JOIN page.

********* This exports a JSON constant with data for the general member tab. ********

The JSON format must be as follows:

{
    title: 'Join us as a General Member',
    imagePath: '/join-content/[image-name].[image-type]',
    imageDesc: '[image description]',
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
The bulletPoints property is a LIST of bullet points, NOT another JSON. The order which the bullets are listed here is the order they will be displayed on the web page.

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

export const generalMember = {
    title: 'Join us as a General Member!',
    imagePath: '/join-content/duen-group.jpg',
    imageDesc: 'DUEN Officers at the State Fair!',
    bulletPoints: [
        'Come make new friends with like-minded students at our social events!',
        'Strengthen your abilities by attending our professional development workshops.',
        'Leverage full benefits from our events such as company info panels, professional photoshoots, and study sessions.',
    ]
}