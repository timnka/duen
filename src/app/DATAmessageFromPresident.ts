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
    message: 'Hi everyone! The Davis Undergraduate Engineering Network (DUEN) welcomes everyone with an interest in any engineering discipline to attend our events! As a member of DUEN, you meet other undergraduates with a variety of interests that grow to be your lifelong friends. In my past four years at Davis, I’ve met my closest friends in DUEN. I’m forever grateful to DUEN for connecting me with so many ambitious and innovative individuals. I’m proud to represent this group of officers and their work for the engineering community, and I hope to see you all at our events this year! ',
    presidentName: 'Samantha Wang',
    presidentCohort: 'Founding Cohort',
    imagePath: '/officers/Wang_Samantha.JPG'
}