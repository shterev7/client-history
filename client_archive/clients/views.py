from clients.models import Client
from rest_framework import viewsets, permissions, generics
from .serializers import ClientSerializer
from rest_framework import filters


class ClientViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ClientSerializer

    def get_queryset(self):
        return self.request.user.clients.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ClientListView(generics.ListAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('name', 'email','project', 'tech_stack','created_at')