from django.urls import path
from . import views

urlpatterns=[
    path('',views.home,name='home'),
    path('aboutus/',views.aboutus,name='aboutus'),
    path('services/',views.services,name='services'),
    path('projects/',views.projects,name='projects'),
    path('team/',views.team,name='team'),
    path('faqs/',views.faqs,name='faqs'),
    path('auditorium/',views.auditorium,name='auditorium'),
    path('manual/',views.manual,name='manual'),
    path('events/',views.events,name='events'),
    path('blogs/',views.blogs,name='blogs'),
    path('gallery/',views.gallery,name='gallery'),
    path('contact/',views.contact,name='contact'),
    path('add-exhibition' , views.add_exhibition , name='add_exhibition'),
    path('view-exhibition' , views.View_Exhibition.as_view() , name='view_exhibition'),
    path('exhibition/<pk>/', views.Exhibition_Details.as_view(), name='exhibition_details'),
    path("assignments/", views.assignment, name="assignment"),
    path("school-assignments/", views.school_assignment, name="school_assignment"),
    path("instructions/", views.instructions, name="instructions"),
    path("quiz/", views.quiz, name="quiz"),
    path("task-1/", views.task1, name="task1"),
    path("task-2/", views.task2, name="task2"),
    path("certificate/", views.certificate, name="certificate"),
    path("check-status/", views.status, name="status"),
    path("demo/", views.demo, name="demo"),

]
