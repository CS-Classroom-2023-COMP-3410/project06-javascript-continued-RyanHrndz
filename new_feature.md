New Feature: Spider-Man Themed Web-Shooter Game & Theme Selector

Feature Description

The feature we attempted to add was a Spider-Man themed Web-Shooter Game where players would click on letters representing villains to "web" them before they disappeared. Additionally, we tried to implement a theme selector that would allow users to choose different Spider-Man styles for the website, such as Classic, Symbiote, Miles Morales, and Iron Spider.

Why This Feature is Reasonable for a Frontend Project

This feature is reasonable because:

Interactive elements like games increase user engagement on websites.

Dynamic styling (theme selection) is a common feature in frontend projects, allowing users to customize their experience.

JavaScript DOM manipulation is a standard way to update UI elements dynamically.

Many popular sites and educational platforms include small interactive games and customization options for improved user experience.

How It Was Supposed to Work

Web-Shooter Game

A villain's first letter would randomly appear on the screen.

Users would click the letter to "web" the villain and earn points.

If users missed too many villains, the game would end.

The game would keep track of the score and reset when restarted.

Theme Selector

Users would click a theme button to change the website's colors.

The selected theme would be saved in local storage to persist on page reload.

The page would apply the stored theme upon loading.

How ChatGPT Failed to Implement It

Web-Shooter Game Issues

Villains were not appearing correctly on the screen.

The game logic did not properly handle villain removal when they were clicked.

The game was not keeping track of the score and misses accurately.

The game did not always start correctly when the "Start Game" button was clicked.

Theme Selector Issues

The selected theme was not consistently applied when switching.

Local storage sometimes failed to save and apply the chosen theme on refresh.

The buttons were correctly placed but did not always trigger the expected CSS changes.

Conclusion

Despite multiple debugging attempts, we were unable to fully implement these features within the three-attempt limit. The Web-Shooter Game and Theme Selector both had logical errors that prevented them from working correctly. While ChatGPT was able to generate valid code structures, it struggled with the finer details of UI updates and event handling, leading to persistent issues.

This experience highlights the importance of testing and debugging in frontend development, as well as the limitations of AI-generated code when handling complex interactions. Moving forward, manual debugging or integrating external libraries might be needed to complete these features successfully.