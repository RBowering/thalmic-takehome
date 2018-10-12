# Submission
---
This is my submission for the Thalmic Labs Front-End/Full-Stack interview take home challenge. I present a solution that focuses on a minimal layout that takes advantage of Thalmic's colour branding and a mobile first approach.

# Structure
I aimed to use a single store for this project in order to not overcomplicate things. I used `pico-flux` as my state management library and was pleasantly surprised at the improvements the library has undergone since I had last used it.

The only other notable library used was `informed`  in order to make managing the state of the solitary form easier.

### React
The structure of the react components is focused on the three main areas of the app - Header, Main content, and the Sidebar.

Outside of the event components, only one other shared component was created - Panels. Although the panels only got used for the event list, it's always nice to have a panel component laying around.

### LESS
`variables.less` contains the declaration of all the less variables used in the app and also a few mixins for breakpoints.

`tweak.less` is empty, but is included in such a way that variables can be overridden here without having to modify the original value in the variables file.
This also has the potential to be extended for themeing purposes.

### Node
No changes made.

# Filtering
In addition to basic filtering, I also included the ability to filter based on arbitrary field inside of the event. To utilize this, use the format `field: value` when searching. Any field can be used for this, even the timestamp if you're able to have the exact milliseconds.

# Extra Considerations
While I did not have the time needed to add these extra features I will touch upon what my approach would be.

### Inconsistent Internet
If connections are flakey, the actions sending requests could be modified to queue up failed requests. Middleware for superagent could be used for this as well, however if part of the goal is to make sure the end user doesn't notice, it's important to make sure the remaining actions needed for a 'successful' case are followed as well.
Care must be given to make sure that requests receiving valid errors do not get queued, and if you do want this process to be obvious to the user, then the failed requests could be stored in the store so that the UI can know that something is pending.

### More complex filtering
While I have implemented slightly complex filtering in my submission, to make this a product for more than technical people or domain experts, a pop-over UI would have to be created to select which relevant fields will be searched. This could also include sorting options to make it easier to scan through the results.

In order to get this right I would need to ask the operators what their most common use cases are when using this tool. What information do they actually care about? What terminology might they use that doesn't line up with the technical implementation. This would be very important in creating intuitive labelling.

### Server side rendering
While it's awesome that Vitreum does seem to support isomorphic loading out of the box, the issue of hydrating data still needs to be solved. Luckily there appeared to be a hydrate function that can be called when rending is about to happen.
In order to utilize this properly, critical API calls would have to be made first, then when those are resolved, the resulting data would need to be passed into the render.

To make this easier, each store could be structured to have a `fromHydratedData` and `toHydratedData` method. With this approach it should be possible to call the needed actions (making sure all actions return promises if they are async), and then when all promises are resolved, call `toHydratedData` and stick it in the hydrate function.
From there, once on the front-end `fromHydratedData` could be called immediately to grab any and all data and initialize the store with it.