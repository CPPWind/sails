---
inject: true
to: <%= storyPath %>
append: true
---
story.add('<%= componentName %>', () => <<%= componentName %> />)
