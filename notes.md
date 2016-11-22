# NOTES

Terms as

Walled Garden

Hotspot

Captive Portal

DNS REDIRECT

DNS HIJACK

curl --user-agent --referer -L

diff -U 0 g.txt g2.txt | grep ^@ | wc -l

**CHAP VS PAP **

CHAP does not have these deficiencies. With CHAP, the authenticator (i.e. the server) sends a randomly generated ``challenge'' string to the client, along with its hostname. The client uses the hostname to look up the appropriate secret, combines it with the challenge, and encrypts the string using a one-way hashing function. The result is returned to the server along with the client's hostname. The server now performs the same computation, and acknowledges the client if it arrives at the same result.

## DIAGRAMA

__Usar formato de Tunneling for Transparency:__ , muy sencillo

### 1. ABSTRACT

Pequeno briefing de lo que trata el trabajo y lo que se va a hacer, revisar el proposal ?

### 2. INTRODUCTION

Explicacion

### 3. Background

## TOOLS

+ Winbox for Mac - http://joshaven.com/resources/tools/winbox-for-mac/

## REFERENCES

+ Tunneling for Transparency: A Large-Scale Analysis of End-to-End Violations in the Internet. David Choffnes, Alan Misove, Taejoong Chung

+ Wireless Hotspots: Current Challenges and Future Directions, Anand Balachandran, Geoffrey M. Voelker, Paramvir Bahl

+ Authenticating Ubiquitous Services: A Study of Wireless Hotspot Access, Tim Kindberg, Chris Bevan, Eamonn O’Neill, James Mitchell, Jim Grimmett, Dawn Woodgate

+ Wireless hotspots: petri dish of wireless security, Bruce Potter

+ Measuring Trust in Wi-Fi Hotspots, Tim Kindberg, Eamonn O’Neill, Chris Bevan, Vassilis Kostakos, Danaë Stanton Fraser, Tim Jay

+ Security Analysis on Public Wireless Internet Service Models, Kenji Ohira, Ying Huang, Yasuo Okabe, Kenji Fujikawa, Motonori Nakamura 

http://searchmobilecomputing.techtarget.com/definition/captive-portal

+ https://en.wikipedia.org/wiki/%C3%8Ele_Sans_Fil

## NEWS

+ “Free” Wi-Fi from Xfinity and AT&T also frees you to be hacked - http://arstechnica.com/security/2014/06/free-wi-fi-from-xfinity-and-att-also-frees-you-to-be-hacked/

+ Why I don’t use Airplane WiFi - https://blog.joemanna.com/dont-use-airplane-wifi-security/

+ Public Wi-Fi hotspots – know the risks - http://www.welivesecurity.com/2014/11/14/public-wi-fi-hotspots-know-risks/

+ If You Are Using Hola VPN, You Need To Know This (Hint: Botnet And Bandwidth) - http://www.techtimes.com/articles/56706/20150530/if-you-are-using-hola-vpn-you-need-to-know-this-hint-botnet-and-bandwidth.htm

+ How to stay safe at a public Wi-Fi hotspot
 - http://arstechnica.com/security/2011/01/stay-safe-at-a-public-wi-fi-hotspot/

+ GOP delegates suckered into connecting to insecure Wi-Fi hotspots - http://www.theregister.co.uk/2016/07/21/gop_wifi_privacy_fail/

+ http://o.canada.com/business/how-long-does-it-take-to-get-kicked-out-of-a-coffee-shop-for-mooching-off-its-free-wi-fi


## TUTORIALS

+ http://www.tldp.org/LDP/nag/node120.html

+ http://www.uobabylon.edu.iq/eprints/publication_4_28658_1412.pdf

+ Wifi Exposed

+ http://adios-hola.org/

+ http://www.mikrotik.com/testdocs/ros/3.0/pnp/hotspot.php

+ https://en.wikipedia.org/wiki/Password_Authentication_Protocol

+ http://wiki.mikrotik.com/wiki/Manual:IP/Hotspot/Walled_Garden

+ http://www.binaryheartbeat.net/2014/02/setting-up-mikrotik-hotspot-with.html

