from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Initialize a global counter
counter = 0

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/increment', methods=['GET'])
def increment():
    global counter
    counter += 1
    return jsonify({'count': counter})

if __name__ == '__main__':
    app.run(debug=True)
