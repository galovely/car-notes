import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vehicles',
  templateUrl: './vehicles.component.html'
})
export class VehiclesComponent implements OnInit {
  public data : any
 
  constructor() {   }

  ngOnInit() {
    this.data = [{'vin':'1H6T87DE23JOV322', 'ssid': 'Bentley Wifi', 'sn' :'78EF2W33IKJ', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV321', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33OLN', 'status':'ONLINE' },
    {'vin':'1H6T87DE23JOV566', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33YHW', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV098', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33HCY', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV323', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33APL', 'status':'ONLINE' },
    {'vin':'1H6T87DE23JOV432', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33CWV', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV777', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33MLO', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV898', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33PLL', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV095', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33DQW', 'status':'ONLINE' },
    {'vin':'1H6T87DE23JOV567', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33XWD', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JO1234', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33CBT', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV670', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33MYU', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV417', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33KLZ', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV094', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33XCE', 'status':'ONLINE' },
    {'vin':'1H6T87DE23JOV864', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33NTI', 'status':'ONLINE' },
    {'vin':'1H6T87DE23JOV784', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33LSD', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV300', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33MRT', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV355', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33LDQ', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV348', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33YHV', 'status':'ONLINE' },
    {'vin':'1H6T87DE23JOV111', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33PIE', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV090', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33VXY', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV888', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33MMK', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV794', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33DFH', 'status':'ONLINE' },
    {'vin':'1H6T87DE23JOV722', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33ALR', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV091', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33XIU', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV232', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33PLQ', 'status':'ONLINE' },
    {'vin':'1H6T87DE23JOV555', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33DSI', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV775', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33KGE', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV900', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33PTD', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV800', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33FVM', 'status':'ONLINE' },
    {'vin':'1H6T87DE23JOV200', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33OML', 'status':'ONLINE' },
    {'vin':'1H6T87DE23JOV700', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33PWT', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV411', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33QAZ', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV601', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33WSX', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV703', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33EDC', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV853', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33RFV', 'status':'ONLINE' },
    {'vin':'1H6T87DE23JOV207', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33TGB', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV871', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33YHN', 'status':'OFFLINE' },
    {'vin':'1H6T87DE23JOV066', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33UJM', 'status':'ONLINE' },
    {'vin':'1H6T87DE23JOV337', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33ILO', 'status':'ONLINE' },
    {'vin':'1H6T87DE23JOV129', 'ssid' :'Bentley Wifi', 'sn' :'78EF2W33PLM', 'status':'ONLINE' }
   ]
  }
}