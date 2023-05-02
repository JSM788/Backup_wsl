from django.db import models, IntegrityError
from django.contrib.auth.models import PermissionsMixin, BaseUserManager, AbstractBaseUser
from apps.common.models import TimeStampedModel
from apps.enterprise.models import Enterprise, Headquarters
from enum import Enum


# Create your models here.

class UserManager(BaseUserManager):
    def _create_user(self, email, password, is_staff, is_superuser,
                     **extra_fields):
        user = self.model(email=email, is_active=True,
                          is_staff=is_staff, is_superuser=is_superuser,
                          **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, username=""):
        """
        Creates and saves a User with the given email and password.

        NOTE: Argument 'username' is needed for social-auth. It is not actually used.
        """
        if not email:
            raise ValueError('Users must have an email address.')

        # Validate email is unique in database
        if User.objects.filter(email=self.normalize_email(email).lower()).exists():
            raise ValueError('This email has already been registered.')

        user = self.model(
            email=self.normalize_email(email).lower(),
        )

        user.set_password(password)

        # Save and catch IntegrityError (due to email being unique)
        try:
            user.save(using=self._db)

        except IntegrityError:
            raise ValueError('This email has already been registered.')

        return user

    def create_superuser(self, email, password, **extra_fields):
        return self._create_user(email, password, True, True,
                                 **extra_fields)


class User(TimeStampedModel, AbstractBaseUser, PermissionsMixin):
    class Gender(Enum):
        HOMBRE = "hombre"
        MUJER = "mujer"

    # Datos Empleado
    first_name = models.CharField('nombres', max_length=100)
    last_name = models.CharField('apellidos', max_length=100)
    dni = models.CharField('dni', max_length=8, blank=True, null=True)
    gender = models.CharField('genero', max_length=20, blank=True, null=True,
                              choices=[(item.name, item.value) for item in Gender])
    birthday = models.DateField(blank=True, null=True, verbose_name='fecha de nacimiento')
    age = models.IntegerField(verbose_name='edad', blank=True, null=True)
    email = models.EmailField('correo electronico', unique=True)
    phone = models.CharField('telefono', max_length=30, blank=True, null=True)

    # Datos Empresa
    photo = models.ImageField('foto', upload_to='user', blank=True, null=True)
    enterprise = models.ForeignKey(Enterprise, verbose_name='Empresa', blank=True, null=True, on_delete=models.PROTECT)
    headquarter = models.ForeignKey(Headquarters, verbose_name='Sede de empresa', blank=True, null=True,
                                    on_delete=models.PROTECT)
    admission_date = models.DateField('fecha de ingreso', blank=True, null=True)
    departure_date = models.DateField('fecha de salida', blank=True, null=True)

    # Datos Django
    objects = UserManager()
    is_enabled = models.BooleanField(default=True, verbose_name='Habilitar Usuario')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    send_email = models.BooleanField(default=False, blank=False, null=False)

    USERNAME_FIELD = 'email'

    def get_full_name(self):
        return '{0} {1}'.format(self.first_name, self.last_name)

    def get_short_name(self):
        return self.first_name

    @property
    def name_enterprise(self):
        if self.enterprise:
            return self.enterprise.name
        return None

    @property
    def name_headquarter(self):
        if self.headquarter:
            return self.headquarter

    class Meta:
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"
