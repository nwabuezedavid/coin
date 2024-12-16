from django.shortcuts import render
from rest_framework.decorators import api_view
from datetime import datetime 
from django.views.decorators.csrf import csrf_exempt
from .genUid import *
from django.contrib.auth import authenticate, login, logout
from decimal import Decimal
from .serili import *
import random
from django.http import JsonResponse
from django.conf import settings
from rest_framework.decorators import api_view
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from .models import *
from .genUid import *
from django.contrib.auth.hashers import make_password, check_password
from django.http import HttpRequest, HttpResponse
from django.shortcuts import get_list_or_404
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from  django.utils.html import strip_tags
from django.core.mail import send_mail,  EmailMultiAlternatives

from django.template.loader import get_template, render_to_string
# Create your views here.
from rest_framework.authtoken.models import Token 
from rest_framework.authentication import TokenAuthentication
from rest_framework import permissions , authentication
from rest_framework.decorators import authentication_classes , permission_classes


from rest_framework.decorators import api_view
from rest_framework.response import Response 
from django.http import HttpRequest, HttpResponse
from django.contrib.auth.models  import User
def email_sending(request,tempname,context,subjects,to):
    tos = render_to_string(tempname,context=context )
    tags =strip_tags(tos)
    mas = EmailMultiAlternatives(
        subject = subjects,
        body=tags,
        from_email = settings.EMAIL_HOST_USER,
        to=[to]
    )
    mas.attach_alternative(tos, 'text/html')
    mas.send()

def message(request, message, pk):
    try:
        x = Userclient.objects.get(uuid=pk)
        c = adminmessage.objects.create(message=message)
        c.save()
        x.message.add(c)
    except:
        print('message error')    


# Create your views here.
@api_view(['GET'])
def Siteedit(request):
    if request.method =="GET":
        c = invested.objects.all()
        p = setallinvested(c, many="True")
        return Response({'data': p.data })
    return Response('404-error')
@api_view(['GET'])
def allneticome(request):
    if request.method =="GET":
        c = invested.objects.all()
        p = setallinvested(c, many="True")
        return Response({'data': p.data })
    return Response('404-error')
@api_view(['GET'])
def Deleteallneticome(request):
    if request.method =="GET":
        c = invested.objects.all()
       
        c.delete()
        return Response({'data': "Deleted" })
    return Response('404-error')
@api_view(['GET'])
def singleDeleteallneticome(request,pk):
    if request.method =="GET":
        c = invested.objects.get(uuid=pk)
        c.delete()
        return Response({'data': "deleted" })
    return Response('404-error')
@api_view(['GET','POST', 'PATCH','PULL'])
def allcoinfetch(request):
    if request.method =="GET":
        c = allcoin.objects.all()

       
        p = setallcoin(c, many="True")
        

        return Response({'user': p.data })
    

   
    return Response('404-error')
# Create your views here.
@api_view(['GET','POST', 'PATCH','PUT'])
def getalluser(request):
    if request.method =="GET":
        c = Userclient.objects.all()
        c2 = User.objects.all()
        tok = Token.objects.all()
       
        p = Userajax(c, many="True")
        p2 = mainUsern(c2, many="True")
  
        return Response({'user': p.data,'main':p2.data })
    if request.method =="PATCH":
        try:
            username = request.data['username']
            password = request.data['password']
            email = request.data['email']
            if User.objects.filter( username = username, email = email).exists() and Userclient.objects.filter(password =password):
                c2 = User.objects.get(    username = username, email = email,)
                c = Userclient.objects.get(user=c2,password =password)
                tok = Token.objects.get(user=c2)
                authenticate(username=username, password=password)
                login(request, c2)

                p = Userajax(c )
                p2 = mainUsern(c2)
                if c2.is_superuser:
                    return Response({'super': p.data['uuid']})
                return Response({'user': p.data['uuid']})
            else:
                return Response({'error': "User doesn't exist" })
        except:
            return Response({'error': "404 Error" })

   
    if request.method =="POST":
        username = request.data['username']
        password = request.data['password'] 
        email = request.data['email']
    
        


        try:
            if not User.objects.filter(username = username, email=email,).exists()  :
                    
                v = User.objects.create(username = username,
                email=email,)
                c = Userclient.objects.create(user=v ,refercode = referCode(9),uuid = referCode(12), password=password )
                tok = Token.objects.create(user=v)
                
                tok.save()
                authenticate(username=username, password=password)
                login(request,v)
                p = Userajax(c)
    
                if request.data['code']  :
                        code = request.data['code']
                        if Userclient.objects.filter(refercode = code).exists():
                            c = Userclient.objects.get(refercode = code)
                            re = refreedclient.objects.create(user=v)
                            c.howmanreferral = 1+int(c.howmanreferral)
                            c.refer.add(re)
                            c.save()
                            return Response({'user': p.data['uuid']})
                        else:
                            return Response({'error': "Referral code does Not exist"})
    
                if request.GET.get('ref') :
                        code = request.GET.get('ref')
                        if Userclient.objects.filter(refercode = code).exists():
                            c = Userclient.objects.get(refercode = code)
                            re = refreedclient.objects.create(user=v)
                            c.howmanreferral = 1+int(c.howmanreferral)
                            c.refer.add(re)
                            c.save()
                            return Response({'user': p.data['uuid']})
                        else:
                            return Response({'error': "Referral code does Not exist"})
                return Response({'user': p.data['uuid']})
               

            else:
                return Response({'error': "Username Already Exist"})
        except:
            return Response({'error': "Username and Email Already Exist"})
    
        
    if request.method =="PUT":
        username = request.data['username']
        password = request.data['password'] 
        email = request.data['email']
        if True:
            if not User.objects.filter(username = username, email=email,).exists()  :
                if request.data['pk'] == "null" or not request.data['pk']  or request.data['pk'] == None :
                  
                    if request.data['firstname'] and request.data['lastname']:
                        v = User.objects.create(username = username,

                                        first_name=request.data['firstname'] ,
                                        last_name=request.data['lastname'] ,
                         email=email,)
                        c = Userclient.objects.create(user=v ,refercode = referCode(9),uuid = referCode(12), password=password )
                        tok = Token.objects.create(user=v)
                        tok.save()
                        authenticate(username=username, password=password)
                        login(request,v)
                        p = Userajax(c)
                        
                        return Response({'user': p.data['uuid']})
                    
            if  request.data['pk'] !='null'   :
                pk = request.data['pk']
                pero = Userclient.objects.get(uuid=pk)
                pero.user.username = request.data['username']
                
                pero.save()
                ss = Userajax(pero, data=request.data)
                ssx = mainUsern(pero.user, data=request.data)
                if ssx.is_valid():
                    ssx.save()
                if ss.is_valid():
                    ss.save()
                p = Userajax(pero)
                
                return Response({'user': p.data['uuid']})
            else:
                return Response({'err': 'Sorry an error occurred  reload and try again!!'})
           
            
        # except:
        #     return Response({'error': "pls reload and try again"})
    return Response('404-error')
# Create your views here.
@api_view(['GET','POST','PUT'])
def Kycuserapi(request, pk):
    if request.method =="PUT":
        # mainuser = Userclient.objects.get(uuid=pk)
        
        
        lname = request.data['lname']
        fname = request.data['fname']
        fathernamef = request.data['fathernamef']
        fathernamel = request.data['fathernamel']
        PAN = request.data['PAN']
        DateofBirth = request.data['DateofBirth']
        address1 = request.data['address1']
        address2 = request.data['address2']
        city = request.data['city']
        state = request.data['state']
        zipcode = request.data['zipcode']
        Country = request.data['Country']
        filex = request.data['filex']
        email = request.data['email']
        gender = request.data['gender']
        martialstatue = request.data['martialstatue']
        citizenStatus = request.data['citizenStatus']
        PANStatue = request.data['PANStatue']
        proofaddress = request.data['proofaddress']
        
        Kycuser.objects.filter(user__uuid = pk).update( 
            lname =lname,
            fname =fname,
            fathernamef =fathernamef,
            fathernamel =fathernamel,
            PAN =PAN,
            DateofBirth =DateofBirth,
            address1 =address1,
            address2 =address2,
            city =city,
            state =state,
            zipcode =zipcode,
            Country =Country,
            filex =filex,
            email =email,
            gender =gender,
            martialstatue =martialstatue,
            citizenStatus =citizenStatus,
            PANStatue =PANStatue,
            proofaddress =proofaddress,
           
            )
    
        return Response({'user' :"updated"})
    
    if request.method =="POST":
        mainuser = Userclient.objects.get(uuid=pk)
    
        uuid = referCode(12)
        lname = request.data['lname']
        fname = request.data['fname']
        fathernamef = request.data['fathernamef']
        fathernamel = request.data['fathernamel']
        PAN = request.data['PAN']
        DateofBirth = request.data['DateofBirth']
        address1 = request.data['address1']
        address2 = request.data['address2']
        city = request.data['city']
        state = request.data['state']
        zipcode = request.data['zipcode']
        Country = request.data['Country']
        filex = request.data['filex']
        email = request.data['email']
        gender = request.data['gender']
        martialstatue = request.data['martialstatue']
        citizenStatus = request.data['citizenStatus']
        PANStatue = request.data['PANStatue']
        proofaddress = request.data['proofaddress']
        
        Kycuser.objects.create( uuid =uuid,
            lname =lname,
            fname =fname,
            fathernamef =fathernamef,
            fathernamel =fathernamel,
            PAN =PAN,
            DateofBirth =DateofBirth,
            address1 =address1,
            address2 =address2,
            city =city,
            state =state,
            zipcode =zipcode,
            Country =Country,
            filex =filex,
            email =email,
            gender =gender,
            martialstatue =martialstatue,
            citizenStatus =citizenStatus,
            PANStatue =PANStatue,
            proofaddress =proofaddress,
            user=mainuser,
            )
    
        return Response({'user' :"Create"})
    

    return Response('404-error')
    
    
@api_view(['GET','POST', 'PATCH','PULL'])
def checkverified(request,pk):
    if request.method =="GET":
        c = Userclient.objects.get(uuid=pk)
        if c.verify == False:
            print('dome')
            return Response({'user': 'c.data' })
        return Response({'error': 'c.data '})    
        
@api_view(['GET','POST',"PUT"])
def verifycode(request,pk):
    if request.method =="POST":
        code = request.data['code']
        if Userclient.objects.filter(uuid=pk, otp = code,verify = False).exists():
            c = Userclient.objects.get(uuid=pk)
            print('dome')
            c.verify = True
            c.save()
            conx={
                                    'site': siteedit.objects.get(idx=1),
                                    'user': c,
                                    


                    }
            email_sending(request,"./alertnews.html",conx,f"Accout verified",f"{c.user.email}")

            return Response({'data':"Reset successfully  "})
        return Response({'error':"an error occured"})
    elif request.method == "PUT":
        print('p',request.data['email'])
        if True:
            if Userclient.objects.filter(uuid=pk).exists():
            
              
                c = Userclient.objects.get(uuid = pk)
                c.otp = referCode(4)
                c.save()
                conx={
                                    'site': siteedit.objects.get(idx=1),
                                    'user': c,
                                    'Code': c.otp,


                    }
                email_sending(request,"./code.html",conx,f"Activation Code",f"{c.user.email}")

                return Response({'data':"done  "})
    return Response({'error':"an error occured   "})
    
    
@api_view(['GET','POST',"PUT"])
def resitepass(request):
    if request.method =="POST":
        code = request.data['code']
        password = request.data['password']
        if Userclient.objects.filter(otp=code).exists():
            c = Userclient.objects.get(otp=code)
            c.password = password
            c.save()
            return Response({'data':"Reset successfully  "})
        return Response({'error':"an error occured   "})
    elif request.method == "PUT":
        print('p',request.data['email'])
        if request.data['email']:
            data = request.data['email']
            if Userclient.objects.filter(user__email=data).exists():
            
              
                c = Userclient.objects.get(user__email = data) 
                c.otp = referCode(9)
                c.save()
                conx={
                                    'site': siteedit.objects.get(idx=1),
                                    'user': c,
                                    'Code': c.otp,


                    }
                email_sending(request,"./code.html",conx,f"Password Reset Code",f"{c.user.email}")

                return Response({'data':"done  "})
    return Response({'error':"an error occured   "})
        
        
    
@api_view(['GET','POST'])
def loginuser(request):
 
    if request.method =="POST":
        username = request.data['username']
        password = request.data['password']
        email = request.data['email']
        if username !=None and email !="" and password != "":
            if not User.objects.filter(username = username, email=email,).exists():
                v = User.objects.create(username = username, email=email,)
                c = Userclient.objects.create(user=v ,refercode = referCode(9),uuid = referCode(12), )
                tok = Token.objects.create(user=v)
                
                tok.save()
                return Response({'data':f"{c.uuid}",'auth':f"Token {tok.key}"  } )
            else:
                return Response('Token')
        else:
            return Response('Imput cant be NUll')
    return Response('404-error')

@api_view(['GET','POST'])
def getsingleuser(request,pk):
    if request.method =="GET":
        c = Userclient.objects.get(uuid=pk)
        c2 = User.objects.get(id=c.user.id)
        tok = Token.objects.get(user=c2)
        p = Userajax(c)
        p2 = mainUsern(c2)
        return Response({'user': p.data,'main':p2.data })
   
    
    return Response('404-error')

# @permission_classes([permissions.IsAuthenticated])

@api_view(['POST','PATCH' ])
def profile(request,pk):
    if request.method =="POST":
        try:
            username = request.data['username']
        
            firstname = request.data['firstname']
            databirth = request.data['databirth']
            address = request.data['address']
            country = request.data['country']
            state = request.data['state']
            phone = request.data['phone']
            c2 = Userclient.objects.get(uuid=pk)
            v = User.objects.filter(id = c2.user.id).update(username = username, first_name =firstname)
            # c2.user=v   ,
            c2.state = state        
            c2.address = address 
            c2.Phone = phone 
            c2.databirth = databirth 
            c2.country  = country    
            c2.save()
            print(c2.address)
            print(address)

                                                            
          
            return Response({'data':"create sucessfully"})
        except:    
            return Response({'erro':"InpUT Can't Be Empty"})

    return Response('sorry an error occurred')

@api_view(['POST','GET', "PUT",'PATCH' ])
# @permission_classes([permissions.IsAuthenticated])
def withdrawclient(request, pk):
    if request.method == "POST":
        n = Userclient.objects.get(uuid = pk)
        amount = request.data['amount']
        address = request.data['address']
        name = request.data['name']
        isa = request.data['sddd'] or None
        try:
           if  isa != "true" or isa == None  :

            if int(n.balance) >=50 and n.balance >= int(amount) and amount != None and address!="":  
                v = withdraw.objects.create(amount=amount, address=address,name=name, uuid=referCode(12))
                n.withdraw.add(v)
                n.balance -= int(amount)
                n.withdrawincome+= int(amount)
                n.save()
                message(request, f"Your Withdraw of {amount} was successfull", pk)
                try:
                        conx={
                            'site': siteedit.objects.get(idx=1),
                            'plan': v,
                            'proof': True,
                            "any":v
                        }
                        email_sending(request,"./alertdebit.html",conx,f"Debit Alert[{amount}]",f"{n.user.email}")
                except:
                        print('error')
                return Response({'data':"create sucessfully"})
            elif n.balance <= int(amount):
                return Response({'error':"insufficient fund   "})
            elif amount == None and address=="":
                return Response({'error':"Input can't be Empty "})
            elif int(n.balance) <=50:
                return Response({'error':"Balance too low mininum withdrawal is 50$ "})
            else:
                return Response({'error':"insufficient fund  "})
           else:
            if n.balance >= int(amount) and amount != None and address!="":  
                v = withdraw.objects.create(amount=amount, address=address,name=name, uuid=referCode(12))
                n.withdraw.add(v)
                n.balance -= int(amount)
                n.withdrawincome+= int(amount)
                n.save()
                
                conx={
                            'site': siteedit.objects.get(idx=1),
                            'plan': v,
                            'proof': True,
                            "any":v
                        }
                email_sending(request,"./alertdebit.html",conx,f"Debit Alert[{amount}]",f"{n.user.email}")
                
                return Response({'data':"create sucessfully"})
            elif n.balance <= int(amount):
                return Response({'error':"insufficient fund 2  "})
            elif amount == None and address=="":
                return Response({'error':"Input can't be Empty "})
            elif int(n.balance) <=50:
                return Response({'error':"Balance too low mininum withdrawal is 50$ "})
            else:
                return Response({'error':"insufficient fund  "})
        except:
            return Response({'error':"an error occurred"})
            
    if request.method == "PUT":
        nx = withdraw.objects.get(uuid = pk)
        amount = request.data['amount']
        address = request.data['address']
        name = request.data['name']
        if  amount != None and address!="":  
            nx.amount =amount
            nx.address =address
            nx.name =name
            nx.save()

            return Response({'data':"Updated sucessfully"})
            print(xx.data)
        elif n.balance <= int(amount):
            return Response({'error':"insufficient fund 2  "})
        elif amount == None and address=="":
            return Response({'error':"Input can't be Empty "})
        elif int(n.balance) <=50:
            return Response({'error':"Balance too low mininum withdrawal is 50$ "})
        else:
            return Response({'error':"insufficient fund  "})
    if request.method == "GET":
        n = withdraw.objects.all()
        xx = setwithdraw(n, many='True')
        return Response({'data':xx.data })
    if request.method == "PATCH":
        n = withdraw.objects.get(uuid=pk)
        xx = setwithdraw(n)
        return Response({'data':xx.data })



    return Response('sorry an error occurred input something')

# @permission_classes([permissions.IsAuthenticated])
@api_view(['POST','GET' ,'PATCH',"PUT"])
def cretaeallplan(request):
    if request.method == "POST":
        name = request.data['name']
        minplan = request.data['minplan']
        maxplan = request.data['maxplan']
        
        v = allplan.objects.create(name=name, minplan=minplan, maxplan=maxplan,    uuid=referCode(12))
        v.save()
        return Response({'data':"create sucessfully"})
    if request.method == "PUT":
        pk = request.data['pk']
        

        v = allplan.objects.get(uuid=pk)

        p2x = setallplan(v, data=request.data )
        print(p2x.is_valid(), pk,v)
        if p2x.is_valid():
            print('sdkdjk',pk)
            p2x.save()
            return Response({'data':"create sucessfully"})
        
        print(p2x.errors)
    if request.method == "GET":        
        c2 = allplan.objects.all()
        p2 = setallplan(c2, many="True")
        return Response({'data':p2.data})
    if request.method == "PATCH":        
        pk = request.data['pk']
        c2 = allplan.objects.get(uuid=pk)
        p2 = setallplan(c2)
        return Response({'data':p2.data})

    return Response('sorry an error occurred input something')


@permission_classes([permissions.IsAuthenticated])
@api_view(['POST','GET' ])
def checknestincome(request, pk,cn):
    if request.method == "POST":
        f = Userclient.objects.get(uuid = pk)
        site = siteedit.objects.get(idx = 1)
        # plan = request.data['planuuid']
        amount = request.data['amount']
        v = allplan.objects.get(uuid = cn)
        if  site.limited == True:
            if int(amount) >= int(v.minplan)  and  int(amount) <= int(f.balance)  and int(f.timesamp) <=  int(v.interest) :
                s = invested.objects.create(useronplan=v,uuid=referCode(12),  amounttobeadd=amount)
                f.invested.add(s)
                f.timesamp+=1

                
                f.balance-= int(amount)

                f.save()
                s.save()
                return Response({'data':"create sucessfully"})
            elif int(amount) <= int(v.minplan)  :
                return Response({'error':f"amount is less  than  {v.minplan }"})

            elif  int(amount) >= int(v.maxplan)  :
                return Response({'error':f"amount is hight than  max {v.maxplan}"})
            elif  int(amount) >= int(f.balance)  :
                return Response({'error':f"insuifficent balance{f.balance}"})


            elif  int(f.timesamp)  >= int(v.interest)  :
                return Response({'error':"need to upgrade to nextplan "})
        else:
            if int(amount) >= int(v.minplan) and int(amount) <= int(v.maxplan)  and  int(amount) <= int(f.balance)   :
                s = invested.objects.create(useronplan=v,uuid=referCode(12), amounttobeadd=amount)
                f.invested.add(s)
                
                f.balance-= int(amount)
                f.save()
                return Response({'data':"Invested Sucessfully"})
            elif int(amount) <= int(v.minplan)  :
                return Response({'error':f"Amount is less  than  {v.minplan }"})

            elif  int(amount) >= int(v.maxplan)  :
                return Response({'error':f"Amount is highter than max {v.maxplan} which is the investment plan limit "})
            elif  int(amount) >= int(f.balance)  :
                return Response({'error':f"Insuifficent Balance"})

    if request.method == "GET":
        s = invested.objects.all()
        xc = setinvested(s, many="True")
        return Response({'data':xc.data}, safe=False)
            

    return Response({'error':'sorry an error occurred input something'})


# @permission_classes([permissions.IsAuthenticated])
@api_view(['POST', 'PUT', "GET",'PATCH' ])
def depositclient(request,pk, cc):
    if request.method == "GET":
        n = Deposit.objects.all()
        nx = setDeposit(n, many="True")
        c = Userclient.objects.all()
       
        p = Userajax(c, many="True")
       
        return Response({'date':nx.data, 'p': p.data})
    if request.method == "PATCH":
        n = Deposit.objects.get(uuid=pk)
        nx = setDeposit(n)
       
        return Response({'date':nx.data})
        
    if request.method == "POST":
        n = Userclient.objects.get(uuid = pk)
        nx = allcoin.objects.get(uuid = cc) 
        
        proof = request.data['proof'] or None
        amount = request.data['amount']
        si = siteedit.objects.get(idx = 1)
        if int(amount) >= 50:
            v = Deposit.objects.create( amount=amount, proof=proof or None, coin=nx, uuid=referCode(12))
            n.deposit.add(v)
            
            return Response({'data':"true"})
        else:    
            return Response({'data':"amount less than 50"})
    if request.method == "PUT":
        n = Deposit.objects.get(uuid = pk)
        nx = allcoin.objects.get(uuid = cc)
        
        proof = request.data['proof']
        amount = request.data['amount']
        
        
        si = siteedit.objects.get(idx = 1)
        if int(amount) >= 50:
            n.amount=int(amount)
             
            n.coin=nx
            n.save()
            

            
            return Response({'data':"true"})
        else:    
            return Response({'data':"amount less than 50"})

    return Response('sorry an error occurred')

from datetime import datetime , timedelta

@api_view(['POST','GET' ])
def addnetintrest(request, pk):
    if request.method == "GET":
        n = Userclient.objects.get(uuid = pk)
        if n.invested.all():
            a = n.invested.all()
            nowsata = datetime.timestamp(datetime.today())
            for d in n.invested.all():
                datfetched = datetime.timestamp(d.date)
               

                ccp =  timedelta(days=1, hours=d.date.hour)
                fetcjmain  = datetime.fromtimestamp(datfetched + 86400 * d.useronplan.daygiven)
                fetcnow  = datetime.timestamp(datetime.today())
                xx = datetime.fromtimestamp(fetcnow)
                sdkfm  = datetime.timestamp(fetcjmain)

                # 
                if  xx >= fetcjmain  and d.off == False:
                    d.off = True
                    d.save()
                    cc = int(d.useronplan.interest)/100 * d.amounttobeadd
                    n.netincome += int(cc) 
                    n.netincome += Decimal(d.amounttobeadd) 
                    n.balance += Decimal(d.amounttobeadd)
                    n.balance += Decimal(cc)
                    n.save()
                    
                    return Response({'data':f'{d.amounttobeadd + int(cc) } ', "username":f'{n.user.username}'})
                # elif    d.off == True:

                #     return Response({'Added':f"Some netinvest already added" })
                # else    :

                #     return Response({
                #         'fechdate':f"{d.amounttobeadd}", 
                #         'nowdate':f"{fetcjmain}", 
                        
                #         })
        else:

            return Response({'none':f"No Active Investment Found" })
        return Response({'pend':f"on-process time left " })

    return Response('sorry an error occurred')




@api_view(['GET', 'POST', ])
def editesidf(request):
    if request.method =="POST":
        if  not siteedit.objects.filter(idx=1).exists():
            s = drsiteedit(data=request.data)
            if s.is_valid():
                s.save()
                return Response({'user': s.data})
        else:
            c = siteedit.objects.get(idx=1)
            s = drsiteedit(c ,data=request.data)
            if s.is_valid():
                s.save()
                return Response({'user': s.data})
    return Response({'erre': 'error'})

# remove


@api_view(['GET'])
def deletegetallKycuser(request):
    if request.method =="GET":
        c = Kycuser.objects.all()
        
        

        c.delete()
        return Response({'user': "Delete sucessfully"})
@api_view(['GET'])
def deletegetalluser(request):
    if request.method =="GET":
        c = Userclient.objects.all().exclude(user=request.user)
        
        
        c.user.delete()
        return Response({'user': "Delete sucessfully"})
@api_view(['GET'])
def deletallinvested(request):
    if request.method =="GET":
        c = invested.objects.all()
        

        c.delete()
        return Response({'user': "Delete sucessfully"})
@api_view(['GET'])        
def deletallallDeposit(request):
    if request.method =="GET":
        c = Deposit.objects.all()
        
        

        c.delete()
        return Response({'user': "Delete sucessfully"})
@api_view(['GET'])        
def deletallallwithdraw(request):
    if request.method =="GET":
        c = withdraw.objects.all()
       
        
        

        c.delete()
        return Response({'user': "Delete sucessfully"})
    return Response({'err': "Delete unsucessfull"})
@api_view(['GET'])        
def deletallallcoin(request):
    if request.method =="GET":
        c = allcoin.objects.all()
       
        c.delete()
        return Response({'user': "Delete sucessfully"})
@api_view(['GET'])
def deletallplan(request):
    if request.method =="GET":
        c = allplan.objects.all()
        

        c.delete()
        return Response({'user': "Delete sucessfully"})
@api_view(['GET'])
def singlesdeletallplan(request, pk):
    if request.method =="GET":
        c = allplan.objects.get(uuid=pk)
        c.delete()
        return Response({'user': "Delete sucessfully"})
@api_view(['GET'])
def deletsinglinvested(request, pk):
    if request.method =="GET":
        try:
            c = invested.objects.get(uuid=pk)
            c.delete()
            return Response({'user': "Delete sucessfully"})
        except:
            return Response({'user': "an error occurred reload  and try again"})
@api_view(['GET'])
def deletsinglwithdraw(request, pk):
    try:
        if request.method =="GET":
            c = withdraw.objects.get(uuid=pk)
            c.delete()
            return Response({'user': "Delete sucessfully"})
    except:
        return Response({"an error occurred reload  and try again"})

            
@api_view(['GET'])
def deletsingleuser(request, pk):
    if request.method == "GET":
        try:
            c = Userclient.objects.get(uuid=pk)
        
            c.delete()
            return Response({'user': "Delete sucessfully"})
        except:
            return Response({'user': "an error occurred reload  and try again"})
@api_view(['GET'])
def deletsingleallcoin(request, pk):
    if request.method =="GET":
        try:
            c = allcoin.objects.get(uuid=pk)
        
            c.delete()
            return Response({'user': "Delete sucessfully"})
        except:
            return Response({'user': "an error occurred reload  and try again"})

@api_view(['GET'])
def deletsingleDeposit(request, pk):
    try:
        if request.method =="GET":
            c = Deposit.objects.get(uuid=pk)
        
            c.delete()
            return Response({'user': "Delete sucessfully"})
    except:
        return Response({'user': "an error occurred reload  and try again"})
@api_view(['GET'])
def deletsingleKycuser(request, pk):
    if request.method =="GET":
        try:
            c = Deposit.objects.get(uuid=pk)
        
            c.delete()
            return Response({'user': "Delete sucessfully"})
        except:
            return Response({'user': "an error occurred reload  and try again"})


            # Approve--------
@api_view(['GET'])
def Approsingledepsoie(request, pk):
    if request.method =="GET":
        si = siteedit.objects.get(idx = 1)
        if True:
            if Userclient.objects.filter(deposit__uuid = pk, deposit__approved=False):
                cx = Userclient.objects.filter(deposit__uuid = pk).first()
                c = Deposit.objects.get(uuid=pk)
                c.approved = True
                cx.balance += Decimal(c.amount)
                cx.depositincome+= Decimal(c.amount)
                cx.save()
                c.save()
                if len(cx.deposit.all()) == 1:
                    if Userclient.objects.filter(refer__user = cx.user).exists():
                        m = Userclient.objects.filter(refer__user = cx.user).first()
                        i = int(si.intrest)/100*int(c.amount)
                        vc = Deposit.objects.create( amount=int(i), proof    =None, coin=None, uuid=f'ref{referCode(12)}' , approved= True)
                        vc.save()
                        m.balance+= Decimal(int(i))
                        m.referamount+= Decimal(int(i))
                        m.save()
                        m.deposit.add(vc)   
                        return Response({'data':"added"})
            else:    
                return Response({'user': "Already Approved"})
            return Response({'user': "Approved successfully"})
        # except:
        #     return Response({'user': "an error occurred reload  and try again"})
@api_view(['GET'])
def approvedsinglewithdraw(request, pk):
    if request.method =="GET":
        try:
            c = withdraw.objects.get(uuid=pk)
            c.approved = True
            c.save()
        
            
            return Response({'user': "Approved successfully"})
        except:
            return Response({'user': "an error occurred reload  and try again"})
@api_view(['GET'])
def approvedsingleallcoin(request, pk):
    if request.method =="GET":
        try:
            c = allcoin.objects.get(uuid=pk)
            c.approved = True
            c.save()
        
            
            return Response({'user': "Approved successfully"})
        except:
            return Response({'user': "an error occurred reload  and try again"})
@api_view(['GET'])
def approvedsingleinvested(request, pk):
    if request.method =="GET":
        try:
            cx = Userclient.objects.filter(invested__uuid = pk).first()
            c = invested.objects.get(uuid=pk)
            cx.balance += Decimal(c.amounttobeadd)
            c.off = True
            c.save()
            cx.save()
        
            
            return Response({'user': "Approved successfully"})
        except:
            return Response({'user': "an error occurred reload  and try again"})
@api_view(['GET'])
def approvedsingleiUserclient(request, pk):
    if request.method =="GET":
        try:
            cx = Userclient.objects.get(uuid = pk)
            
            c.approved = True
            c.save()
            
        
            
            return Response({'user': "Approved successfully"})
        except:
            return Response({'user': "an error occurred reload  and try again"})
@api_view(['GET'])
def approvedsingleiKycuser(request, pk):
    if request.method =="GET":
        try:
          
            if Kycuser.objects.filter(uuid = pk).exists():
                cx = Kycuser.objects.get(uuid = pk)
                cx.approved = True
                cv = Userclient.objects.get(user=cx.user)
                cv.verify = True
                cx.save()
                cv.save()
                
                return Response({'user': "Approved successfully"})
            else:
                return Response({'err': "no kyc submitted "})

        except:
            return Response({'user': "an error occurred reload  and try again"})
@api_view(['GET', 'PUT'])
def serprofilepic(request, pk):
    if request.method =="PUT":
        try:
            pc =request.data['pic']
            cx = Userclient.objects.get(uuid = pk)
            cx.pic =pc
            cx.save()
            
            
            return Response({'user': "created successfully"})
        except:
            return Response({'error': "an error occurred reload  and try again"})
        return Response({'erro': "an error occurred reload  and try again"})


@api_view(['GET', 'POST', ])
def sendmailxc(request, pk):
    if request.method =="POST":
        if  request.data['message'] :
            messagex = request.data['message']
            print(pk)
            message(request, messagex, f"{pk}")
            return Response({'data': 'Done'})

    if request.method =="DELETE":
        d = adminmessage.objects.get(uuid=pk)
        d.delete()
        return Response({'data': 'Done'})
        
    return Response({'erre': 'error'})
