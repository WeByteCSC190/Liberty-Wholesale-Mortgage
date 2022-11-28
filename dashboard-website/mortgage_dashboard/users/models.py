from django.db import models
# from django.contrib.auth import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin


class UserAccountManager(BaseUserManager):
  def create_user(self, username, password=None):
    if username is None:
      raise TypeError('Users must have a username')
    if password is None:
        raise TypeError('Users must have a password')

    user = self.model(
      username=username,
      password=password
    )

    user.set_password(password)
    user.save(using=self._db)

    return user
  
  def create_superuser(self, username, password=None):
    if password is None:
      raise TypeError('Superusers must have a password')
    if username is None:
      raise TypeError('Superuserse must have a username')

    user = self.create_user(
      username=username,
      password=password
    )

    user.is_staff = True
    user.is_superuser = True
    user.save(using=self._db)

    return user


class CustomUser(AbstractBaseUser, PermissionsMixin):
  ROLE = (
          ('Loan Processor', 'Loan Processor'),
          ('Loan Officer', 'Loan Officer'),
          )

  username = models.CharField(max_length=20, default='', unique=True)
  password = models.CharField(max_length=20, default='')
  fName = models.CharField(max_length=40, default='') 
  lName = models.CharField(max_length=40, default='')
  uID = models.IntegerField(default=000000)
  nmlsID = models.IntegerField(default=000000)
  ssn = models.IntegerField(default=000000)
  # email=models.EmailField(max_length=254, default='')
  address_1 = models.CharField(max_length=128, default='')
  address_2 = models.CharField(max_length=128, default='')
  zip_code = models.CharField(max_length=5, default='')
  role = models.CharField(max_length=40, choices=ROLE, default='')
  is_superuser = models.BooleanField(default=False)
  is_staff = models.BooleanField(default=False)
  is_active = models.BooleanField(default=True)

  USERNAME_FIELD= 'username'
  # REQUIRED_FIELDS = ['fName', 'lName']

  objects = UserAccountManager()

  def __str__(self):
    return self.username
