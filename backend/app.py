from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

@app.route('/api')
def api():
    return {'name': 'Hoai Thuong', 'age': 21}

if __name__ == '__main__':
    app.run(debug=True)