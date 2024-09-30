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
    message: 'Hello everyone! Davis Undergraduate Engineering Network (DUEN) is a club at UC Davis for those looking to connect with students interested in Engineering and Computer Science, interested in connecting with their peers! We host general member events, open to anyone, pertaining to our core values of Professional Development, Camaraderie, and Community Service. Through DUEN, I’ve made lifelong friends who have truly shaped my undergraduate experience. I take pride in representing this organization and am excited to expand our community further! I look forward to seeing everyone at events this term! ',
    presidentName: 'Darshan Shivakumar',
    presidentCohort: 'Founding Cohort',
    imagePath: '/officers/Shivakumar_Darshan.JPG'
}
