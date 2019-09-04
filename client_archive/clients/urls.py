from rest_framework import routers
from .views import ClientViewSet

router = routers.DefaultRouter()
router.register('api/clients', ClientViewSet, 'clients')

urlpatterns = router.urls