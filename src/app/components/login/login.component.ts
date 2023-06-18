import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  siteUsername: any;
  sitePassword: any;
  url = 'https://musteriapi.tesislerim.com/api/Account/login';

  constructor(
    private http: HttpClient,
    private router: Router,
    private configService: ConfigService
  ) {}
  ngOnInit(): void {}
  getUserInfos() {
    // HTML sayfasına kullanıcının yazdığı kullanıcı adı ve şifreyi burada alıp value değişkenlerine atıyoruz.
    // Bu şekilde gelen kullanıcı adı şifrenin doğruluk kontrolü sağlanabiliyor.
    const userNameValue = (<HTMLInputElement>(
      document.getElementById('exampleInputUsername1')
    )).value;
    const passwordValue = (<HTMLInputElement>(
      document.getElementById('exampleInputPassword1')
    )).value;

    {
      // Kullanıcı adı ve şifreyi kontrol et
      if (
        (userNameValue === 'admin' && passwordValue === '123456') ||
        (userNameValue === 'esenmusteri' && passwordValue === '123456') ||
        (userNameValue === 'sadullahcarias' && passwordValue === '123456') ||
        (userNameValue === 'gokmenmusteri' && passwordValue === '123456')
      ) {
        // Kullanıcı adı ve şifre doğru, giriş yap,
        // Siteden aldığı doğru kullanıcı adı ve şifreyi değişkenlere atıyoruz.
        // Sonrasında bu değişkenler ile aşağıda post request gönderilecek.
        this.siteUsername = userNameValue;
        this.sitePassword = passwordValue;
        this.postData();
      } else {
        alert('Geçersiz kullanıcı adı veya şifre.');
      }
    }
  }
  menu() {
    this.router.navigate(['menu/']);
  }

  postData() {
    const data = {
      sKullaniciAdi: this.siteUsername,
      sParola: this.sitePassword,
    }; // Göndermek istediğiniz veriyi burada belirtin

    this.configService.postRequest(this.url, data).subscribe(
      (response) => {
        console.log('İstek başarılı:');
        //console.log(response.isSuccess);
        //console.log(response.message);
        this.configService.saveToken(response.result);
        //console.log(this.configService.token)
        this.router.navigate(['admin/']);
        // İstek başarılı oldu, isteğin yanıtını burada işleyebilirsiniz
      },
      (error) => {
        console.error('İstek hatası:', error);
        // İstek sırasında hata oluştu, hatayı burada işleyebilirsiniz
      }
    );
  }
}

// API'ye POST isteği yapmak için bir fonksiyon
