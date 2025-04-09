from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def home():
    user = "HIMANSHUUU"
    return render_template("welcome.html", username=user)
if __name__ == '__main__':
    app.run(debug=True)
