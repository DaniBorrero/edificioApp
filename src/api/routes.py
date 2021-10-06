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

@api.route('/apartment', methods=['GET','POST'])
def get_all_apartment():
    if request.method =='GET':
        # esta varibale estoy consultando a la base de datos por todos los registros de la tabla apartment
        all_apartment= Apartment.query.all()
        all_apartment= list(map(lambda x: x.serialize(), all_apartment))
        return jsonify( all_apartment), 200
    else:  
        # body va a recibir la info de la api y la va a transformar en formato json    
        body=request.get_json()
        #validamos que  lo que se traiga en el request no este vacio o null
        if body is None:
            return "The request body is null", 400
        if 'num_apartment' not in body:
            return "Debe especificar Numero del Apartamento",400
        if 'floor_apartment' not in body:
            return "Debe especificar el piso del apartamento",400

        newApartment= Apartment(num_apartment=body['num_apartment'],floor_apartment=body['floor_apartment'])
        db.session.add(newApartment)
        db.session.commit()
        response_body={
            "msg": "Apartamento Registrado"
        }
        return jsonify(response_body),200    
        
@api.route('/building', methods=['GET','POST'])
def get_all_building():
    if request.method =='GET':
        # esta varibale estoy consultando a la base de datos por todos los registros de la tabla building
        all_building= Building.query.all()
        all_building= list(map(lambda x: x.serialize(), all_building))
        return jsonify(all_building), 200
    else: 
        # body va a recibir la info de la api y la va a transformar en formato json    
        body=request.get_json()
        #validamos que  lo que se traiga en el request no este vacio o null
        if body is None:
            return "The request body is null", 400
        if 'name' not in body:
            return "Debe especificar Nombre del Edificio",400
        if 'adress' not in body:
            return "Debe especificar la direccion del Edificio",400
        if 'region' not in body:
            return "Debe especificar la region donde se encuentra el Edificio",400  
        if 'comuna'not in body:
            return "Debe especificar la comuna donde se encuentra el Edificio",400
        
        newBuilding= Building(name=body['name'],adress=body['adress'],
        region=body['region'],comuna=body['comuna'])
        db.session.add(newBuilding)
        db.session.commit()
        response_body={
            "msg": "Edificio Registrado"
        }
        return jsonify(response_body),200   


@api.route('/commonSpace', methods=['GET','POST'])
def get_all_commonspace():
    if request.method =='GET':
        # esta varibale estoy consultando a la base de datos por todos los registros de la tabla commonspace
        all_common_space= CommonSpace.query.all()
        all_common_space= list(map(lambda x: x.serialize(), all_common_space))
        return jsonify(all_common_space), 200 
    else:    
        # POST COMMONSPACE
        # body va a recibir la info de la api y la va a transformar en formato json    
        body=request.get_json()
        #validamos que  lo que se traiga en el request no este vacio o null
        if body is None:
            return "The request body is null", 400
        if 'name' not in body:
            return "Debe especificar Nombre del Espacio Comun",400
        if 'aforo' not in body:
            return "Debe especificar aforo maximo",400

        newCommonSpace= CommonSpace(name=body['name'],aforo=body['aforo'])
        db.session.add(newCommonSpace)
        db.session.commit()
        response_body={
            "msg": "Espacio Comun Registrado"
        }
        return jsonify(response_body),200

@api.route('/administrator', methods=['GET','POST'])
def get_all_administrator():
    if request.method =='GET':
        # esta varibale estoy consultando a la base de datos por todos los registros de la tabla administrator
        all_administrator= Administrator.query.all()
        all_administrator= list(map(lambda x: x.serialize(), all_administrator))
        return jsonify(all_administrator), 200   
    else:    
       # POST administrator
       # body va a recibir la info de la api y la va a transformar en formato json    
       body=request.get_json()
       #validamos que  lo que se traiga en el request no este vacio o null
       if body is None:
            return "The request body is null", 400
       if 'full_name' not in body:
             return "Debe especificar Nombre Completo",400
       if 'phone' not in body: 
             return "Debe especificar el telefono",400
       if 'email' not in body:
             return "Debe especificar el email",400  
       if 'password'not in body:
             return "Debe especificar el paswword",400

       newAdministrator= Administrator(full_name=body['full_name'],phone=body['phone'],
       email=body['email'],password=body['password'])
       db.session.add(newAdministrator)
       db.session.commit()
       response_body={
                "msg": "Administrador Registrado"
       }
       return jsonify(response_body),200     

@api.route('/diariomural', methods=['GET','POST'])
def get_all_diariomural():
    if request.method =='GET':
        # esta varibale estoy consultando a la base de datos por todos los registros de la tabla diairomural
        all_diariomural= DiarioMural.query.all()
        all_diariomural= list(map(lambda x: x.serialize(), all_diariomural))
        return jsonify(all_diariomural), 200
    else:      
        # POST diariomural
        # body va a recibir la info de la api y la va a transformar en formato json    
        body=request.get_json()
        #validamos que  lo que se traiga en el request no este vacio o null
        if body is None:
            return "The request body is null", 400
        if 'title_announcement' not in body:
            return "Debe especificar El Titulo del Anuncio",400
        if  'type_publication' not in body:
            return "Debe especificar El Tipo de publicacion",400   
        if 'announcement' not in body:
            return "Debe especificar el anuncio",400
        
        newDiarioMural= DiarioMural(title_announcement=body['title_announcement'],announcement=body['announcement'],type_publication=body['type_publication'])
        db.session.add(newDiarioMural)
        db.session.commit()
        response_body={
            "msg": "Anuncio Registrado en el Diario Mural"
        }
        return jsonify(response_body),200       

@api.route('/marketplace', methods=['GET','POST'])
def get_all_marketplace():
    if request.method =='GET':
        # esta varibale estoy consultando a la base de datos por todos los registros de la tabla marketplace
        all_marketplace= Marketplace.query.all()
        all_marketplace= list(map(lambda x: x.serialize(), all_marketplace))
        return jsonify(all_marketplace), 200    
    else:    
       # POST marketplace
       # body va a recibir la info de la api y la va a transformar en formato json    
       body=request.get_json()
       #validamos que  lo que se traiga en el request no este vacio o null
       if body is None:
           return "The request body is null", 400
       if 'title_announcement' not in body:
           return "Debe especificar El Titulo del Anuncio",400
       if  'type_publication' not in body:
           return "Debe especificar El Tipo de publicacion",400      
       if 'announcement' not in body:
           return "Debe especificar el anuncio",400
    
       newMarketplace= Marketplace(title_announcement=body['title_announcement'],announcement=body['announcement'],type_publication=body['type_publication'])
       db.session.add(newMarketplace)
       db.session.commit()
       response_body={
            "msg": "Anuncio Registrado en el Marketplace"
       }
       return jsonify(response_body),200        
              
@api.route('/spacereservation', methods=['GET','POST'])
def get_all_spacereservation():
    if request.method =='GET':
        # esta varibale estoy consultando a la base de datos por todos los registros de la tabla spacereservation
        all_reservation= SpaceReservation.query.all()
        all_reservation= list(map(lambda x: x.serialize(), all_reservation))
        return jsonify(all_reservation), 200 
    else:     
       #POST Spacereservation
       # body va a recibir la info de la api y la va a transformar en formato json    
       body=request.get_json()
       #validamos que  lo que se traiga en el request no este vacio o null
       if body is None:
            return "The request body is null", 400
       if 'date_reservation' not in body:
            return "Debe especificar la fecha de la reservacion",400
       if 'reservation_time' not in body:
            return "Debe especificar la cantidad de horas de reservacion",400 

       newSpacereservation=SpaceReservation(date_reservation=body['date_reservation'],reservation_time=body['reservation_time'])
       db.session.add(newSpacereservation)
       db.session.commit()
       response_body={
        "msg": "El espacio comun fue reservado con exito"
       }
       return jsonify(response_body),200   


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

#INICIO Reserva espacio comun

# @app.rout('/logged', methods=['POST'])
# def SpaceReservation();

#     body=request.get_json()

#     if body is None:
#         return "The request body is null", 400
#     if date_reservation is None:
#         return "Especificar fecha de reserva", 400
#     if reservation_time is None:
#         return "Especificar hora de reserva", 400

#     newReservation= spacereservation(date_reservation=body['date_reservation'],
#     reservation_time=body['reservation_time'])
#     db.session.add(newReservation)
#     db.session.commit()
#     response_body={

#         "msg": "Reserva Exitosa"

#     }
#     return jsonify(response_body),200

# #FIN Reserva espacio comun


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
    




