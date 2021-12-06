### Local development
- `$ npm install`
- `$ npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

Note:
I did not added separate API_PATH to BFF (Backenf For Frontend) API based on express-js, there is a fixed path in reducer

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Note:
1. In my opinion each part od the code should be fully tested but unit tests in Frontend frameworks are not my strong skills, so I left code without tests.
2. The paginator should operate on selected range as there are more than 10k pages, I fixed values to 20 to simplify project.
3. Refresh page - print view does not refresh a content, this was also intentional
4. The time I was work ok React it was more than 3 yrs ago. I had to quickly remind to myself important bits, I hope I have done this job good enough. I follow pattern class react compenent instead function component with one exception for PrintView component as I used new ReactRouter v6 which is not clear described and even official documentation for router is not updated in some places.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



