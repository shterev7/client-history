from builtins import super

from rest_framework import serializers
from clients.models import Client


class ClientSerializer(serializers.ModelSerializer):
  class Meta:
    model = Client
    fields = '__all__'

  def to_representation(self, instance):
    representation = super(ClientSerializer, self).to_representation(instance)
    representation['created_at'] = instance.created_at.strftime("%d/%m/%Y %H:%M:%S")
    return representation