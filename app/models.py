from django.db import models

# Create your models here.
 
from datetime import datetime
from django.contrib.auth.models  import User
 
class Userclient(models.Model):
    refer = models.ManyToManyField("refreedclient", blank=True)
    otp = models.CharField( max_length=50, blank=True ,null=True)
    refercode = models.CharField( max_length=50)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    howmanreferral = models.CharField( default=0, max_length=50)
    Phone = models.CharField(blank=True, null=True, max_length=50)
    uuid = models.CharField( max_length=50, blank=True)
    balance = models.DecimalField(max_digits=30, decimal_places=2,default=0)
    pic = models.TextField( blank=True ,null=True) 
    state = models.TextField( blank=True ,null=True)
    address = models.TextField( blank=True ,null=True)
    databirth = models.TextField( blank=True ,null=True)
    country = models.TextField( blank=True ,null=True)
    hiddekyc = models.BooleanField(default=True)
    netincome = models.DecimalField(max_digits=30, decimal_places=2,default=0)
    referamount = models.DecimalField(max_digits=30, decimal_places=2,default=0)
    depositincome = models.DecimalField(max_digits=30, decimal_places=2,default=0)
    withdrawincome = models.DecimalField(max_digits=30, decimal_places=2,default=0)
    deposit = models.ManyToManyField("deposit", blank=True)
    withdraw = models.ManyToManyField("withdraw", blank=True)
    message = models.ManyToManyField("adminmessage", blank=True)
    limitedreinvest  = models.CharField( default=3, max_length=50)
    reinvest = models.BooleanField(default=False)
    verify = models.BooleanField( blank=True ,null=True)
    submitekyc = models.BooleanField( blank=True ,null=True , default=False)
    timesamp = models.IntegerField(default=0 )
    invested = models.ManyToManyField("invested", blank=True)
    password = models.CharField( max_length=50, blank=True)
    def __str__(self):
        return self.user.username
    

    def countearninf(self):
        return len(self.invested.all())
    def countdepo(self):
        return len(self.deposit.all())
    def sumbalance(self):
        return self.balance
    def allde(self):
        alls = 0
        if self.deposit.all():
            for i in self.deposit.all():
                alls+=i.amount
                
        return alls
    def alldeinvested(self):
        alls = 0
        if self.invested.all():
            for i in self.invested.all():
                alls+=i.amount

        return alls | 0
class refreedclient(models.Model):
    user= models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username
class adminmessage(models.Model):
    name = models.CharField( max_length=50, default='Admin')
    date = models.DateTimeField(default=datetime.today(), blank=True, null=True)
    message = models.TextField( max_length=50)
    
    uuid = models.CharField( max_length=50)

    def __str__(self):
        return self.uuid
class allplan(models.Model):
    name = models.CharField( max_length=50,blank=True, null=True,)
    minplan = models.CharField( max_length=50,blank=True, null=True,)
    maxplan = models.CharField( max_length=50,blank=True, null=True,)
    uuid = models.CharField( max_length=50,blank=True, null=True,)
    approved = models.BooleanField(default=False)
    interest = models.FloatField( default=4)
    daygiven = models.IntegerField( default=1, blank=True, null=True,)

    def __str__(self):
        return self.name
class invested(models.Model):
    useronplan = models.ForeignKey("allplan", blank=True, null=True, on_delete=models.CASCADE)
    date = models.DateTimeField( default=datetime.today())
    uuid = models.CharField( max_length=50)
    
    Canreinvest = models.BooleanField(default=False)
    off = models.BooleanField(default=False)
    amounttobeadd = models.IntegerField(default=0)


    def __str__(self):
        return self.useronplan.name
    def getcourn(self):
        return self.amounttobeadd  * self.useronplan.interest/100
class allcoin(models.Model):
    name = models.CharField( max_length=50)
    address = models.CharField( max_length=50)
    logo = models.TextField(blank=True, null=True)
    date = models.DateTimeField( default=datetime.today())
    uuid = models.CharField( max_length=50)
    approved = models.BooleanField(default=False)


    def __str__(self):
        return self.name
class Deposit(models.Model):
    coin = models.ForeignKey("allcoin", on_delete=models.CASCADE,blank=True, null=True,)
    date = models.DateTimeField( auto_now=False, auto_now_add=True)
    uuid = models.CharField( max_length=50)
    proof = models.TextField(  blank=True, null=True,)
    approved = models.BooleanField(default=False)
    amount = models.FloatField(default=0)

    def __str__(self):
        return self.uuid
    
class withdraw(models.Model):
    amount = models.FloatField(default=0)
    address = models.CharField( max_length=50,blank=True, null=True,)
    name = models.CharField( max_length=50,blank=True, null=True,)
    date = models.DateTimeField( auto_now=False, auto_now_add=True)
    uuid = models.CharField( max_length=50)
    approved = models.BooleanField(default=False)

    def __str__(self):
        return self.uuid

    



class siteedit(models.Model):
    name = models.CharField( max_length=50 ,blank=True, null=True,)
    email = models.CharField( max_length=50 ,blank=True, null=True,)
    domain = models.CharField( max_length=50 ,default=name, blank=True, null=True,)
    Address = models.CharField( max_length=50 ,blank=True, null=True,)
    country = models.CharField( max_length=50 ,blank=True, null=True,)
    dis = models.TextField( blank=True, null=True,)
    phone = models.CharField( max_length=50 ,blank=True, null=True,)
    logo = models.TextField( blank=True, null=True,)
    image2 = models.TextField( blank=True, null=True,)
    image1 = models.TextField( blank=True, null=True,)
    limited = models.BooleanField(default=False ,blank=True, null=True,)
    kyc = models.BooleanField(default=False ,blank=True, null=True,)
    idx = models.IntegerField( default=1) 
    intrest = models.IntegerField( default=5)
    

   
    def __str__(self):
        return self.name
    
  

class Kycuser(models.Model):
    filex = models.TextField(blank=True, null=True)
    uuid = models.CharField( max_length=50, blank=True, null=True)
    lname = models.CharField( max_length=50,blank=True, null=True)
    fname = models.CharField( max_length=50,blank=True, null=True)
    fathernamef = models.CharField( max_length=50,blank=True, null=True)
    fathernamel = models.CharField( max_length=50,blank=True, null=True)
    PAN = models.CharField( max_length=50,blank=True, null=True)
    DateofBirth = models.DateField( max_length=50,blank=True, null=True)
    address1 = models.CharField( max_length=50,blank=True, null=True)
    address2 = models.CharField( max_length=50,blank=True, null=True)
    city = models.CharField( max_length=50,blank=True, null=True)
    state = models.CharField( max_length=50,blank=True, null=True)
    zipcode = models.CharField( max_length=50,blank=True, null=True)
    Country = models.CharField( max_length=50,blank=True, null=True)
    gender = models.CharField( max_length=50,blank=True, null=True)
    email = models.CharField( max_length=50,blank=True, null=True)
    PANStatue = models.CharField( max_length=50,blank=True, null=True)
    martialstatue = models.CharField( max_length=50,blank=True, null=True)
    citizenStatus = models.CharField( max_length=50,blank=True, null=True)
    proofaddress = models.CharField( max_length=50,blank=True, null=True)
    disableshow = models.BooleanField(default=False)
    approved = models.BooleanField(default=False)
    user = models.ForeignKey("Userclient", blank=True, null=True, on_delete=models.CASCADE)

    
    

   
    def __str__(self):
        return f'{self.lname} and {self.uuid}'
