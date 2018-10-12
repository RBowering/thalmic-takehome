# Software Engineering — Take-Home Challenge

### Introduction
Consider a web-service capable of storing, fetching and deleting events emitted by a variety of clients. Your task is to design and implement a frontend for this service using ReactJS. Feel free to use any additional technologies and/or npm packages under the hood if you wish.

A skeleton project has been provided for you using a template similar to that which we use in order to save you time. The idea is that this way you can focus on the functionality and design of your app — not worrying about tooling.

### Getting Started

The project structure has already been set up for you to save time. Check out the scripts section in the package.json for commands to run that will build and start the project.

```
npm install

npm run dev
```
The project is set up for you to build already. Check out the `scripts` section in the `package.json` for commands to run that will build and start the project.

#### Build System
For more information about Vitreum (the build system we use) you can find it [here](https://github.com/stolksdorf/vitreum).

Getting Started
The project structure has already been set up for you to save time. Check out the scripts section in the package.json for commands to run that will build and start the project.

Install Packages → npm install
This also automatically runs npm run build
Start the project in development mode (for file watching, reloading) → npm run dev


#### Project Structure
Here is a quick legend to help get you started, navigating the project structure:

| Function      | Location                    |
|---------------|-----------------------------|
| Components    | `./client/...`              |
| Node/Express  | `./server/server.js`        |
| HTML Template | `./server/page.template.js` |

#### Important:
Use `require` statements to bring files and packages into your project, vitreum does some additional work for you under the hood when using the require statement.

Anything you `require` will be bundled and available to the client, this means if you write CSS (.less) for a component, you should require it in the `.jsx` file of the same name to make sure it is bundled and applied correctly.

You can see an example of this inside `./client/main.jsx`

### Submission
Please submit a zip archive or git repository implementing the above tasks. In addition, please provide a `README.md` with:
- Command-line usage instructions
- Any assumptions made and background on design decisions you feel need explanation.

### Event Objects
An event will be JSON with the following format:
```
{
    "type": "[string] The event type",
    "serviceId": "[string] An ID for the service that created this event",
    "icon": "[string] The URL to a small icon for this event",
    "timestamp": "[string] A timestamp indicating when the event occurred",
    "title": "[string] A short summary description of the event",
    "data": "[string] The event payload"
}
```

The main thing we’re interested in is how you design your frontend. We've already set up a RESTful API that you may use to store and manage your events.

**Note:** The server stores these event objects non-persistently in memory and they may be erased periodically.

#### Storing a new event:
`POST` `https://forgetful-elephant.herokuapp.com/events`

The server will assign your event an ID and return the object that was saved (including its new ID).

#### Retrieving a collection of saved events:
`GET` `https://forgetful-elephant.herokuapp.com/events`

The server will respond with an array of event objects.

#### Deleting an event:
`DELETE` `https://forgetful-elephant.herokuapp.com/events/:id`

The server will delete the event indicated by the specified ID and return the object that was deleted.

### Front End
Create a React UI that can show a list of these events and a side-panel next to the list. An event entry in the list should display the event's type, title, and icon. When you click one of the events, it should populate the side-panel with all the details of the event. You should also be able to delete events. The overall structure and style in which you display the data are up to you, however, it must fit the listed requirements.

### Requirements
- We care about the quality of the code and not merely a working solution.
- Use a CSS preprocessor. The project comes with LESS set up for you.
- There should be a separate style file that has "tweakable" style settings, such as dimensions, font sizes, etc.
- Add the ability to filter the events based on user input.
- Use [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and/or [Grids](https://css-tricks.com/snippets/css/complete-guide-grid/) wherever you can to make layouts more intuitive.
- Build as many components as you feel are needed.
- Document your project along with any other notes/considerations/etc. using submission.md.


### ESLint
We have included an `eslint` configuration that we typically use for front-end applications. If there are any rules that you found you were missing or wanted to remove/change - let us know!

### Extra Considerations
If you finish early and want to experiment with some more features, have a look at the items below. If you just want to provide a written response for these questions to describe how you would implement them, that's okay too:

- How could we make this tool handle inconsistent internet connection?
- If our operators wanted to add more complex filtering how would you do it? What questions would you need to ask them to make sure you get the feature right?
- If we wanted to fully utilize server-side rendering with API data, how would you do that?
- What other features do you think would be useful to add to this tool?

---

Good luck and if you have any questions, please don’t hesitate to contact brock.dusome@thalmic.com.
