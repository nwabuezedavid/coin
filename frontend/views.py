from django.shortcuts import render,redirect
from app.models import *
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

# Create your views here.



from django.shortcuts import render
 
import uuid

def seed_investment_plans(request):
    plans = [
        {
            "name": "Starter Plan",
            "minplan": "50",
            "maxplan": "499",
            "interest": 4.0,
            "daygiven": 3,
        },
        {
            "name": "Silver Plan",
            "minplan": "500",
            "maxplan": "1,999",
            "interest": 5.5,
            "daygiven": 5,
        },
        {
            "name": "Gold Plan",
            "minplan": "2,000",
            "maxplan": "4,999",
            "interest": 6.5,
            "daygiven": 7,
        },
        {
            "name": "Diamond Plan",
            "minplan": "5,000",
            "maxplan": "9,999",
            "interest": 8.0,
            "daygiven": 10,
        },
        {
            "name": "Elite Plan",
            "minplan": "10,000",
            "maxplan": "50,000",
            "interest": 10.0,
            "daygiven": 14,
        },
    ]

    # Loop through and create plans if they don’t exist
    for plan in plans:
        allplan.objects.get_or_create(
            name=plan["name"],
            defaults={
                "minplan": plan["minplan"],
                "maxplan": plan["maxplan"],
                "uuid": str(uuid.uuid4()),
                "approved": True,
                "interest": plan["interest"],
                "daygiven": plan["daygiven"],
            },
        )
 

def home(request):
 
    conx={
        'site': siteedit.objects.get(idx=1),
        'plan': allplan.objects.all(),
    }
    return render(request, 'frontcover/homepage.html', conx)
def service(request):
    conx={
        'site': siteedit.objects.get(idx=1),
    }
    return render(request, 'frontcover/service.html', conx)
def contact(request):
    conx={
        'site': siteedit.objects.get(idx=1),
    }
    return render(request, 'frontcover/contact.html', conx)
def about(request):
    conx={
        'site': siteedit.objects.get(idx=1),
    }
    return render(request, 'frontcover/about.html', conx)
def faq(request):   
    conx={
        'site': siteedit.objects.get(idx=1),
    }
    return render(request, 'frontcover/Faq.html', conx)
def loginuser(request):
    conx={
        'site': siteedit.objects.get(idx=1),
    }
    return render(request, 'frontcover/login.html', conx)
def register(request):
    conx={
        'site': siteedit.objects.get(idx=1),
    }
    return render(request, 'frontcover/register.html', conx)
def forgottenpass(request):
    conx={
        'site': siteedit.objects.get(idx=1),
    }
    return render(request, 'frontcover/forgottenpass.html', conx)
def dashboard(request, pk):
    try :
        c = Userclient.objects.get(uuid=pk)
        ver = ''
        if Kycuser.objects.filter(user=c).exists():
            ver = Kycuser.objects.get(user=c)
       
   
        dl = c.deposit.all().last()
        wl = c.withdraw.all().last()
        vl = c.invested.all().last()
        print(c)
        ii = c.deposit.all()[:3]
        ccc = ''
        ss = ''
        net = ''
        totalde = len(c.deposit.all() )
        totalwd = len(c.withdraw.all() )
        allconbine = totalwd + totalde
        
    except:
        return redirect('/')    
    con = {
        'user':c,
        'ver':ver,
        'site': siteedit.objects.get(idx=1),
        'current':ii,
        'dl':dl,
        'wl':wl,
        'vl':vl,
        'totaltransc':allconbine,
        'x':ccc,
        'net':net,
    }
    return render(request, 'frontcover/pro/dashboard.html',con)
def profile(request, pk):
    try:
        c = Userclient.objects.get(uuid=pk)
        ver = ''
        if Kycuser.objects.filter(user=c).exists():
            ver = Kycuser.objects.get(user=c)
       

        print(c)
        
        od = c.invested.last()
        
       


    except:
        return redirect('/')
    con = {
        'user':c,
       
        'site': siteedit.objects.get(idx=1),
        'od':od,
        'ver':ver,
        
        
    }
    return render(request, 'frontcover/pro/profile.html',con)
def earningnetincome(request, pk):
    try:
        c = Userclient.objects.get(uuid=pk)
        ver = ''
        if Kycuser.objects.filter(user=c).exists():
            ver = Kycuser.objects.get(user=c)
       

        print(c)
        new =  c.invested.all().order_by('-id')
       

        print(c)

    except:
        return redirect('/')
    con = {
        'user':c,
        'ver':ver,
        'site': siteedit.objects.get(idx=1),
        'allnew':new,
    }    

    return render(request, 'frontcover/pro/earninginvest.html',con)
def history(request, pk):
    try :
        c = Userclient.objects.get(uuid=pk)
        ver = ''
        if Kycuser.objects.filter(user=c).exists():
            ver = Kycuser.objects.get(user=c)
       

        print(c)
        eoder = []
        if c.deposit.all() :
            for i in c.deposit.all().order_by('-id') :
      
                eoder.append(i)
        if  c.withdraw.all():
            for i in  c.withdraw.all().order_by('-id'):
                eoder.append(i)

    except:
        return redirect('/')
    con = {
        'user':c,
        'ver':ver,
        'site': siteedit.objects.get(idx=1),
        'current':eoder,
    }
    return render(request, 'frontcover/pro/history.html',con)
def viewtrans(request, pk):
    if True :
        c = Userclient.objects.get(user=request.user)
        ver = ''
        try:
            cc = Deposit.objects.get(uuid = pk)
            isd = True
            if cc:
                cc =Deposit.objects.get(uuid = pk)

        except:
            if withdraw.objects.filter(uuid = pk).exists():
                cc = withdraw.objects.get(uuid = pk)
            isd = False
       
        print('null', cc)
    # except:
    #     return redirect('/')
    con = {
        'user':c,
        'cc':cc,
        'ver':ver,
        'isd':isd,
        'site': siteedit.objects.get(idx=1),
        
    }
    return render(request, 'frontcover/pro/view.html',con)
def kyc(request, pk):
    try:
        c = Userclient.objects.get(uuid=pk)
        ver = ''
        if Kycuser.objects.filter(user=c).exists():
            ver = Kycuser.objects.get(user=c)
       

        print(c)
        

        print(c)

    except:
        return redirect('/')
    con = {
        'user':c,
        'site': siteedit.objects.get(idx=1),
    }
    return render(request, 'frontcover/pro/kyc.html', con)
def kyc1(request, pk):
    try:
        c = Userclient.objects.get(uuid=pk)
        ver = ''
        if Kycuser.objects.filter(user=c).exists():
            ver = Kycuser.objects.get(user=c)
       

        print(c)
        

        print(c)

    except:
        return redirect('/')
    con = {
        'user':c,
        'site': siteedit.objects.get(idx=1),
    }
    return render(request, 'frontcover/pro/kyc1.html', con)
def kyc11(request, pk):
    try:
        c = Userclient.objects.get(uuid=pk)
        ver = ''
        if Kycuser.objects.filter(user=c).exists():
            ver = Kycuser.objects.get(user=c)
       

        print(c)
        

        print(c)

    except:
        return redirect('/')
    con = {
        'user':c,
        'site': siteedit.objects.get(idx=1),
    }
    return render(request, 'frontcover/pro/kyc11.html', con)
def deposit(request, pk):
    try:
        c = Userclient.objects.get(uuid=pk)
        ver = ''
        if Kycuser.objects.filter(user=c).exists():
            ver = Kycuser.objects.get(user=c)
       

        print(c)
        nx = allcoin.objects.all()

       

        print(c)

    except:
        return redirect('/')
    con = {
        'user':c,
        'ver':ver,
        'site': siteedit.objects.get(idx=1),
        'coin':nx,
    }
    return render(request, 'frontcover/pro/deposit.html', con)
def getplan(request, pk):
    try:
        c = Userclient.objects.get(uuid=pk)
        ver = ''
        if Kycuser.objects.filter(user=c).exists():
            ver = Kycuser.objects.get(user=c)
       

        print(c)
        allp = allplan.objects.all()

        print(c)

    except:
        return redirect('/')
    con = {
        'user':c,
        'ver':ver,
        'site': siteedit.objects.get(idx=1),
        'allp':allp,
    }
    return render(request, 'frontcover/pro/planon.html', con)
def withdrawal(request, pk):
    try:
        c = Userclient.objects.get(uuid=pk)
        ver = ''
        if Kycuser.objects.filter(user=c).exists():
            ver = Kycuser.objects.get(user=c)
       

        print(c)
       

        print(c)

    except:
        return redirect('/')
    con = {
        'user':c
    }
    return render(request, 'frontcover/pro/withdrawal.html',con)


def logoutuser(request):
    logout(request)
    return redirect('home')














    # Adminstatio

from .genUid import * 


def AdminContr(request, pk):
    try:
        c = Userclient.objects.get(uuid=pk)
        allus = Userclient.objects.exclude(uuid=pk).order_by('-id')
        ver = ''
        if Kycuser.objects.filter(user=c).exists():
            ver = Kycuser.objects.get(user=c)

    except:
        return redirect('/')
    con = {
        'user':c,
        'allus':allus,
    }
    return render(request, 'frontcover/admins/admin-alluser.html',con)
def createuser(request, pk):
    if True:
        c = None
        cc = Userclient.objects.get(user=request.user)
        if request.method == "POST":
            username = request.POST["username"]
            balance = request.POST["balance"]
            email = request.POST["email"]
            password = request.POST["current-password"]
            if not User.objects.filter(username=username, email=email, ).exists():
                us = User.objects.create(username=username, email=email, )
                usercreate = Userclient.objects.create(
                    user = us,
                    password=password ,
                    balance=balance ,
                    refercode = referCode(9),uuid = referCode(12),
                )
                usercreate.save()

                messages.error(request, "created profile sucessfully")
                return redirect ('AdminContr', pk=pk)
            
            else:
                messages.error(request, "user already exist")
       

    # except:
    #     return redirect('/')
    con = {
        'user':cc,
        'userc':cc,
    
    }
    return render(request, 'frontcover/admins/create.html',con)
def edituserdtail(request, pk):
    try:
        c = Userclient.objects.get(uuid=pk)
        cc = Userclient.objects.get(user=request.user)
        if request.method == "POST":
            username = request.POST["username"]
            balance = request.POST["balance"]
            email = request.POST["email"]
            password = request.POST["current-password"]
            c.password = password
            c.balance = balance
            c.user.username = username
            c.user.email = email
            c.save()
            messages.error(request, "created profile sucessfully")
            return redirect ('edituserdtail', pk=pk)
            

       

    except:
        return redirect('/')
    con = {
        'user':c,
        'userc':cc,
    
    }
    return render(request, 'frontcover/admins/edituser.html',con)

from datetime import datetime
from math import *
from decimal import Decimal

def updatewith(request, pk):
    if True:
        coinx =  Userclient.objects.all()
        c = withdraw.objects.get(uuid=pk)
        cc = Userclient.objects.get(user=request.user)
        if request.method == "POST":
            amount = request.POST["amount"]
            datex = request.POST["date"]
            address = request.POST["address"]
            name = request.POST["name"]
            userx = request.POST["uuid"]
            c.amount = floor(float(amount))
            c.date = datex or c.date
            c.address=address
            c.name=name
            
            
            
            c.save()
            if userx:
                linkiuse =  Userclient.objects.get(uuid = userx)
                linkiuse.withdraw.add(c)
                linkiuse.save()
            messages.error(request, "created sucessfully")
            return redirect ('updatewith', pk=pk)
            

    # except:
    #     return redirect('/')
    con = {
        'user':c,
        'userc':cc,
        'alluser':coinx,
        'coinx':coinx,
    
    }
    return render(request, 'frontcover/admins/updatewith.html',con)

def withcreate(request, pk):
    try:
        coinx =  allcoin.objects.all()
        alluser =  Userclient.objects.all()
        cc = Userclient.objects.get(user=request.user)
        if request.method == "POST":
            amount = request.POST["amount"]
            userx = request.POST["uuid"]
            datex = request.POST["date"]
            address = request.POST["address"]
            name = request.POST["name"]

            linkiuse =  Userclient.objects.get(uuid = userx)
            c = withdraw.objects.create(
            uuid=referCode(12),
            amount = floor(float(amount)),
            date = datex ,
            address=address,
            name=name,
            )
            
            
            c.save()
            linkiuse.withdraw.add(c)
            linkiuse.save()
            messages.error(request, "created sucessfully")
            return redirect ('AdminWApproved', pk=pk)
            

    except:
        return redirect('/')
    con = {
        'user':cc,
        'userc':cc,
        'alluser':alluser,
        'coinx':coinx,
    
    }
    return render(request, 'frontcover/admins/withcreate.html',con)

def plancrete(request, pk):
    try:
        cc = Userclient.objects.get(user=request.user)
        if request.method == "POST":
            min = request.POST["min"]
            max = request.POST["max"]
            day = request.POST["day"]
            inter = request.POST["inter"]
            name = request.POST["name"]

            c = allplan.objects.create(
            uuid=referCode(12),
            minplan = min,
            maxplan = max,
            daygiven = day,
            interest =  inter,
            name = name,
            approved=True
            )
            
            
            c.save()
           
            messages.error(request, "created sucessfully")
            return redirect ('plancrete', pk=pk)
            

    except:
        return redirect('/')
    con = {
        'user':cc,
        'userc':cc,
    
    }
    return render(request, 'frontcover/admins/plancrete.html',con)
def planupdate(request, pk):
    if True:
        cc = Userclient.objects.get(user=request.user)
        c = allplan.objects.get(uuid=pk)
        if request.method == "POST":
            min = request.POST["min"]
            max = request.POST["max"]
            day = request.POST["day"]
            inter = request.POST["inter"]
            name = request.POST["name"]            
            c.minplan = min
            c.maxplan = max
            c.daygiven = day
            c.interest =  inter
            c.name = name
            c.approved=True
            c.save()
           
            messages.error(request, "created sucessfully")
            return redirect ('planupdate', pk=pk)
            

    # except:
    #     return redirect('/')
    con = {
        'user':c,
        'userc':cc,
    
    }
    return render(request, 'frontcover/admins/planupdate.html',con)
def decreate(request, pk):
    if True:
        coinx =  allcoin.objects.all()
        alluser =  Userclient.objects.all()
        cc = Userclient.objects.get(user=request.user)
        if request.method == "POST":
            amount = request.POST["amount"]
            uuuid = request.POST["coin"]
            datex = request.POST["date"]
            userx = request.POST["uuid"]

            coin =  allcoin.objects.get(uuid = uuuid)
            linkiuse =  Userclient.objects.get(uuid = userx)
            c = Deposit.objects.create(
            uuid=referCode(12),
            amount = floor(float(amount)),
            coin = coin,
            date = datex 
            )
            
            
            c.save()
            linkiuse.deposit.add(c)
            linkiuse.save()
            messages.error(request, "created sucessfully")
            return redirect ('decreate', pk=pk)
            

       

    # except:
    #     return redirect('/')
    con = {
        'user':cc,
        'userc':cc,
        'alluser':alluser,
        'coinx':coinx,
    
    }
    return render(request, 'frontcover/admins/decreate.html',con)
def walletcreate(request, pk):
    try:
        coinx =  allcoin.objects.all()
        alluser =  Userclient.objects.all()
        cc = Userclient.objects.get(user=request.user)
        if request.method == "POST":
            name = request.POST["name"]
            address = request.POST["address"]
            logo = request.POST["image"]
            s = allcoin.objects.create(
               name=name,
               uuid=referCode(12),
            address=address,
            logo=logo,
            approved=True
            )
           
            s.save()
            
            
            messages.error(request, "created sucessfully")
            return redirect ('walletcreate', pk=pk)
            

       

    except:
        return redirect('/')
    con = {
        'user':cc,
        'userc':cc,
        'alluser':alluser,
        'coinx':coinx,
    
    }
    return render(request, 'frontcover/admins/walletcreate.html',con)
def waleetupdata(request, pk):
    try:
        coinx =  allcoin.objects.all()
        s = allcoin.objects.get(uuid=pk)
        cc = Userclient.objects.get(user=request.user)
        if request.method == "POST":
            name = request.POST["name"]
            address = request.POST["address"]
            logo = request.POST["image"]
            s.name=name
            s.address=address
            s.logo=logo           
            s.save()
            messages.error(request, "created sucessfully")
            return redirect ('waleetupdata', pk=pk)
            

       

    except:
        return redirect('/')
    con = {
        'user':s,
        'userc':cc,
        'coinx':coinx,
    
    }
    return render(request, 'frontcover/admins/upadtewalet.html',con)
def deedituserdtail(request, pk):
    try:
        c = Deposit.objects.get(uuid=pk)
        coinx =  allcoin.objects.all()
        cc = Userclient.objects.get(user=request.user)
        if request.method == "POST":
            amount = request.POST["amount"]
            uuuid = request.POST["coin"]
            datex = request.POST["date"]
            coin =  allcoin.objects.get(uuid = uuuid)
            c.amount = floor(float(amount))
            c.coin = coin
            c.date = datex or c.date
            
            
            c.save()
            messages.error(request, "created profile sucessfully")
            return redirect ('deedituserdtail', pk=pk)
            

       

    except:
        return redirect('/')
    con = {
        'user':c,
        'userc':cc,
        'coinx':coinx,
    
    }
    return render(request, 'frontcover/admins/Deedituser.html',con)

def AdminApproved(request, pk):
    try:
        c = Userclient.objects.get(uuid=pk)
        xc = Deposit.objects.all().order_by('-id')
        

    except:
        return redirect('/')
    con = {
        'user':c,
        "kkl":xc
    }
    return render(request, 'frontcover/admins/approtransittion.html',con)
def Addwallet(request, pk):
    if True:
        
        c = Userclient.objects.get(uuid=pk)
        withd = allcoin.objects.all()
        

    # except:
    #     return redirect('/')
    con = {
        'user':c,
        'withd':withd,
    }
    return render(request, 'frontcover/admins/wallet.html',con)
def AdminWApproved(request, pk):
    if True:
      
        c = Userclient.objects.get(uuid=pk)
        withd = withdraw.objects.all()
        

    # except:
    #     return redirect('/')
    con = {
        'user':c,
        'withd':withd,
    }
    return render(request, 'frontcover/admins/appwithdraw.html',con)
def AdminWplan(request, pk):
    try:
      
        

        c = Userclient.objects.get(uuid=pk)
        allps = allplan.objects.all()
    except:
        return redirect('/')
    con = {
        'user':c,
        'allps':allps,
    }
    return render(request, 'frontcover/admins/plan.html',con)
def all_netincom(request, pk):
    try:
      
        

        c = Userclient.objects.get(uuid=pk)
    except:
        return redirect('/')
    con = {
        'user':c,
    }
    return render(request, 'frontcover/admins/fighter.html',con)
def otpcode(request,pk):
    
    try:
        coin = Userclient.objects.all()
        

        c = Userclient.objects.get(uuid=pk)
    except:
        return redirect('/')
    conx = {
        'user':c,
        'coin':coin
    }    
    return render(request, 'frontcover/otp.html', conx)    
def sendmails(request, pk):
    try:
        coin = Userclient.objects.all()
        

        c = Userclient.objects.get(uuid=pk)
    except:
        return redirect('/')
    con = {
        'user':c,
        'coin':coin
    }
    return render(request, 'frontcover/admins/deposit.html',con)    
    
def all_Site(request, pk):
    try:
        main = siteedit.objects.get(idx=1)
        

        c = Userclient.objects.get(uuid=pk)
    except:
        return redirect('/')
    con = {
        'user':c,
        'site':main
    }
    return render(request, 'frontcover/admins/edit.html',con)