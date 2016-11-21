#!/usr/bin/python
#Debe devolver json

import urllib2
import socket
import geocoder
import subprocess
import requests
import json

hostList = ['facebook.com', 'google.com', 'gmail.com', 'noticierodigital.com']
g = geocoder.ipinfo('me')
print(g.ip)
print(g.latlng)

'''
output = subprocess.check_output(['airport','-I'])
output = output.splitlines()
print len(output)
for i in range (0, len(output)):
	output[i] = output[i].strip()

#print output

for i in output:
	if "BSSID:" in i:
		print(i)
'''
r = requests.get("http://192.168.2.10:3000/json/top")
data=r.json()
print(data["domain"])

#print (output.index("BSSID: 40:65:a3:62:6b:26"))


for i in hostList:
    print i
    addr = socket.gethostbyname(i)
    print addr
    # urllib2.urlopen("http://127.0.0.1:3000/dig/lsdzzzzas.tv/cat").read()
    try:
        urllib2.urlopen("http://192.168.2.10:3000/dig/" + i + "/" + addr).read()
    except urllib2.URLError as e:
        print e.reason
