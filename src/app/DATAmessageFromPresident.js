/*

------------- DATAmessageFromPresident.js
This file exports a JSON constant with data for the Message from our president component on the LANDING page.

The JSON object has the format:
{
    title: 'A Message From Our President',
    message: 'Insert the actual message from the president here.',
    presidentName: 'Insert president name.',
    presidentCohort: 'Fall 2022',
    imagePath: '/landing-content/[FILE-NAME].jpg'
}

*** The project imports static photos from the 'public' directory. The path prefix '/' is
set to already reference this folder. So, if you want to access the image called
'tesla-logo.png' in the public directory, use the 'imagePath' value '/tesla-logo.png'. ***

This component will pull images from the directory '/landing-content' in the 'public' directory.
When updating the photos, add your desired photo in this directory, and update the
exported JSONs with the appropriate image paths and descriptions.

*/

export const messageFromPresident = {
    title: 'A Message From Our President',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu dictum neque. Integer eu tellus id erat euismod malesuada. Maecenas id nunc ac arcu venenatis viverra. Vestibulum quis bibendum arcu. Vivamus sed mauris eget purus mollis suscipit. Nunc eleifend consequat elit, ac feugiat nulla blandit in. Proin sed leo at ex tristique tempus. Sed ac quam a nisi laoreet semper.',
    presidentName: 'Matthew Suyetani',
    presidentCohort: 'Fall 2022',
    imagePath: '/landing-content/suye showercap.jpg'
}