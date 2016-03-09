# Angularjs2WithMVC
[01/03/16]
Combine two demo tutorials together.One is the Angularjs 2 online demo, and the other is MVC using Angularjs 2.0 Router.

[02/03/16]
Hero demo by angularjs2.0 + ASP.Net MVC 6

Explain the page populated flow:
Start from  HomeController.IndexView, load _Layout.cshtml, Index View populated via @RenderBody

AngularJS 2 app component ---> populate app/app.html

display 3 routes;

each route has different components, from the component.ts file, set the templateUrl, this templateUrl is the actually url to invoke the 
asp.net mvc controller and methods using MVC Route.

[03/03/16]
When routeConfig or routeDefition to define the route, 'selector' property is NOT important anymore, because the templat/template html 

will be put on the location where <router-outlet> locates. 

[07/03/2016]
add dashboard view, angularjs route via URL: hero/:id with parameter id, and only get the hero with id.

todo: work out how to use templateURL which set to .html, curretnly use the MVC route, populate the partial view (.cshtml)

[08/03/2016]
Use templateURL to define the HTML template, same as partial view (which using MVC route mode controller/method)
todo: add button to creat new hero and invoke the web api post, put method.
