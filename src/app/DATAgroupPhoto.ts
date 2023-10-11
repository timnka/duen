/*

------------- DATAgroupPhoto.js
This file exports a JSON constant with data for the group photo on the LANDING page
(not the cover photo that takes up tahe screen, but the smaller one below).

The JSON object has the format:
{
    path: '/landing-content/[file].jpg',
    imageDesc:'Image Description'
}

*** The project imports static photos from the 'public' directory. The path prefix '/' is
set to already reference this folder. So, if you want to access the image called
'tesla-logo.png' in the public directory, use the 'imagePath' value '/tesla-logo.png'. ***

This component will pull images from the directory '/landing-content'  in the 'public' directory.
When updating the photos, add your desired photo in this directory, and update the
exported JSONs with the appropriate image paths and descriptions.

*/

export const groupPhoto = {
    path: '/landing-content/cover1.jpeg',
    imageDesc:'DUEN during Recruiment Week 2023!'
}