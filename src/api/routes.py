"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User,Apartment, Building, CommonSpace, Administrator, DiarioMural, Marketplace, SpaceReservation
from api.utils import generate_sitemap, APIException
from mailjet_rest import Client
import os
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity 


api = Blueprint('api', __name__)

app = Flask(__name__)
jwt = JWTManager(app)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }
    return jsonify(response_body), 200

    
@api.route('/user', methods=['GET','POST'])
def get_all_user():
    if request.method =='GET':
        # esta varibale estoy consultando a la base de datos por todos los registros de la tabla users
        all_users= User.query.all()
        all_users= list(map(lambda x: x.serialize(),all_users))
        return jsonify(all_users), 200
    else:
        body = request.get_json() # obtener el request body de la solicitud
        if body is None:
            return "The request body is null", 400
        if 'email' not in body:
            return 'Especificar email', 400
        if 'password' not in body:
            return 'Especificar password',400
        #estoy consultando si existe alguien con el email que mande en la api y consigo la primera coincidencia
        onePeople = User.query.filter_by(email=body["email"]).first()
        if onePeople:
            if (onePeople.password == body["password"] ):
                #CUANDO VALIDAMOS LA PASSWORD CREAREMOS EL TOKEN                
                access_token = create_access_token(identity=onePeople.email)
                data = {
                    "info_user": onePeople.serialize(),
                    "token": access_token
                    
                }
                return(jsonify(data))
            else:
                return(jsonify({"mensaje":False}))
        else:
            return(jsonify({"mensaje":"mail no se encuentra registrado"}))

@api.route('/apartment', methods=['GET'])
def get_all_apartment():
    # esta varibale estoy consultando a la base de datos por todos los registros de la tabla apartment
    all_apartment= Apartment.query.all()
    all_apartment= list(map(lambda x: x.serialize(), all_apartment))
    return jsonify( all_apartment), 200

@api.route('/building', methods=['GET'])
def get_all_building():
    # esta varibale estoy consultando a la base de datos por todos los registros de la tabla building
    all_building= Building.query.all()
    all_building= list(map(lambda x: x.serialize(), all_building))
    return jsonify(all_building), 200

@api.route('/commonSpace', methods=['GET'])
def get_all_commonspace():
    # esta varibale estoy consultando a la base de datos por todos los registros de la tabla commonspace
    all_common_space= CommonSpace.query.all()
    all_common_space= list(map(lambda x: x.serialize(), all_common_space))
    return jsonify(all_common_space), 200 

@api.route('/administrator', methods=['GET'])
def get_all_administrator():

    # esta varibale estoy consultando a la base de datos por todos los registros de la tabla administrator
    all_administrator= Administrator.query.all()
    all_administrator= list(map(lambda x: x.serialize(), all_administrator))
    return jsonify(all_administrator), 200    

@api.route('/diariomural', methods=['GET'])
def get_all_diariomural():
    # esta varibale estoy consultando a la base de datos por todos los registros de la tabla diairomural
    all_diariomural= DiarioMural.query.all()
    all_diariomural= list(map(lambda x: x.serialize(), all_diariomural))
    return jsonify(all_diariomural), 200 


@api.route('/marketplace', methods=['GET'])
def get_all_marketplace():
    # esta varibale estoy consultando a la base de datos por todos los registros de la tabla marketplace
    all_marketplace= Marketplace.query.all()
    all_marketplace= list(map(lambda x: x.serialize(), all_marketplace))
    return jsonify(all_marketplace), 200      

@api.route('/perfilprivado', methods = ['POST'])
@jwt_required()
def get_datos():
    '''
    body = request.get_json()
    if body is None:
        return "The request body is null", 400
    if 'token' not in body:
        return 'Inicia sesion primero', 400 '''   
    token = get_jwt_identity()
    checkUser = User.query.filter_by(email = token).first()    
    checkAdmin = Administrator.query.filter_by(email = token).first()

    if checkUser : 
        return jsonify(checkUser.serialize())
    if checkAdmin : 
        return jsonify(checkUser)

            

                
@api.route('/spacereservation', methods=['GET'])
def get_all_spacereservation():
    # esta varibale estoy consultando a la base de datos por todos los registros de la tabla spacereservation
    all_reservation= SpaceReservation.query.all()
    all_reservation= list(map(lambda x: x.serialize(), all_reservation))
    return jsonify(all_reservation), 200   

 # Post User#
@api.route('/register', methods=['POST'])
def post_user():
 # body va a recibir la info de la api y la va a transformar en formato json    
    body=request.get_json()
    #validamos que  lo que se traiga en el request no este vacio o null
    if body is None:
        return "The request body is null", 400
    if 'full_name' not in body:
        return "Debe especificar Nombre Completo",400
    if 'phone' not in body:
        return "Debe especificar Numero de telefono",400
    if 'email' not in body:
        return "Debe especificar el email",400  
    if 'password'not in body:
        return "Debe especificar el paswword",400
    

    newUser= User(full_name=body['full_name'],phone=body['phone'],
    email=body['email'],password=body['password'])
    db.session.add(newUser)
    db.session.commit()
    response_body={
        "msg": "Usuario Registrado"
    }
    return jsonify(response_body),200

# Post Enviar email Formulario contacto    


@api.route('/enviardatos', methods=['POST'])    
def enviardatos():
    # body va a recibir la info de la api y la va a transformar en formato json    
    body=request.get_json()
    send_email(body)  
    response_body={
        "msg": "Correo Enviado"
    }
    return jsonify(response_body),200    
def send_email(body):
    api_key = 'cc580c7f14b0cfdc5af6343135b8b7d5'
    api_secret = 'e5865e3a1325358760fbb08d3f02a076'
    mailjet = Client(auth=(api_key, api_secret), version='v3.1')
    if body:
        result = mailjet.send.create(data=body)
    else:
        data = {
        'Messages': [
            {
            "From": {
                "Email":"tuedificioapp@gmail.com",
                "Name": body.name
            },
            "To": [
                {
                "Email": "tuedificioapp@gmail.com",
                "Name": "tuedificio"
                }
            ],
            "Subject": "MAIL PREDEFINIDO .",
            "TextPart": body.text + body.email,
            "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
            "CustomID": "AppGettingStartedTest"
            }
        ]
        }
        result = mailjet.send.create(data=data)
    




