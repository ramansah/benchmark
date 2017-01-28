from django.http import JsonResponse


def index(request):
    data = dict(
        name='Raman Sah',
        age=22
    )
    return JsonResponse(data)
