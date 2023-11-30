from django import forms
from .models import Exhibition
from App_Login.models import Profile, School_Profile

class Task1Form(forms.ModelForm):
 class Meta:
  model = Profile

  fields = ('image1', 'image2', 'image3', )
  labels = {'image':'Image'}

class Task2Form(forms.ModelForm):
  class Meta:
   model = Profile

   fields = ('insta_story',  )
   labels = {'image':'Image'}

class ExhibitionForm(forms.ModelForm):
 class Meta:
  model = Exhibition
  fields = '__all__'

class SchoolForm(forms.ModelForm):
  class Meta:
   model = School_Profile

   fields = ('Identification_assessment_and_planning_of_site', 'Written_permission_from_the_owner_and_gathering_of_materials', 'Selecting_and_Purchasing_Your_Trees','Caring_for_Trees_After_Planting','Weekly_inspection_of_trees_for_disease_insects_or_vandalism', 'Planning_for_setting_up_school_garden_and_Committee', 'Determine_Goals_for_Garden_and_gathering_of_materials', 'Funding_and_Information_Sources','Quiz_or_Olympiad' )
