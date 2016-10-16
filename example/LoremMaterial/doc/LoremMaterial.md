
## Material content filling
![Material](ic_account_balance_black.png)
For easy themes design we required a realistic-looking content. It will be possible to try out different themes and immediately see how they look. For this we feel the need of help by designers and front-end developers in material design. Therefore, we are opening this trend and attract **#hacktoberfest** participants. We welcome all who wish to contribute.

We propose to fill this library by adding small pages or applications - each in a separate [story](https://sm-react.github.io/storybook-addon-material-ui/?theme-ind=0&theme-sidebar=false&theme-full=false&selectedKind=Material%20App&selectedStory=Hactoberfest%20issues%3A&full=0&down=1&left=1&panelRight=0&downPanel=sm%2Fstorybook-addon-material-ui%2Fmaterial-panel). They should be made in the material design style and look like a real application (no need to use real data). We are pleased to see various interesting applications, but you can try your hand at creating something simple.

We do not impose special restrictions to create pages, but please keep the following:
- It should be in the [Material Design](https://material.google.com/) style
- It should be based on the [Material-UI](http://www.material-ui.com/#/) library
- Should look good with different themes
- The appearance should rely on themes settings
- Should not copy an already existing [story](https://sm-react.github.io/storybook-addon-material-ui)
- Each story in a separate file (or a folder)

### to initiate the participation [fork this project](https://github.com/sm-react/storybook-addon-material-ui/fork).

![Material](ic_flight_takeoff.png)
Take `example/LoremMaterial/blankMaterialAppExampleProgress.jsx` as a starting point of development.

This project is built on the [React Storybook](https://getstorybook.io/docs) platform. It's a great basis for creating React components and applications. We create each `Lorem Material Page` as a separate `React Compenent` and add them as a story into storybook [follows](https://github.com/sm-react/storybook-addon-material-ui/blob/master/example/stories/index.js#L48)

We use material-ui components from [Material-UI](http://www.material-ui.com/#/) set  - The most popular and complete library for React that Implement Google's Material Design.

The aim of our [project](https://github.com/sm-react/storybook-addon-material-ui) is to create a comfortable environment for designers and developers allows them to work with React components based on the use of the [theming](https://facebook.github.io/react/docs/context.html#passing-info-automatically-through-a-tree). This approach allows us to divide the functionality and appearance of components. Teming can transmit various data and properties in components: color, size, styles, and the like. We are working to expand the available options.

We support [Material-UI Themes](http://www.material-ui.com/#/customization/themes) now.

You can edit theme data directly in the down-panel as a JSON structure. You can also edit the settings in the right panel using convenient tools. In any case, all changes will be immediately displayed in the selected story. Creating a new theme you need to specify only the parameters you want to override. All others will be taken from the base theme automatically. Please note that the settings specified in the pallete object will automatically be propagated to other objects. But you can set them directly. This is provided by the Material-UI library.

To learn more about material design follow the [link](https://material.google.com/)

We always welcome your questions, suggestions and ideas.

![Material](ic_accessibility_black.png)
don't forget to register on the [hacktoberfest](https://hacktoberfest.digitalocean.com/) to win a t-shirt

### For more details about the process of developing
- [make a fork](https://github.com/sm-react/storybook-addon-material-ui/fork).
![Material](ic_call_split_black.png)

- clone your repo to local machine and install
```
git clone https://github.com/YOUR-NAME/storybook-addon-material-ui.git
cd storybook-addon-material-ui
npm i
```

- Find `example/LoremMaterial/blankMaterialAppExampleProgress.jsx` and use it as a blank to start developing.
![Material](ic_create_black.png)

- Start storybook and check how it looks. Due to the [HMR] you will immediately see all the changes made to the file. Try different themes.
```
npm start
```

- Check codestyle.
```
npm run lintMaterial
```

- You can try to fix some erorrs automatically. But first make a commit:
```
git add .
git commit -m «my material story»
```

- Lintfix and then fix the remaining linting errors manualy
```
npm run lintfixMaterial
```

- Make final commit and push it to github: ![Material](ic_done_black.png) 
```
git commit -m «my ready to PR story»
git push

```
- Make  Pull request from your Github repo. ![Material](ic_call_split_black.png)

- encourage us by ![Material](ic_star_black.png) for our work!

