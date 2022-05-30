# The Pizza Company


## Background
***

  The Pizza Company is a pizza delivery application where a customer can oder pizza and opt for cash on delivery method or make online payment through paypal.
  It is built using NextJS which is an open-source web development framework built on top of Node.js enabling React based web applications functionalities such 
  as server-side rendering and generating static websites. NextJS is a complete full-stack framework. Redux is used in this application for state management.
  

**Note:** This application is deployed on Vercel Platform which is developed by the team behind Next.js.

## Features Implemented
***

* The Home page contains the featured component where all the offers that are available will be displayed and the cutomer can slide 
  through it using the left arrow button and the right arrow button.
* Below the featured component we have the list of all the Pizza's Veg or Non-Veg with the image of Pizza, their price and small description. 
  If any Pizza gets clicked the customer will be directed to the product page with the details of that clicked Pizza.
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
* The Orders Page contains the real-time details of the Placed Order. For example, which stage the order is currently at. And, on the right side the total amount paid
  and the payment method will be shown e.g., "PAID" or "To be Paid Via Cash".
* Now, for admin 


## New features to be added
***

* Add User Sign Up and Log In Features so that user can access its personal profile data.
* Add Google Sign Up Option.
* Make the Order button in the Navbar functional which will redirect the customer to its orders page.
* Implement more features as a personal practice project.


## Demo
***

### Live Deployed Website : [https://the-pizza-company.vercel.app/](https://the-pizza-company.vercel.app/)
---

### Demo Video
---


https://user-images.githubusercontent.com/68272020/170862344-f872f21e-7212-453a-a527-0dc51e189715.mp4



