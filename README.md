  # FEC - Front End Capstone

Simple overview of use/purpose.

## Table of Contents
  * [Description](#description)
  * [Geting Started](#getting-started)
    * [Git Workflow](#git-workflow)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Executing program](#executing-program)
  * [Authors](#authors)
  * [Version History](#version-history)

## Description
###### Summary
The Front End Capstone is a fullstack app using an external API designed to challenge our CSS, HTML, and React skills / knowledge 
as well as promote growth in these areas.
We chose to design an E-Commerce website called Buy-N-Large, an online clothing store based off the same company from the movie Wall-E.
The Website's design is entirely based off of the theme of the consumer section in the spaceship Axiom featured in Wall-E.
Our website allows the user to browse a product, its styles, related products, and any questions and answers about said product.
###### Overview
This widget allows users to view different images and styles, as well as review details, and a description of the product.
This section also contains the Add To Cart component, allowing the user to specify a Size and Quantity of the item and then add it to their cart!
###### Related Products / Outfit
This widget allows users to view similar and related items to the current product along with info about those products.
Users can open a comparison Modal that compares the features of the product versus the current product.
Additionally, users can add items to their outfit, creating a collection of products that can be viewed side by side.
###### Questions and Answers
This widget allows users to search through existing questions for helpful information.
If the question they search for doesn't exist, they can pose the question themselves with the Add Question modal!
Each question contains an answers section where users or the Seller can answer a question through the Add Answer modal 
and add potentially helpful photos.
###### Other
Our website uses URLs that contain the current product ID so you can share the product with friends or family.
The site also allows the user to switch between a light and dark mode.

## Getting Started

### Git Workflow

* Clone FEC

* Create and Move to a new feature:
    ```
    git checkout -b <featureName>
    ```

* Make frequent commits

* Send push to main:
    ```
    git push origin <featureName>
    ```

* Create pull request
    * Add what your PR achieves
    * Include any Questions

*  Await code review

### Dependencies

* NPM
* All required libraries and modules from package.json
    ```
    npm i
    ```

### Installing

* To download the program, you can clone the repo
* You will have to rename the 'example.env' folder to '.env' and add the port number and API token

### Executing program

* Move into the FEC directory
* Run the following commands:
    ```
    npm run build
    npm run start
    ```
* Then, navigate to the localhost:port!

## Authors

Jacob Davis - Product Overview
![Screenshot](README_IMAGES/overview.png)

Alex Libacova - Related Items and Outfit
![Screenshot](README_IMAGES/related.png)
![Screenshot](README_IMAGES/outfit.png)

Daniel Greaves - Questions and Answers
![Screenshot](README_IMAGES/q&a.png)

## Version History

* 0.1
    * Initial Release
