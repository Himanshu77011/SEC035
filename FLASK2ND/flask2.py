from flask import redirect, url_for
from flask import Flask
app=Flask(__name__)
@app.route('/admin')
def admin():
    return redirect(url_for('user', name='admin'))

@app.route('/user/<name>')
def user(name):
    return f"Welcome, {name}"
if __name__ == '__main__':
                    app.run(debug="True")