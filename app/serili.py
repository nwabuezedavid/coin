
from rest_framework import serializers
from . models import *

class Userajax(serializers.ModelSerializer):
    class Meta:
        model = Userclient
        depth = 2
        fields ='__all__'
class drsiteedit(serializers.ModelSerializer):
    class Meta:
        model = siteedit
        depth = 2
        fields ="__all__"
class setDeposit(serializers.ModelSerializer):
    class Meta:
        model = Deposit
        depth = 2
        fields ="__all__"
class setallplan(serializers.ModelSerializer):
    class Meta:
        model = allplan
        
        fields ="__all__"
class setallcoin(serializers.ModelSerializer):
    class Meta:
        model = allcoin
        
        
        fields ="__all__"
class setallinvested(serializers.ModelSerializer):
    class Meta:
        model = invested
        
        depth = 2
        fields ="__all__"
class setwithdraw(serializers.ModelSerializer):
    class Meta:
        model = withdraw
        
        fields ="__all__"
class mainUsern(serializers.ModelSerializer):
    class Meta:
        model = User
        
        fields =['id','username','email','first_name', 'last_name']
class mainkyc(serializers.ModelSerializer):
    class Meta:
        model = Kycuser
        
        fields = '__all__'

