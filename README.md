# React Router DOM
- This project is the demonstration of React Router

<<<<<<< HEAD
# React Router DOM
- This project is the demonstration of React Router

=======
>>>>>>> 4b0b06e6df37ca0087914ba9e1c45e46a6586c75
- Process of How to use React Router
    1. First download React Router
        npm install React-Router-DOM
    2. import it into your App.jsx file in below way
        import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
    3. Now we write all the necessary components inside the 
        <Router> </Router>
    4. Now we use fragment <> inside Router </> 
    5. As we want our navbar to be displayed in everypage we write <navbar /> component outside the Switch
    6. <Switch> component is used to render components only when the path will be matched.
    7. Now we write Route inside the Switch for each page so it will match the component and will render that particular page.
