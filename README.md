# Shortly

<img src="../../url-shortening-api-master/shortly/src/images/footer-logo .svg"/>

This is a Frontend Mentor's URL shortening API coding challenge that aims to help one improve their coding skills by building realistic projects.

## The Challenge
 
 The challenge is to build out the landing page found in the design folder, integrate with the [shrtcode API](https://app.shrtco.de/) and get it looking as close to the design as possible.
 Also, it is expected that users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
    - The `input` field is empty


  ### The Building Process
  To build out the solution to the url shortening api webpage, I decided to use React Js framework, so I can practice and learn react more.
  The following are the steps taken to enable me complete the project:
  
  - Setting up the development environment: To set up the dev environment, I opened the file folder on my VS Code terminal and then ran ``` npx create-react-app shortly``` and this command created a react app named shortly inside my already opened folder, with all the essential dependencies.

  - Adding up the extra tools needed: To make sure the application which I'm about to develop functions as expected, I installed extra dependencies using ```npm install``` followed by the dependecies needed. Below are the extra tools installed:

  * react-router-dom for routing and navigating freely,
  * react-bootstrap for styling the application, and,
  * react-icons.

  ### Building of the application in full
  Since the react framework is component base, I started developing the application by cleaning up the default codes on the App.js file, and added the codes which I needed to make the app to start running. After that, I ran ```npm start`` so my work can runs the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  I cotinued my work by creating a component folder where I created more folders which would be holding the different files that will be having the codes essential for the app development.
  Below are the folders created in the component folder:

  - Header : Inside the header folder are two(2) files which are :
    - Header.js: This is where all the codes used in creating the navigation bar can be found.
    - Header.css: This holds all the custom css codes used in styling the navigation bar.

  - Footer : Inside this folder also are found same types of files like in the header folder, but the only difference is that these files holds the codes used for creating and styling the footer of the website.

  - Features : This folder is made up of six(6) files and 5 of the files, are actually a smaller component on it's own holding different codes that produce the actual design of the project found in the Features.js file.

  To make sure I have a well functional website with the active states working as expected, I added 4 additional folders to the component folder, and added an AppLayout.js file where I kind of structured how I wanted the application layout to look.
  Still on the functionality of the website, I created a Router.js file in the src folder, where all codes about the navigation routing can be found.

### Screenshots

![Desktop](../../url-shortening-api-master/shortly/src/images/Desktop-view.png)
![Mobile](../../url-shortening-api-master/shortly/src/images/Mobile-view.png)

  ### What I Learnt
  During the application building period, I really learnt alot both in the area of mapping through nav links, routing, and working on the url shortening functionality.
  One of the things I learnt about nav links mapping is that I can actually use the react-bootstrap navigation codes along with the react-router-dom nav link and the combination will come out as desired as seen in the code below:

  ```
  function Header() {
    return (
      <Navbar expand="lg" className='navbar-main mx-auto'>
        <Container className='nav-container' >
          <Navbar.Brand href="/" className='logo'>
            <img src={Logo} alt='logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="menuToggle">
            <GiHamburgerMenu className='menu'/>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='nav-gap'>
              {Navlinks.map((link) => (
                <NavItem key={link.title} className='nav-house'>
                  <NavLink
                    to={link.href}
                    className={({
                      isActive 
                    }) => [
                      "text-center",
                      isActive ? " active-link " : " nav-plain",
                    ].join(" ")}
                  >
                    {link.title}
                  </NavLink>
                </NavItem>
              ))}
              <hr className='d-lg-none'/>
              <NavItem className='nav-btn'>
                <Nav.Link href='/login' className='logBtn '>
                  Login
                </Nav.Link>
                <Nav.Link href='/signup' className='signBtn'>
                  Sign Up
                </Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
```
On the aspect of the url shortening functionality, I learnt alot especially in the area of adding new shortened link to the existing link both on the local storage and the result section. Though it was not an easy task, but with the help google research, I was able to solve all the issues I encountered during the application development.

### Link

- Live Site URL: [Shortly Url Shortening API](https://your-live-site-url.com)

### Acknowledgement

I would love to acknowledge and thank all developers who take out time to put out solutions to dev issues on youtube just to help anyone facing such challenges. Some of such developers are:
- Caleb Curry, this video of his (https://www.youtube.com/watch?v=uFSu6tgYKRY) really helped when I was having the challenges making the active state of my navigation visible.
- TsbSankara's video (https://www.youtube.com/watch?v=Y8FSiP9_Pb0) also helped when I was fixing the url shortening functionality.

Also, Stackoverflow and Freecampcode articles where of great help during the project development.


  


