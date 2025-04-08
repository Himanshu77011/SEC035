from flask import session, Flask

app = Flask(__name__)
app.secret_key = 'secret123'

@app.route('/')
def home():
    return '''
        <h2>Welcome to the Homepage!</h2>
        <p>Try setting a session: <a href="/set/HIMANSHU">/set/HIMANSHU</a></p>
        <p>Then check it: <a href="/get">/get</a></p>
    '''

@app.route('/set/<name>')
def set_session(name):
    session['user'] = name
    return 'Session set!'

@app.route('/get')
def get_session():
    user = session.get('user', 'not set')
    return f"User: {user}"

if __name__ == '__main__':
    app.run(debug=True)
