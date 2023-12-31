from flask import Flask, render_template, request, redirect, url_for, session, flash
from datetime import timedelta
from flask_sqlalchemy import SQLAlchemy



app = Flask(__name__)
app.secret_key = "123"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.permanent_session_lifetime = timedelta(days=1)

db = SQLAlchemy(app)

class Users(db.Model):
    _id = db.Column("id", db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))

    def __init__(self, name, email):
        self.name = name
        self.email = email







@app.route("/")
def home():
    return render_template("index.html")

@app.route("/view")
def view():
    return render_template("view.html", values=Users.query.all())

@app.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        session.permanent = True
        user = request.form["nm"]
        session["user"] = user
        flash("Login Succesful!")

        found_user = Users.query.filter_by(name=user).first()
        if found_user:
            session["email"] = found_user.email

        else:
            usr = Users(user, "")
            db.session.add(usr)
            db.session.commit()
        return  redirect(url_for("user"))
    else:
        if "user" in session:
            flash("'Already Login In!")
            return redirect(url_for("user"))
        return  render_template("login.html")

@app.route("/user", methods =["POST", "GET"])
def user():
    email = None
    if "user" in session:
        user = session["user"]

        if request.method =="POST":
            email = request.form["email"]
            session["email"] = email
            found_user = Users.query.filter_by(name=user).first()
            found_user.email = email
            db.session.commit()
            flash("Email as saved!")

        else:
            if "email" == session:
                email = session["email"]

        return render_template("user.html", email=email)
    else:
        flash("You're not logged in")
        return redirect(url_for("login"))


@app.route("/logout")
def logout():
    if "user" in session:
        user = session["user"]
        session.pop("user", None)
        session.pop("email", None)
        flash(f"You have been logged out, {user}", "info")
    return redirect(url_for("login"))
if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        print("DB created")
    app.run(debug=True)
