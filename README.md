# Project Overview


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## Project Links

- [github repo](https://github.com/Bibhor2000/Project-2)
- [deployment](https://character-creator-indol.vercel.app/QuickDocs)
- [demo recording]()
- [api](https://avatars.dicebear.com/styles/pixel-art)

## Wireframes & React Component Hierarchy

- [wireframes](https://media.git.generalassemb.ly/user/45902/files/421189b5-7cdd-4291-ac6e-449e22b33355)
- [react architecture](https://media.git.generalassemb.ly/user/45902/files/9a175dba-283b-4873-9387-76f6b6b24317)


#### MVP Goals
- To set different inputs for all customizable aspects of the avatar icon.
- To generate an accurate avatar icon based on all the inputs by the user.


#### PostMVP Goals

- Adding a css styling based on the chosen theme
- Make it dynamic to where once an input is set it will display in a div that is holding the img element that will display the final avatar icon
- Adding a menu for different background music to play while the user is choosing their character

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | The app will hold all the initial states and serve as the parent for any props that need to be passed down to components | 
| Header | This will render the header which currently only contains a header | 
| Footer | This will render the footer which holds the buttons for playing and pausing background music | 
| Dropdown | This will render multiple dropdowns with various inputs to create a custom character |
| Icon | This will render a button that will take the values of all selected inputs and generate a character from the API |
| QuickDocs | This will house all information regarding the project, how to use it, and a link to the API that was used |

## Time Frames

Time frames are also key in the development cycle.  You have limited time to code all phases of the project.  Your estimates can then be used to evaluate project possibilities based on time needed and the actual time you have before the project must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add an additional hour or two to each component to play it safe. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Dropdowns | H | 8hrs| 11hrs | 11hrs |
| Working with API | H | 30mins | 1hrs | 12hrs |
| Button | H | 30mins | 30mins | 12.5hrs | 
| QuickDocs | H | 1hr | 2hrs | 14.5hrs
| Custom names for inputs (stretch goal) | M | 4hrs | at least 20 hours(DNF) | 
| Total | H | 30hrs| 34.5hrs | 34.5hrs |

## Additional Libraries
- None were used
## Code Snippet

```
let mouths = mouthList.map(m => {
        return (
            <option value={m}>{m}</option>
        )
    })
    

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

	return (
		<select name='mouths' onChange={handleChange}>{mouths}</select>
	)
```

## Issues and Resolutions
**ERROR**: Dropdown.js TypeError
**RESOLUTION**: It was a typo where I mispelled one of the props that was passed down along with that prop not being passed down in container.js

**ERROR**: 404 Bad Request
**RESOLUTION**: The url is a string literal that takes in inputs containing locally stored data as objects, some of the import statements for those data were imported from the wrong location in app.js

**Note**: A lot of help and guidance was received by Katharyn & Hayk which shaped the direction I took for this project such as using the "handleChange" function to target the values of each input in the dropdown and having it passed onto the string literal

**Some Used References**: 
-[For anchoring the footer to the bottom](https://www.geeksforgeeks.org/how-to-create-footer-to-stay-at-the-bottom-of-a-web-page/)
-[For playing Background Audio](https://stackoverflow.com/questions/54114171/how-to-play-an-mp3-once-onclick-in-react)