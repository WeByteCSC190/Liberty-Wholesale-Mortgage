from django import forms
from .models import *

class LenderLogoForm(forms.ModelForm):
    class Meta:
        model = LenderLogo
        fields = ['company', 'logo']