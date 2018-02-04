from flask import Flask, request, redirect
from flask import jsonify
import time
import eventlet
import eventlet.wsgi
import socketio
import random

app = Flask(__name__)
sio = socketio.Server()

room = {
    "food": {
        "available_names": ["Apple", "Banana", "Orange", "Pizza", "Ramen", "Bagel", "Taco", "Eggroll", "Sushi"],
        "messages": [
        ]
    },
    "sports": {
        "available_names": ["Basketball", "Baseball", "Football", "Soccer Ball", "Tennis Ball", "Golf Ball", "Lavar Ball", "Volleyball", "Ping Pong Ball"],
        "messages":[
        ]
    },
    "movies": {
        "available_names": ["Horror", "Romance", "Comedy", "Action", "Mystery", "Drama", "Animated", "Musical", "Documentary"],
        "messages":[
        ]
    },
    "hiking": {
        "available_names": ["Cougar", "Beaver", "Mountain Lion", "Otter", "Squirrel", "Deer", "Snake", "Hawk", "Bear"],
        "messages":[
        ]
    }
}

@app.route("/rooms/<string:category>/", methods= ['POST', 'GET'])
def build_chat(category: str):
    if request.method == 'POST':
        get_json = request.get_json(force= True)
        action = get_json['action']
        if action  == "join":
            return jsonify({"username": room[category]['available_names'].pop(random.randrange(len(room) - 1))})
    return jsonify({"messages": room[category]['messages']})


@sio.on('json')
def handleMessage(sid, json):
    room[json['category']]['messages'].append({'body': json['text']})
    sio.emit('json', room[json['category']]['messages'])

@sio.on('connect')
def handleConnect(sid, environ):
    print("connected", sid)

@sio.on('load')
def handleLoad(sid, json):
    sio.emit('load', room[json['category']])

if __name__ == "__main__":
    app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'
    app = socketio.Middleware(sio, app)
    eventlet.wsgi.server(eventlet.listen(('', 8000)), app)
