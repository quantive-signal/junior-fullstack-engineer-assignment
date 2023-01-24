# Take Home Assignment - Junior Full Stack 
### Interface + API application (Insight Card)
---
### Use the base code that was provided in this repo. Assignments lacking the aforementioned code will be denied right away. The technical interview will centre on the candidate's comprehension of the above code.
**IMPORTANT** : We will consider exclusively the quality of your project (technology and product-wise) to evaluate your work. We've added a project structure in this repository (a build with react, reflux, typescript, webpack, babel config etc) to save you time. Feel free to use it. The app will also have its own separate login mechanism based on a username and password. Go through the details clearly. You have        **7 days** to submit the assigned task. We of course want you to solve the problem, but are equally interested to see how you solve it - the quality of your approach & code!
In case of any questions, send a mail to nidhi@quantive.com

Quantive Signals monitors your KPIs and intelligently collects your data, identifies anomalies, identifies factors that create unexpected changes, generates alerts and insights of when, what, and why something happens.

You will build a piece of our insights feature by creating the insight card screen.
### Development Instructions
---
**Evaluation**

Be aware that Origin will mainly take into consideration the following evaluation criteria:
- How close your page is to the mockups.
- How clean and organized your code is. We are looking for clear separation of back-end and front-end;
- If you implemented the business rules correctly.
- You are free to use any javascript chart library.

You can use third-party libraries in case you want to.

**Note: The candidate should have proper understanding of the code as the technical interview will revolve around it.**

### Assets
---
**Desktop view**
![alt text](https://cliff-uploads.s3.amazonaws.com/image+(3).png
"Logo Title Text 1")




### What you have to make
---
**Signup screen**

- Create a sign up screen in the [host]/auth/register page.
- On Submit, create an entry of the registered user in the DB (e.g mongodb) of your choice.

**Login screen**

- Create a login screen in the [host]/auth/login page.
- On Submit, validate the user and as soon as user gets logged in, user will redirect to [host]/organizations/quantive page where you will show your insight card screen.

**Insight card**

Create a list of insight cards.  
Insight card will have the following components.
- **Insight card heading** - This will have the source logo and breadcrumb like structure i.e source_name/stream_name/kpi_name along with that, the severity i.e [high, medium, low] depending on the score i.e, 0-50 is low, 51-70 is medium and 71-100 is high.
- **Insight card table** - insight card should have a table displaying the top-drivers. Show first 2 top drivers.
- **Filter** create a filter based for severity and saved insights
- **Change** Create a section where you show the change of the in the insight. Here you need to display the current and the previous value of the insight with respect to the `startTime` and `endTime` . The current and previous values should be abbreviate and timestamps should be formatted as per the design. 

<img src="https://cliff-uploads.s3.amazonaws.com/image+(5).png"  style="display: block; 
           margin-left: auto;
           margin-right: auto;" />


- **Insight Line Graph** Add a preview graph from the timeseries values for insights. The name of the file is in this manner `[insight_id].json`

![alt text](https://cliff-uploads.s3.amazonaws.com/metric-graph.png)


The graph has a few different components, namely:

- The line representing the original value — this line uses the field `value`
- The dashed line representing the forecast — this line uses the field `forecastedValue`

- The x-axis should be based on the `timestamp` field and the y-axis should be based on the `value` field.
- (Optional) You can add the line status represended by red section in the graph. The portion of the main line representing an "anomaly", which is colored red — this portion uses the field `lineStatus`, the `lineStatus` can have the following values
    - `lineStatus: 0` - There is no anomaly in this line.
    - `lineStatus: 1` — The anomaly has started and hence the line should be colored red.
    - `lineStatus: 2` — The anomaly is continuing and hence the line should be colored red.
    - `lineStatus: 3` — The anomaly has ended, therefore the line should **not** be red.
- There should be "bands" around the main line (represented in the image above with the shaded grey area). These bands can be rendered using the fields `upperBound` and `lowerBound`. Also, the area within the band should be shaded.

You can directly store the provided JSON files on your backend, but there are bonus points if you can store and query the data from a MongoDB instance (you can use MongoDB Atlas to get started with a free MongoDB provider).

### Tech
---
**required tech for this assignment**
- frontend -> [React.js](https://reactjs.org/)
- backend -> [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/)
- database -> MongoDB (recommended) or any SQL or NOSQL database
- chart library -> Echarts (recommended) but free to use any charting library
- state management -> Redux or similar alternatives

### Delivery Instructions
---
Follow the below instructions for your submission :

**Don't create a fork, send us the link to your repository and make sure to make it private.**

- Please send your submission to this form: [link](https://airtable.com/shrqTib6f8G15e0UE)
- Reply to the email with the assignment/link/attachments/ submission.
- Create a private repository on Github and add the following accounts as collaborators :
    1. aayush.jain@greendeck.co
    2. geetendra@greendeck.co
    3. rohit.sharma@greendeck.co
- Please ensure that your repository has a ```README.md``` which lists the exact steps required to run your application.
- Send an email to ```careers@greendeck.co``` with the subject "Full-stack assignment submission" (do not use any other subject) and mention the following details in your email:
    1. A link to the application's GitHub repository (make sure you've added the collaborators mentioned previously).
    2. The hosted URL of your web-app (if hosted on a platform such as Heroku).


### Usage
---
This project requires the latest LTS version of NodeJS and you may need to install the yarn as global dependency

```
npm install -g yarn
```
After you have cloned this repo and install the yarn, install the dependencies with:
```
yarn install
```
You can then start the application running:
```
yarn start
```
That's it. Just Access http://localhost:6001 in your browser.

**Again, please make sure your repository on GitHub is private.**


We hope you have fun with the assignment! In case of any questions or queries, feel free to shoot us an email at careers@greendeck.co. We are expecting a solution submission within seven days. While we're interested in the complete implementation of the task, feel free to submit your solution even if you feel if it's not up to the mark; we're as interested in your method of solving the problem as we're interested in the end result itself.

Good luck!
