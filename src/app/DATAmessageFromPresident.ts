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
    message: 'Hello everyone! Davis Undergraduate Engineering Network (DUEN) is a club at UC Davis for those looking to connect with students interested in Engineering and Computer Science, interested in connecting with their peers! As president, I aim to foster a strong sense of camaraderie and professionalism within the club by creating engaging opportunities for members to collaborate, grow their skills, and connect meaningfully, both socially and professionally. ',
    presidentName: 'Aliya Abla',
    presidentCohort: 'Fall 2023',
    imagePath: '/officers/Abla_Aliya.jpg'
}
