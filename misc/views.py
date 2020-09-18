from django.http import JsonResponse


def testing(request):
    return JsonResponse({"msg": "hello world"})
