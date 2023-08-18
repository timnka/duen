/*

----------- DATAcompanies.js
This is the company data for the alumni network panel in the ABOUT page.

********* It exports an array of JSON object constants. ************

Each JSON object has the format:

{
    name: 'COMPANY-NAME',
    path: 'IMAGE-PATH'
}

******* Each json must follow the above format. If any properties are in a different order as listed above or
even missing, the program will likely crash. *************

******* NOTE: THE LOGO MUST BE A PNG WITH A TRANSPARENT BACKGROUND OR ANY OTHER IMAGE WITH A WHITE BACKGROUND *******
************* OTHERWISE IT WOULD LOOK SILLY ON THE WEBSITE *******

The project imports all photos from the 'public' directory. The path prefix '/' is
set to already reference this folder. So, if you want to access the image called
'tesla-logo.png' in the public directory, use the 'path' value '/tesla-logo.png'.

This component will pull images from the directory '/about-content/logos' in the 'public' directory.
When updating the photos, add your desired photo in this directory, and update the
exported JSONs with the appropriate image paths and descriptions. The path should be '/about-content/logos/[logo-file].png'.

The order which you list the companies here is there order they will be displayed
on the webpage.

*/

export const companies = [
    { name: 'google', path:'/about-content/logos/google.png'},
    { name: 'amazon', path:'/about-content/logos/amazon.png' },
    { name: 'apple', path:'/about-content/logos/apple.png' },
    { name: 'microsoft', path:'/about-content/logos/microsoft.jpg'},
    { name: 'docusign', path:'/about-content/logos/docusign.jpg'},
    { name: 'tesla', path:'/about-content/logos/tesla.png'},
    { name: 'genentech', path:'/about-content/logos/genentech.png' },
    { name: 'pinterest', path:'/about-content/logos/pinterest.png'},
    { name: 'ebay', path:'/about-content/logos/ebay.png'},
    { name: 'instacart', path:'/about-content/logos/instacart.jpg'},
    { name: 'nasa', path:'/about-content/logos/nasa.png'},
    { name: 'workday', path:'/about-content/logos/workday.png'},
    { name: 'chevron', path:'/about-content/logos/chevron.png' },
    { name: 'wells-fargo', path:'/about-content/logos/wells-fargo.png'},
    { name: 'hpe', path:'/about-content/logos/hpe.png'},
    { name: 'ibm', path:'/about-content/logos/ibm.png'},
    { name: 'intel', path:'/about-content/logos/intel.png'},
    { name: 'keysight', path:'/about-content/logos/keysight.png'},
    { name: 'texas-instruments', path:'/about-content/logos/texas-instruments.png'},
    { name: 'varian', path:'/about-content/logos/varian.png'},
]