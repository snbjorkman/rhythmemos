from django.shortcuts import render
from django.conf  import settings
import json
import os
from django.contrib.auth.decorators import login_required
from.models import Memo
from django.http import JsonResponse
from django.forms.models import model_to_dict

# Load manifest when server launches
MANIFEST = {}
if not settings.DEBUG:
    f = open(f"{settings.BASE_DIR}/core/static/manifest.json")
    MANIFEST = json.load(f)

# Create your views here.
@login_required
def index(req):
    context = {
        "asset_url": os.environ.get("ASSET_URL", ""),
        "debug": settings.DEBUG,
        "manifest": MANIFEST,
        "js_file": "" if settings.DEBUG else MANIFEST["src/main.ts"]["file"],
        "css_file": "" if settings.DEBUG else MANIFEST["src/main.ts"]["css"][0]
    }
    return render(req, "core/index.html", context)


@login_required
def saveMemo(req):
    if req.method == "POST":

        body = json.loads(req.body)
        memo = Memo(
            name = body["memoName"],
            length = body["currentLength"]
        )

        memo.save()

        return JsonResponse({"memo": model_to_dict(memo)})
    


    memos = [model_to_dict(memo) for memo in Memo.objects.all()]
    return JsonResponse({"memos": memos})