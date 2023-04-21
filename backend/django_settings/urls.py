from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name = 'index.html')),
    path("admin/", admin.site.urls),
    path('stu/', TemplateView.as_view(template_name = 'index.html')),
    # path('admain/', TemplateView.as_view(template_name = 'index.html')),
    path('admain/', include('apps.API.urls')),
    path('contact/', include('apps.API.urls')),
    path('api/', include('apps.API.urls')),
    path('login', include('apps.API.urls')),
]

# student_urls = [
#     path('', TemplateView.as_view(template_name = 'index.html'), name = 'student'),
#     path('details/', StudentDetailView.as_view(), name = 'student_details'),
#     path('marks/', StudentMarksView.as_view(), name = 'student-marks'),
    #? other student-related urls placed here!
#]

# admin_urls = [
#     path('', TemplateView.as_view(template_name = 'index.html'), name = 'admin'),
#     path('details', AdminDetailView.as_view(), name = 'admin_detail'),
    
    #? other admin-related urls placed here!
#]

# api_urls = [
    #! OTHER APIS INCLUDED IN HERE
#]

# ################## NOT FULLY FUNCTIONAL YET ##################
# ################## NOT FULLY FUNCTIONAL YET ##################
# ################## NOT FULLY FUNCTIONAL YET ##################
# ################## NOT FULLY FUNCTIONAL YET ##################

#? urlpatterns = [
#?     path('', TemplateView.as_view(template_name = 'index.html'), name = 'index'),
#?     path('admin/', admin.site.urls),
#?     path('studnt/', include(studnt_urls)),
#?     path('admin-panel', include(admin_urls)),
    
#?     ]


#! or adding all urlpatterns together grouping them with the normal urlpatterns