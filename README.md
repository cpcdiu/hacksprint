# Hacksprint

**Technology Stack:**
 - React.js
 - Redux
 - Django
 - Django REST Framework
 
 _Adminpanel is made with regular Django Templating System. REST framework & React is only used in the regular user panel_

**Some instruction to build & run the project:**
  1. Activate virtual environment using pipenv `pipenv shell`
  2. Install python dependencies `pipenv install`
  3. Migrate database `python manage.py migrate`
  4. Run the dev Server `python manage.py runserver`

**Some instruction to build client:**
  1. Open your terminal in client directory
  2. Install node dependencies `npm install`
  3. Build the client `npm run build`
  
**Prerequisite**
  1. If you use pipenv to create virtual environment, make sure you have pipenv installed.
  2. You must have env.py file in the project root folder. Rename env-sample.py file to env.py and fill those variables with your real values
