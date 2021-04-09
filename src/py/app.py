from flask import Flask, render_template, redirect
import pandas as pd
import os

import db_connect

template_dir = os.path.abspath('../../resources/templates')
static_dir = os.path.abspath('../../resources/static')
print(template_dir)

# Create an instance of Flask
app = Flask(__name__,
            static_url_path='', 
            static_folder=static_dir,
            template_folder=template_dir)

# DB Connector
my_connection = db_connect.DBConnector() 

# Route to render index.html template using data from Mongo
@app.route("/")
def home():
    # Statement that finds all the items in the db and sets it to a variable
    salary_data = my_connection.get_raw_data("average-salary")
    # Render an index.html template and pass it the data you retrieved from the database
    print(os.getcwd)
    return render_template("index.html", salary=salary_data, tables=[salary_data.to_html(classes='data', index=False)], titles=salary_data.columns.values)

# Route that will run the update function
@app.route("/update")
def update():
    # Update the Mongo database using update and upsert=True

    # Redirect back to home page
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)