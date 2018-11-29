from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views import generic
import json
from .models import Choice, Question,Producto
from .forms import NameForm

from bs4 import BeautifulSoup

soup = BeautifulSoup("<html><p>This is <b>invalid HTML</p></html>", "html.parser")

class index1(generic.ListView):
    template_name='polls/sop.html'
    context_object_name = 'product_list'
    def get_queryset(self):
        pag = ['https://www.linio.com.pe/c/computacion/portatiles','https://www.linio.com.pe/c/celulares-y-tablets/tablets',
               'https://www.linio.com.pe/c/tv-audio-y-video/tv-y-video',
               'https://www.linio.com.pe/c/celulares-y-tablets/celulares-y-smartphones']
        cat = ['Laptops','Tablets','Televisores','Celulares']
        for i in range (0,len(pag)):
            req = requests.get(pag[i])
            soup = BeautifulSoup(req.text, "html.parser")
            #soup = BeautifulSoup(req.text, "lxml")
            list = []

            prod = soup.findAll('div', attrs = {'class': 'catalogue-product row'})
            for name_box in prod:
                # data = soup.find('script',attrs = {'type':'text/javascript'})
                url ="https://www.linio.com.pe"+ name_box.find('a')['href']

                name = name_box.find('meta', attrs={'itemprop': 'name'})['content']
                model = name_box.find('meta', attrs={'itemprop': 'model'})['content']
                image ="https:"+ name_box.find('meta', attrs={'itemprop': 'image'})['content']
                price = name_box.find('div', attrs={'class': 'detail-container'}).find('meta', attrs={'itemprop': 'price'})[
                    'content']
                # marca = name_box.find('div' ,attrs={'class':'detail-container'})
                # some JSON:
                pdct = {"name": name, "model": model, "image": image, "price": float(price),'url':url}
                p = Producto(nombre = name, precio=price,url = url ,image = image, modelo = "",
                             marca ="",direccion = "",categoria =cat[i],tienda = "Linio",url_tienda="https://www.linio.com.pe")
                p.save()
                list.append(pdct)

        return Producto.objects.all()



class ProductoView(generic.ListView):
    template_name='polls/product.html'
    context_object_name = 'product_list'
    def get_queryset(self):
        #return Producto.objects.all()
        return Producto.objects.order_by('id')

def precio(request):
    template_name = 'polls/product.html'
    context_object_name = 'product_list'

    def get_queryset(self):
        # return Producto.objects.all()
        return Producto.objects.filter(categoria="Laptops").order_by('price_value')[:5]

    return HttpResponse("Hello, world. You're at the polls index.")


class IndexView(generic.ListView):
    template_name = 'polls/index.html'
    context_object_name = 'latest_question_list'

    def get_queryset(self):
        """Return the last five published questions."""
        return Question.objects.order_by('-pub_date')[:5]


class LoginView(generic.ListView):
    template_name = 'polls/login.html'
    context_object_name = 'latest_question_list'

    def get_queryset(self):
        """Return the last five published questions."""
        return Question.objects.order_by('-pub_date')[:5]

class MapaView(generic.ListView):
    template_name = 'polls/geolocalizacion.html'
    context_object_name = 'latest_question_list'

    def get_queryset(self):
        """Return the last five published questions."""
        return Question.objects.order_by('-pub_date')[:5]


def detail(request, producto_id):
    producto = get_object_or_404(Producto, pk=producto_id)
    return render(request, 'polls/detail.html', {'product': producto})

def precio(request, producto_precio):
    producto = get_object_or_404(Producto, pk=producto_precio)
    return render(request, 'polls/detail.html', {'product': producto})

def login(request):
    return render(request, 'polls/login.html', {'product': 'producto'})

"""    
def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    context = {'latest_question_list': latest_question_list}
    return render(request, 'polls/index.html', context)
#def index(request):
#    return HttpResponse("Hello, world. You're at the polls index.")

def results(request, question_id):
     question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/results.html', {'question': question})
"""

def get_name(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = NameForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            return HttpResponseRedirect('/thanks/')

    # if a GET (or any other method) we'll create a blank form
    else:
        form = NameForm()

    return render(request, 'polls:results', {'form': form})