from django.http import HttpResponse
from django.urls import reverse
from django.shortcuts import render, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import ListView, DetailView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.conf import settings
from .models import *
from .forms import *
from App_Login.models import *
import json
from django.views.decorators.csrf import csrf_protect
from django.core.mail import send_mail
from django.contrib import messages



def home(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        print(name)
        print(email)
        subscriberdata = Subscribe.objects.create(name=name, email=email)
        subscriberdata.save()
        messages.success(request, 'Thank you for subscribing')
        return HttpResponseRedirect(reverse('home'))
    return render(request, 'index.html')

def aboutus(request):
    return render(request, 'about.html')

def services(request):
    return render(request, 'services.html')

def projects(request):
    return render(request, 'projects.html')

def team(request):
    return render(request, 'team.html')

def faqs(request):
    return render(request, 'faqs.html')

def auditorium(request):
    return render(request, 'auditorium.html')

def manual(request):
    return render(request, 'manual.html')


def events(request):
    return render(request, 'events.html')

def blogs(request):
    return render(request, 'blogs.html')

def gallery(request):
    return render(request, 'gallery.html')

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        send_mail(
            email ,
            message,
            name,
            ['ishaan18nagpal@gmail.com']
            )
        messages.success(request, 'Your message was delivered successfully')
        contactformdata = contactform(name=name, email=email, subject=subject, message=message)
        contactformdata.save()
    return render(request, 'contact.html')

def demo(request):
    return render(request, 'demo.html')


def add_exhibition(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        logo1 = request.FILES.get('logo1')
        logo2 = request.FILES.get('logo2')
        image1 = request.FILES.get('image1')
        image2 = request.FILES.get('image2')
        image3 = request.FILES.get('image3')
        image4 = request.FILES.get('image4')
        image5 = request.FILES.get('image5')
        video = request.POST.get('video')

        exhibition_obj = Exhibition(name=name, logo1=logo1, logo2=logo2, image1=image1, image2=image2, image3=image3, image4=image4, image5=image5, video=video)
        exhibition_obj.save()
        return HttpResponseRedirect(reverse('view_exhibition'))

    return render(request, 'add_exhibition.html')

class View_Exhibition(ListView):

    model = Exhibition
    template_name = 'view_exhibition.html'

class Exhibition_Details(DetailView):

    model = Exhibition
    template_name = 'exhibition_details.html'

@login_required(login_url='/account/login')
def assignment(request):
    return render(request, 'assignment.html')

@login_required(login_url='/account/login-school')
def school_assignment(request):
    user=request.user
    form = SchoolForm(instance=user)
    if request.method == "POST":

        form = SchoolForm(request.POST, instance=user)

        if form.is_valid():
            form.save()
            messages.success(request, 'Sent For Enquiry')

    return render(request, 'school_assignment.html',  {'form':form})

@login_required(login_url='/account/login')
def instructions(request):
    profile = Profile.objects.all()
    return render(request, 'instructions.html', {'profile':profile})

@login_required(login_url='/account/login')
def quiz(request):
    if request.method == 'POST':
        score = request.POST.get('score')
        print(score)
        Profile.objects.filter(user=request.user).update(score=score)
        Profile.objects.filter(user=request.user).update(test_attempted=True)
        return HttpResponseRedirect("/")


    profile = Profile.objects.all()
    school_profile = School_Profile.objects.all()

    # profile_json = json.dumps(profile)
    return render(request, 'quiz.html', {'profile':profile})

@login_required(login_url='/account/login')
def task1(request):
    user=request.user.profile
    form = Task1Form(instance=user)
    if request.method == "POST":

        form = Task1Form(request.POST, request.FILES, instance=user)

        if form.is_valid():
            form.save()
            messages.success(request, 'Image Uploaded successfully!')

    img = Profile.objects.all()
    return render(request, 'task1.html', {'img':img, 'form':form})

@login_required(login_url='/account/login')
def task2(request):
    user=request.user.profile
    form = Task2Form(instance=user)
    if request.method == "POST":

        form = Task2Form(request.POST, request.FILES, instance=user)

        if form.is_valid():
            form.save()
            messages.success(request, 'Image Uploaded successfully!')

    img = Profile.objects.all()
    return render(request, 'task2.html', {'img':img, 'form':form})

@login_required(login_url='/account/login')
def certificate(request):
    profile = Profile.objects.all()
    return render(request, 'certificate.html', {'profile':profile})

@login_required(login_url='/account/login')
def status(request):
    return render(request, 'status.html')
