import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  apiData: any;
  adminApiDataDaily: any;
  adminApiDataMonthly:any;
  adminApiDataAnnual:any;
  url: string =
    'https://musteriapi.tesislerim.com/api/BetonHareket/beton/hareket/getall';
  getUrl: string = 'https://musteriapi.tesislerim.com/api/Home/init';

  tarihDaily: any = '';
  tarihMonthly: any = '';
  tarihAnnual: any = '';
  constructor(
    private configService: ConfigService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.configService
      .getRequest(this.getUrl)
      .pipe(
        tap((response) => {
          if (response) {
            this.apiData = response;
            //console.log(this.apiData);
            const tarihNesnesi = new Date(
              this.apiData.GeneralSettings.dtGunDonumuSaati
            );
            const saatKismi = tarihNesnesi.toLocaleTimeString('tr-TR', {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            });
            const [saat, dakika, saniye] = saatKismi.split(':');

            const saatNum = parseInt(saat, 10);
            const dakikaNum = parseInt(dakika, 10);
            const saniyeNum = parseInt(saniye, 10);

            if (this.apiData.GeneralSettings.isActiveCustomerDaily == true) {
              const dtBaslangicDaily = new Date();
              const dtBitisDaily = new Date();
              const dtBaslangicPerDaily = new Date();
              const dtBitisPerDaily = new Date();

              dtBaslangicDaily.setHours(0o0);
              dtBaslangicDaily.setMinutes(0o0);
              dtBaslangicDaily.setSeconds(0o0);

              dtBitisDaily.setDate(dtBaslangicDaily.getDate() + 1);
              dtBitisDaily.setHours(0o0);
              dtBitisDaily.setMinutes(0o0);
              dtBitisDaily.setSeconds(0o0);

              dtBaslangicPerDaily.setDate(dtBaslangicDaily.getDate());
              dtBaslangicPerDaily.setHours(saatNum, dakikaNum, saniyeNum);

              dtBitisPerDaily.setDate(dtBitisDaily.getDate());
              dtBitisPerDaily.setHours(saatNum, dakikaNum, saniyeNum);
              //console.log(dtBaslangic , "sa" , dtBaslangicPerDaily)
              this.tarihDaily = {
                dtUretimBitBaslangic:
                  formatDateTimeToCustomFormat(dtBaslangicDaily).toString(),
                dtUretimBitBitis:
                  formatDateTimeToCustomFormat(dtBitisDaily).toString(),
                dtBaslangicPeriod:
                  formatDateTimeToCustomFormat(dtBaslangicPerDaily).toString(),
                dtBitisPeriod:
                  formatDateTimeToCustomFormat(dtBitisPerDaily).toString(),
              };
              this.configService.serviceDateDaily = this.tarihDaily;
              this.postDataDaily();
              // console.log(dtBaslangic, 'dtbaslangic');
              // console.log(dtBitis, 'dtbitis');
              // console.log(dtBaslangicPerDaily, 'dtbaslangicperiod');
              // console.log(dtBitisPerDaily, 'dtbitisperiod');
              //console.log(dtBaslangic);
              //console.log("sa")
              // tarihi burda bulucaksın sonra tarih diye bir dataya eşitliceksin
              // this.postData(this.tarih)
              //console.log(this.tarihDaily);
            }
            if (this.apiData.GeneralSettings.isActiveCustomerMonthly == true) {
              const dtBaslangicMonthly = new Date();
              const dtBitisMonthly = new Date();
              const dtBaslangicPerMonthly = new Date();
              const dtBitisPerMonthly = new Date();
              dtBaslangicMonthly.setDate(0o1);
              dtBaslangicMonthly.setHours(0o0);
              dtBaslangicMonthly.setMinutes(0o0);
              dtBaslangicMonthly.setSeconds(0o0);

              dtBitisMonthly.setHours(0o0);
              dtBitisMonthly.setMinutes(0o0);
              dtBitisMonthly.setSeconds(0o0);

              dtBaslangicPerMonthly.setDate(dtBaslangicMonthly.getDate());
              dtBaslangicPerMonthly.setHours(saatNum, dakikaNum, saniyeNum);

              dtBitisPerMonthly.setDate(dtBitisMonthly.getDate());
              dtBitisPerMonthly.setHours(saatNum, dakikaNum, saniyeNum);
              // console.log(dtBaslangicMonthly, 'dtbaslangic');
              // console.log(dtBitisMonthly, 'dtbitis');
              // console.log(dtBaslangicPerMonthly, 'dtbaslangicperiod');
              // console.log(dtBitisPerMonthly, 'dtbitisperiod');
              this.tarihMonthly = {
                dtUretimBitBaslangic:
                  formatDateTimeToCustomFormat(dtBaslangicMonthly).toString(),
                dtUretimBitBitis:
                  formatDateTimeToCustomFormat(dtBitisMonthly).toString(),
                dtBaslangicPeriod: formatDateTimeToCustomFormat(
                  dtBaslangicPerMonthly
                ).toString(),
                dtBitisPeriod:
                  formatDateTimeToCustomFormat(dtBitisPerMonthly).toString(),
              };
              this.configService.serviceDateMonthly = this.tarihMonthly;
              this.postDataMonthly();
              // this.postData(this.tarih)
            }
            if (this.apiData.GeneralSettings.isActiveCustomerAnnual == true) {
              const dtBaslangicAnnual = new Date();
              const dtBitisAnnual = new Date();
              const dtBaslangicPerAnnual = new Date();
              const dtBitisPerAnnual = new Date();

              dtBaslangicAnnual.setDate(0o1);
              dtBaslangicAnnual.setMonth(0o0);
              dtBaslangicAnnual.setHours(0o0);
              dtBaslangicAnnual.setMinutes(0o0);
              dtBaslangicAnnual.setSeconds(0o0);

              dtBitisAnnual.setHours(0o0);
              dtBitisAnnual.setMinutes(0o0);
              dtBitisAnnual.setSeconds(0o0);

              dtBaslangicPerAnnual.setMonth(
                dtBaslangicAnnual.getMonth(),
                dtBaslangicAnnual.getDate()
              );
              dtBaslangicPerAnnual.setHours(saatNum, dakikaNum, saniyeNum);

              dtBitisPerAnnual.setHours(saatNum, dakikaNum, saniyeNum);
              // console.log(dtBaslangicAnnual, 'dtbaslangic');
              // console.log(dtBitisAnnual, 'dtbitis');
              // console.log(dtBaslangicPerAnnual, 'dtbaslangicperiod');
              // console.log(dtBitisPerAnnual, 'dtbitisperiod');

              this.tarihAnnual = {
                dtUretimBitBaslangic:
                  formatDateTimeToCustomFormat(dtBaslangicAnnual).toString(),
                dtUretimBitBitis:
                  formatDateTimeToCustomFormat(dtBitisAnnual).toString(),
                dtBaslangicPeriod:
                  formatDateTimeToCustomFormat(dtBaslangicPerAnnual).toString(),
                dtBitisPeriod:
                  formatDateTimeToCustomFormat(dtBitisPerAnnual).toString(),
              };
              this.configService.serviceDateAnnual = this.tarihAnnual;
              console.log(this.tarihAnnual);
              this.postDataAnnual();
            }
          }
        })
      )
      .subscribe();

    // this.getAdminData()
  }
  postDataDaily() {
    //console.log(this.url)
    this.configService
      .postRequest(this.url, this.tarihDaily)
      .subscribe(
        (res) => {
          console.log('İstek Başarılı 1');
          //console.log(res);
          this.adminApiDataDaily = res;
          console.log(this.adminApiDataDaily);
        },
        (error) => {
          console.error('İstek hatası:', error);
        }
      );
  }
  postDataMonthly() {
    //console.log(this.url)
    this.configService
      .postRequest(this.url, this.tarihMonthly)
      .subscribe(
        (res) => {
          console.log('İstek Başarılı 2');
          //console.log(res);
          this.adminApiDataMonthly = res;
          console.log(this.adminApiDataMonthly);
        },
        (error) => {
          console.error('İstek hatası:', error);
        }
      );
  }
  postDataAnnual() {
    //console.log(this.url)
    this.configService
      .postRequest(this.url, this.tarihAnnual)
      .subscribe(
        (res) => {
          console.log('İstek Başarılı 3');
          //console.log(res);
          this.adminApiDataAnnual = res;
          console.log(this.adminApiDataAnnual);
        },
        (error) => {
          console.error('İstek hatası:', error);
        }
      );
  }
}
function formatDateTimeToCustomFormat(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}
