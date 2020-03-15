---
title: My Raspberry Pi setup
date: "2020-03-15T13:51:00+01:00"
description: Equipments + NAS + DSN Filters + Switch Lan Play
categories:
  - engineering
published: true
kind: post
cover: ./glen-carrie-GMsYzwFAH_k-unsplash.jpg
coverAuthor: Glen Carrie
coverOriginalUrl: https://unsplash.com/photos/GMsYzwFAH_k
---

## Equipments

Below is the minimal equipment that you will need for setting up your Raspberry Pi.

- Raspberry Pi
- Micro SD Card (8GB+) if you’re using a Raspberry Pi 2, 3 or B+
- Ethernet Cord (or Wifi dongle)
- USB Cable to power the Raspberry Pi

## NAS (Network-attached storage)

### Auto-mount

> TODO

### Install Samba

Samba is a re-implementation of the SMB (Server Message Block) networking protocol and allows Linux computers to integrate into Microsoft’s active directory environments seamlessly.

```shell
sudo apt-get install samba samba-common-bin
```

### Configure Samba

Add at the end the Samba configuration:

```ini:title=/etc/samba/smb.conf
[usb1]
path = /media/usb1
writeable = yes
guest ok = yes
create mask = 0777
directory mask = 0777
force user = pi

[usb2]
path = /media/usb2
writeable = yes
guest ok = yes
create mask = 0777
directory mask = 0777
force user = pi

[usb3]
path = /media/usb3
writeable = yes
guest ok = yes
create mask = 0777
directory mask = 0777
force user = pi

[usb4]
path = /media/usb4
writeable = yes
guest ok = yes
create mask = 0777
directory mask = 0777
force user = pi
```

_Source: https://pimylifeup.com/raspberry-pi-samba/_

## DNS Filter

```shell
wget -O basic-install.sh https://install.pi-hole.net
sudo bash basic-install.sh
```

_Source: https://pi-hole.net_

## Switch Lan Play

```shell
sudo apt-get install git libpcap0.8-dev git gcc g++ cmake screen

git clone https://github.com/spacemeowx2/switch-lan-play.git

mkdir -p switch-lan-play/build
cd switch-lan-play/build
cmake -DCMAKE_BUILD_TYPE=Release ..
make

screen -s /bin/bash -dmS lanplay sudo /home/pi/switch-lan-play/build/src/lan-play --relay-server-addr switch.lan-play.com:11451 --netif eth0
```

### Autostart the client at boot

Edit your crontab configuration:

```shell
crontab -e
```

Add the following config:

```shell
@reboot screen -s /bin/bash -dmS lanplay sudo /home/pi/switch-lan-play/build/src/lan-play --relay-server-addr switch.lan-play.com:11451 --netif eth0
```

_Sources: https://www.lan-play.com, https://github.com/spacemeowx2/switch-lan-play#build_
