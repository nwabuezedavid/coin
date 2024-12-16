from .views import *

from django.urls import path
urlpatterns = [
    path("", getalluser, name="getalluser"),
    path("allcoin/", allcoinfetch, name="allcoinfetch"),
    path("profile/<pk>/", profile, name="profile"),
    path("loginuser/", loginuser, name="loginuser"),
    path("cretaeallplan/", cretaeallplan),
    path("depositclient/<pk>/<cc>/", depositclient),
    path("withdrawclient/<pk>/", withdrawclient),
    path("Kycuserapi/<pk>/", Kycuserapi),
    path("getsingleuser/<pk>/", getsingleuser),
    path("checknestincome/<pk>/<cn>/", checknestincome),
    path("addnetintrest/<pk>/", addnetintrest),



    # allaproved
    path("all-deletegetallKycuser/", deletegetallKycuser),
    path("all-deletegetalluser/", deletegetalluser),
    path("all-deletallinvested/", deletallinvested),
    path("all-deletallallDeposit/", deletallallDeposit),
    path("all-deletallallwithdraw/", deletallallwithdraw),
    path("all-deletallallcoin/", deletallallcoin),
    path("all-deletallplan/", deletallplan),

    # sngledelete

    path("deletsinglinvested/<pk>/", deletsinglinvested),
    path("deletsinglwithdraw/<pk>/", deletsinglwithdraw),
    path("deletsingleuser/<pk>/", deletsingleuser),
    path("deletsingleallcoin/<pk>/", deletsingleallcoin),
    path("deletsingleDeposit/<pk>/", deletsingleDeposit),
    path("deletsingleKycuser/<pk>/", deletsingleKycuser),

    # approve
    path("setpic/<pk>/", serprofilepic),
    path("net-all/", allneticome),
    path("restp/", resitepass),
    path("verifycode/<pk>/", verifycode),
    path("checkverified/<pk>/", checkverified),
    path("sotes/", editesidf),
    path("sendmail/<pk>/", sendmailxc),
    path("net-alldelete/", Deleteallneticome),
    path("single-Deleteallneticome/<pk>/", singleDeleteallneticome),
    path("single-Approsingledepsoie/<pk>/", Approsingledepsoie),
    path("single-approvedsinglewithdraw/<pk>/", approvedsinglewithdraw),
    path("single-singlesdeletallplan/<pk>/", singlesdeletallplan),
    path("single-approvedsingleallcoin/<pk>/", approvedsingleallcoin),
    path("single-approvedsingleinvested/<pk>/", approvedsingleinvested),
    path("single-approvedsingleiUserclient/<pk>/", approvedsingleiUserclient),
    path("single-approvedsingleiKycuser/<pk>/", approvedsingleiKycuser),
    



]
