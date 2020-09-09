import urllib2
from bs4 import BeautifulSoup

quote_page = 'https://smartlabel.hersheys.com/00034000314027-0012#ingredients'

page = urllib2.urlopen(quote_page)

name_box = soup.find(‘h1’, attrs={‘class’: ‘list-title’})

name = name_box.text.strip()
print name
