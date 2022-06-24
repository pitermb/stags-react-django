from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('AppPeoplesList.urls')),
]

urlpatterns += [re_path(r'^.*',
                        TemplateView.as_view(template_name='index.html'))]
