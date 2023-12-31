from django.shortcuts import render, HttpResponseRedirect
from django.urls import reverse
from django.http import HttpResponse

from django.contrib.auth.forms import AuthenticationForm, PasswordChangeForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, logout, authenticate, update_session_auth_hash
from django.conf import settings
from django.core.mail import send_mail

from App_Login.models import *
from App_Login.forms import ProfileForm, SignUpForm, UserProfileChange, SubscriberForm

from django.contrib import messages
import razorpay
import uuid

from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.template.loader import render_to_string
from django.core.mail import EmailMessage


def register_attempt(request):

    if request.method == 'POST':
        fullname = request.POST.get('fullname')
        dob = request.POST.get('dob')
        email = request.POST.get('email')
        contact = request.POST.get('contact')
        acontact = request.POST.get('acontact')
        student_class = request.POST.get('student_class')
        school = request.POST.get('school')
        country = request.POST.get('country')
        city = request.POST.get('city')
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(fullname)
        print(dob)
        # print(gender)
        print(contact)
        print(country)
        print(city)
        print(student_class)

        try:
            if User.objects.filter(username = username).first():
                messages.success(request, 'Username is taken.')
                return HttpResponseRedirect(reverse('App_Login:register_attempt'))

            if User.objects.filter(email = email).first():
                messages.success(request, 'Email is taken.')
                return HttpResponseRedirect(reverse('App_Login:register_attempt'))


            user_obj = User(username = username , email = email)
            user_obj.set_password(password)
            user_obj.save()
            auth_token = str(uuid.uuid4())
            profile_obj = Profile.objects.create(user = user_obj , auth_token = auth_token, fullname = fullname,student_class=student_class, dob=dob, contact=contact, country=country, city=city, email=email,school=school,acontact=acontact)
            profile_obj.save()
            messages.success(request, 'Registered Sucessfully')
            html_template = render_to_string('register_email.html', {'fullname':fullname, 'username':username,'password':password})
            recipient_list = [email]
            message = EmailMessage('Welcome To SAVTHEARTH', html_template,
                                   'SAVTHEARTH <info@savthearth.org>', [email])
            message.content_subtype = 'html'
            message.send()
            profile_obj.save()

            return HttpResponseRedirect(reverse('App_Login:login_attempt'))


        except Exception as e:
            print(e)


    return render(request , 'App_Login/register.html')

def login_attempt(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user_obj = User.objects.filter(username = username).first()
        if user_obj is None:
            messages.success(request, 'User not found.')
            return HttpResponseRedirect(reverse('App_Login:login_attempt'))


        # profile_obj = Profile.objects.filter(user = user_obj ).first()
        #
        # if not profile_obj.is_verified:
        #     messages.success(request, 'Profile is not verified check your mail.')
        #     return HttpResponseRedirect(reverse('App_Login:login_attempt'))

        user = authenticate(username = username , password = password)
        if user is None:
            messages.success(request, 'Wrong password.')
            return HttpResponseRedirect(reverse('App_Login:login_attempt'))

        login(request , user)
        return HttpResponseRedirect(reverse('assignment'))

    return render(request , 'App_Login/login.html')

def register_school(request):

    if request.method == 'POST':
        school_name = request.POST.get('school_name')
        city = request.POST.get('city')
        country = request.POST.get('country')
        principal_name = request.POST.get('principal_name')
        teacher_incharge = request.POST.get('teacher_incharge')
        mobile_number = request.POST.get('mobile_number')
        landline_number = request.POST.get('landline_number')
        student_strength = request.POST.get('student_strength')
        username = request.POST.get('username')
        password = request.POST.get('password')
        email = request.POST.get('email')

        print(school_name)
        print(city)
        print(country)
        print(principal_name)
        print(teacher_incharge)
        print(mobile_number)
        print(landline_number)
        print(student_strength)
        print(username)
        print(password)
        print(email)


        try:
            if User.objects.filter(username = username).first():
                messages.success(request, 'Username is taken.')
                return HttpResponseRedirect(reverse('App_Login:register_attempt'))

            if User.objects.filter(email = email).first():
                messages.success(request, 'Email is taken.')
                return HttpResponseRedirect(reverse('App_Login:register_attempt'))


            user_obj = User(username = username , email = email)
            user_obj.set_password(password)
            user_obj.save()
            profile_obj = School_Profile.objects.create(user = user_obj , school_name=school_name, city=city, country=country, principal_name=principal_name, teacher_incharge=teacher_incharge, mobile_number=mobile_number, landline_number=landline_number, student_strength=student_strength, email=email)
            profile_obj.save()
            messages.success(request, 'Registered Sucessfully')
            # html_content = render_to_string("email_template.html",{'username':username,'password':password})
            # text_content = strip_tags(html_content)
            #
            # email_send = EmailMultiAlternatives(
            #     "ICFC Confirmation Email",
            #     text_content,
            #     settings.EMAIL_HOST_USER,
            #     [email],
            # )
            # email_send.attach_alternative(html_content,"text/html")
            # email_send.send()
            # print(email_send)
            return HttpResponseRedirect(reverse('App_Login:login_school'))


        except Exception as e:
            print(e)


    return render(request , 'App_Login/register_school.html')


def login_school(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user_obj = User.objects.filter(username = username).first()
        if user_obj is None:
            messages.success(request, 'User not found.')
            return HttpResponseRedirect(reverse('App_Login:login_attempt'))


        # profile_obj = Profile.objects.filter(user = user_obj ).first()
        #
        # if not profile_obj.is_verified:
        #     messages.success(request, 'Profile is not verified check your mail.')
        #     return HttpResponseRedirect(reverse('App_Login:login_attempt'))

        user = authenticate(username = username , password = password)
        if user is None:
            messages.success(request, 'Wrong password.')
            return HttpResponseRedirect(reverse('App_Login:login_school'))

        login(request , user)
        return HttpResponseRedirect(reverse('school_assignment'))

    return render(request , 'App_Login/login_school.html')


@login_required
def logout_user(request):
    logout(request)
    messages.warning(request,"You Are Logged Out!")
    return HttpResponseRedirect(reverse('home'))

@login_required
def change_password(request):
    if request.method == 'POST':
        fm = PasswordChangeForm(user=request.user, data=request.POST)
        if fm.is_valid():
            fm.save()
            update_session_auth_hash(request, fm.user)
            return HttpResponseRedirect(reverse('App_Login:login'))
    else:
        fm = PasswordChangeForm(user=request.user)
    return render(request, 'App_Login/change-password.html', {'form':fm})

@login_required(login_url='/account/login')
def subscriber_payment(request):
    if request.method == 'POST':
        subs = request.user;
        amount = 500000;
        client = razorpay.Client(auth=('rzp_test_uxpXt2M6OCK6fN','UgT5LV4PMBIS6JBV5nLcLBcu'))

        response_payment = client.order.create(dict(amount=amount, currency='INR'))
        order_id = response_payment['id']
        order_status = response_payment['status']
        if order_status == 'created':
            subscriber = Subscriber(
                subs = subs,
                order_id = order_id
            )
            subscriber.save()
            response_payment['name']: request.user
            form = SubscriberForm(request.POST or None)
            return render(request, 'App_Login/subscriber_payment.html', {'form':form, 'payment':response_payment})
    form = SubscriberForm()
    return render(request, 'App_Login/subscriber_payment.html', {'form':form})

def success(request):
    return render(request,'App_Login/success.html')

def token_send(request):
    return render(request,'App_Login/token_send.html')

def verify(request , auth_token):
    try:
        profile_obj = Profile.objects.filter(auth_token = auth_token).first()


        if profile_obj:
            if profile_obj.is_verified:
                messages.success(request, 'Your account is already verified.')
                return HttpResponseRedirect(reverse('App_Login:login_attempt'))
            profile_obj.is_verified = True
            profile_obj.save()
            messages.success(request, 'Your account has been verified.')
            return HttpResponseRedirect(reverse('App_Login:success'))
        else:
            return HttpResponseRedirect(reverse('App_Login:error_page'))
    except Exception as e:
        print(e)
        return HttpResponseRedirect(reverse('home'))

def error_page(request):
    return  render(request , 'App_Login/error.html')

def send_mail_after_registration(email , token):
    subject = 'Your account needs to be verified'
    message = f'Hey! Paste the link to verify your account http://127.0.0.1:8000/account/verify/{token}'
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email]
    send_mail(subject, message , email_from ,recipient_list )
