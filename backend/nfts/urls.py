from django.urls import path
from .views import NftCreate, NftsList, NftDetails, NftUpdate, NftDelete


urlpatterns = [
    path('', NftsList.as_view()),
    path('create/', NftCreate.as_view()),
    path('nft/<int:pk>/', NftDetails.as_view()),
    path('nft/update/<int:pk>/', NftUpdate.as_view()),
    path('nft/delete/<int:pk>/', NftDelete.as_view()),
]
