/**

-----------DATArecruitment.js

This file provides data for the Recruitment component in the JOIN page.

********* This exports a JSON constant with data for the mission statement ********

The JSON format must be as follows:

{
    title: 'Recruitment',
    description: '[INSERT RECRUITMENT BLURB HERE]',
    isActive: [true or false],
    activeRecruitment: {
        title: 'We are actively recruiting new officers for [ACADEMIC TERM]!',
        activeDescription: 'Come meet and hang out with DUEN officers at our Welcome Week events!. Date, time, and location can be seen below.',
        flyer: '/join/[IMAGE-NAME].[FILE-TYPE]'
    },
    inactiveRecruitment: 'We are not currently recruiting new officers. We open recruitment at the beginning of every Fall and Spring quarters. Follow us on Instagram [IG-HANDLE] for updates!'
}

******* Each json must follow the above format. If any properties are in a different order as listed above or
even missing, the program will likely crash. *************

JSON property guide:
1. title --> self explanatory, should almost always be 'Recruitment'
2. isActive --> This is a boolean value that is set to true if Recruitment is currently active, false otherwise.
                It should probably only be set to true a week or two leading up to (and through) Welcome Week each Fall and Spring quarter.
3. activeRecruitment --> This is a JSON object that contains the necessary data for if the isActive property (right above) is set to true, i.e. we ARE actively recruiting.
                         It contains the subproperties title, activeDescription, and flyer.
                         The title subproperty is the declaration that we are indeed actively recruiting.
                         The activeDescription is the general description about welcome week, and encouraging attendance at them.
                         The flyer property is the file path to the current term's flyer. It needs to start with '/join/'. It must also be located in the same directory. More on that below.
4. inactiveRecruitment --> This is the description that is displayed when we are not actively recruiting. It will likely refer users to stay posted on recruitment opportunities by
                            following our instagram page.

**** Depending on the value of isActive, the content of 'activeRecruitment' or 'inactiveRecruitment' won't matter much.
So, if isActive is false, then the values of 'activeRecruitment' won't be read at all and does not need to contain the most up to date data, and vice versa.
Just make sure that whichever side is being dispalyed is up to date.

This entire project imports all photos from the 'public' directory. 
The path prefix '/' is already set to already reference this folder.
So, if the file 'image1.png' is in the 'folder1' directory in the 'public' directory, reference this file with the file path:
    '/folder1/image1.png'. DO NOT USE THE PATH '/public/folder1/image1.png', IT WILL NOT WORK IF YOU DO SO.
Having '/' be the prefix for the path is already recognized as referencing the 'public' directory.

THIS component will pull images from the directory '/join-content' in the 'public' directory.
When updating the photo, add your desired photo in this directory, and update the
exported JSONs with the appropriate image paths and descriptions. The path should be '/join-content/[logo-file].[file-type]'.
So, if you want to display the flyer called 'iamge1.jpg', the path should be '/join-content/image1.jpg'. Make sure the file is actually there too, of course.

Practice good file management by placing files in the correct directories, using descriptive file names, and by deleting obsolete content from previous terms.

*/

export const recruitment = {
    title: 'Recruitment',
    description: 'Interested in becoming an officer? Learn more about DUEN and get to know our officers through recruitment! At the beginning of every Fall and Spring quarter, we host a recruitment week packed with professional development events and social gatherings. ',
    isActive: false,
    activeRecruitment: {
        title: 'We are actively recruiting new officers for Spring 2024!',
        activeDescription: 'Come meet and hang out with DUEN officers at our recruitment events. Date, time, and location can be seen below.',
        flyer: '/join-content/fall23flyer.png'
    },
    inactiveRecruitment: 'We are not currently recruiting new officers. We open recruitment at the beginning of every Fall and Spring quarters. Follow us on Instagram @duen_ucd for updates!'
    
}