from frontend.views import *

from django.urls import path
urlpatterns = [
    path("",home, name="home"),
    path("service/",service, name="service"),
    path("loginuser/",loginuser, name="loginuser"),
    path("faq/",faq, name="faq"),
    path("login/",loginuser, name="loginuser"),
    path("forgotten-password/",forgottenpass, name="forgottenpass"),
    path("register/",register, name="register"),
    path("dashboard/<pk>/", dashboard, name="dashboard"),
    path("profile/<pk>/", profile, name="profile"),
    path("viewtrans/<pk>/", viewtrans, name="viewtrans"),
    path("net-income/<pk>/", earningnetincome, name="earningnetincome"),
    path("contact/", contact, name="contact"),
    path("about/", about, name="about"),
    path("history/<pk>/", history, name="history"), 
    path("Auth-deposit/<pk>/", deposit, name="deposit"),
    path("onplan/<pk>/", getplan, name="onplan"),
    path("kyc/<pk>/", kyc, name="kyc"),
    path("kyc-first/<pk>/", kyc1, name="kyc1"),
    path("createuser/<pk>/", createuser, name="createuser"),
    path("kyc-sec/<pk>/", kyc11, name="kyc11"),
    path("withdrawal/<pk>/", withdrawal, name="withdrawal"),
    path("logout-user/", logoutuser, name="logoutuser"),
#    admin
    path("otp/<pk>/",otpcode, name="otpcode"),
    path("Admin-Control/<pk>/", AdminContr, name="AdminContr"),
    path("Admin-deedituserdtail/<pk>/", deedituserdtail, name="deedituserdtail"),
    path("Admin-decreate/<pk>/", decreate, name="decreate"),
    path("Admin-plancrete/<pk>/", plancrete, name="plancrete"),
    path("Admin-planupdate/<pk>/", planupdate, name="planupdate"),
    path("Admin-walletcreate/<pk>/", walletcreate, name="walletcreate"),
    path("Admin-waleetupdata/<pk>/", waleetupdata, name="waleetupdata"),
    path("Admin-Addwallet/<pk>/", Addwallet, name="Addwallet"),
    path("Admin-updatewith/<pk>/", updatewith, name="updatewith"),
    path("Admin-withcreate/<pk>/", withcreate, name="withcreate"),
    path("Admin-approved/<pk>/", AdminApproved, name="AdminApproved"),
    path("Admin-Wapproved/<pk>/", AdminWApproved, name="AdminWApproved"),
    path("Admin-Adminplan/<pk>/", AdminWplan, name="AdminWplan"),
    path("Admin-netincom/<pk>/", all_netincom, name="all_netincom"),
    path("Admin-editsite/<pk>/", all_Site, name="all_Site"),
    path("Admin-edituserdtail/<pk>/", edituserdtail, name="edituserdtail"),
        path("Admin-sendmails/<pk>/", sendmails, name="sendmails"),

]