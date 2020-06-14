# Hacksprint

**Technology Stack:**
 - React.js
 - Redux
 - Django
 - Django REST Framework
 
 _Adminpanel is made with regular Django Templating System. REST framework & React is only used in the regular user panel_

**Some instruction to build & run the project:**
  1. Install pipenv `pip install pipenv`
  2. Start pipenv shell `pipenv shell`
  3. Install dependencies `pipenv install`
  4. Migrate Database `python manage.py migrate`
  5. Run the Dev Server `python manage.py runserver`

**Some instruction to build client:**

Open command prompt in this folder and run steps

    ../Hacksprint/client/
    1. install npm 'npm install'
    2. create build folder 'npm run build'
_N.B. You must have env.py file in the project root folder. Rename env-sample.py file to env.py and fill those variables with your system values to run the project properly_
