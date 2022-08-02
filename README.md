# The Pizza Company


## Background
***

  The Pizza Company is a pizza delivery application where a customer can order pizza and opt for cash on delivery method or make online payment through paypal.
  It is built using NextJS which is an open-source web development framework built on top of Node.js enabling React based web applications functionalities such 
  as server-side rendering and generating static websites. NextJS is a complete full-stack framework. Redux is used in this application for state management. 
  CSS is used for styling. JSONWEBTOKEN is used for authentication.
  

**Note:** This application is deployed on Vercel Platform which is developed by the team behind Next.js.

## Features Implemented
***

* The Home page contains the featured component where all the offers that are available will be displayed and the cutomer can slide 
  through it using the left arrow button and the right arrow button.
* Below the featured component we have the list of all the Pizza's Veg or Non-Veg with the Image of Pizza, its name, price and small description. This Pizza
  list is displayed with the help of REST APIs HTTP GET method. Cloudinary Platform was used where the images were uploaded and are accessed through url when 
  the Pizza document is created in the products Object in the MongoDB Database.
* If any Pizza gets clicked the customer will be redirected to the product page with the details of that clicked Pizza.
* In the Product page the customer can select the size of the Pizza and the extra toppings, sauces and ingredients of their choices. The price will
  be updated based on the customer's extras list and the size of the Pizza. Also, the customer can increment/decrement the quantity of the selected Pizza
  and then he can click on the Add to Cart button right next to it. The moment that Button gets clicked, the Cart image on the upper right corner will be shown as 
  1 / 2 / 3 based on the number of orders placed by that customer. This number will be shown until that customer makes the payment and checks out from the Cart. 
* Now, if the customer clicks on the Cart Image on the upper right corner, the application will be redirected to the Cart Page.
* The Cart Page contains the details of the added Pizza and in the right part, the total amount, discount and taxes are shown. Below that there is a checkout Button
  which if gets clicked the customer can see two options to checkout from the Cart. One is Cash on Delivery and second is pay using Paypal.
* If Cash On Delivery is chosen the form will pop up on the screen to fill up details and then after clicking on Order Button, the page will be redirected to 
  Orders Page. While if Paypal is chosen then the Paypal window will get open where customer has to login to their account and make payment.
* The paypal is integrated into the application using their piece of code which simply integrates a button into the Page. I have created a dummy business account
  on Paypal for developers Portal using which this account can recieve money and make real payments successful. After making the payment the page will automatically
  be directed to the Orders Page. Once the customer arrives at the Orders Page, all the cart items will be removed. All this is done using the state management tool
  which is Redux here.
* The Orders Page contains the real-time details of the Placed Order. For example, which stage, the order is currently at. And, on the right side the total amount paid
  and the payment method will be shown e.g., "PAID" or "To be Paid Via Cash".
* Now, for admin, a login page is created where admin can login and can have access to the admin dashboard. After Sign In a token will be generated using jsonwebtoken   which authenticates whether the admin logged in or not and based on that admin dashboard will be accessible and. In the Admin Dashboard a list of all the Pizza's       will be there and admin can Edit/Delete any Pizza through REST APIs put/delete method. And, in the right part all the Orders will be there
  which has been placed so far. Admin can put any Order to Next Stage by Clicking on the Next Stage Button. And if the Order has been delivered then that Order will
  be removed from the Order's List.
* Also, At the Home Page, I have created Add New Pizza Button by clicking on which admin can fill up the details of the Pizza which is to be added to 
  the Products List with the help of REST APIs HTTP POST method.
* All the CRUD operations for Products and Orders Object in the MongoDB Database are performed using REST APIs HTTP POST, GET, PUT and DELETE methods.


## New features to be added
***

* Add User Sign Up and Log In Features so that user can access its personal profile data.
* Add Google Sign Up Option.
* Make the Order button in the Navbar functional which will redirect the customer to its Orders page where the Order details would be shown user specific.
  This can be implemented using cookies.
* Implement more features as a personal practice project.


## Demo
***

### Live Deployed Website : [https://the-pizza-company.vercel.app/](https://the-pizza-company.vercel.app/)
---

### Demo Video
---


https://user-images.githubusercontent.com/68272020/170862344-f872f21e-7212-453a-a527-0dc51e189715.mp4



