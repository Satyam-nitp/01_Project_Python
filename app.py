from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        # Get the expression from the request
        expression = request.json.get('expression', '')
        
        # Safely evaluate the expression
        result = eval(expression)
        return jsonify({'result': result})
    
    except Exception as e:
        return jsonify({'error': 'Invalid expression'}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

