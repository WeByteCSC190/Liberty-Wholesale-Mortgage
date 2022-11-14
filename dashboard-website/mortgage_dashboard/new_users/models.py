from django.db import models
# from django.contrib.auth import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin


class UserAccountManager(BaseUserManager):
  def create_user(self, username,fName, lName, password=None):
    if not username:
      raise ValueError('Users must have a username')

    user = self.model(
      username=username,
      fName=fName,
      lName=lName,
    )

    user.set_password(password)
    user.save(using=self._db)

    return user
  
  def create_superuser(self, username, fName, lName, password=None):
    if password is None:
      raise TypeError('Superusers must have a password')
    if username is None:
      raise TypeError('Superuserse must have a username')

    user = self.create_user(
      username,
      fName,
      lName,
      password=password
    )

    user.is_staff = True
    user.is_superuser = True
    user.save(using=self._db)

    return user


class CustomUser(AbstractBaseUser, PermissionsMixin):
  username = models.CharField(max_length=20, default='', unique=True)
  password = models.CharField(max_length=20, default='')
  fName = models.CharField(max_length=40, default='') 
  lName = models.CharField(max_length=40, default='')
  is_staff = models.IntegerField(default=False)
  is_active = models.IntegerField(default=True)

  USERNAME_FIELD= 'username'
  REQUIRED_FIELDS = ['fName', 'lName']

  objects = UserAccountManager()

  def __str__(self):
    return self.username
