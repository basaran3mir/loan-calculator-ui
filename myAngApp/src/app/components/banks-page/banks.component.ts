import { Component, OnInit } from '@angular/core';
import { BankStatic } from 'src/app/models/bank-static';
import { DataService } from 'src/app/services/cc-data-service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {

  bankImgSrc: string = '';
  bankName: string = '';
  bankHomePage: string = '';
  bankPhoneNum: string = ''; 
  bankBeCusPage: string = '';
  bankAboutText: string = '';

  bankArray: BankStatic[] = []; 

  ngOnInit() {
    this.addBank(
      "assets/images/bank-logos/vakifbank-logo.png",
      "Vakıfbank",
      "https://www.vakifbank.com.tr/",
      "0850 222 07 24",
      "https://www.vakifbank.com.tr/Default.aspx?pageID=3998",
      "1954 yılında, vakıf kaynaklarını ekonomik kalkınmanın ihtiyaçları doğrultusunda en iyi biçimde değerlendirmek amacıyla kurulan VakıfBank, o günden bu yana çağdaş bankacılık yöntemleri ve uygulamalarıyla Türkiye’nin tasarruf düzeyinin gelişim sürecine katkıda bulunmaktadır. VakıfBank; “Güçlü Türkiye’nin Lider Bankası” olma vizyonu doğrultusunda, vakıf kültüründen aldığı güçle, kendisine emanet edilen varlık ve değerleri etkin ve verimli yöneterek müşteriler, çalışanlar, hissedarlar ve topluma kattığı değerleri sürekli artırma misyonuyla hareket etmektedir.",
      "https://www.vakifbank.com.tr/hakkimizda.aspx?pageID=182"
    )
    this.addBank(
      "assets/images/bank-logos/akbank-logo.png",
      "Akbank",
      "http://www.akbank.com.tr",
      "0850 222 25 25",
      "https://www.akbank.com/tr-tr/hizmetler/Sayfalar/akbankli-ol.aspx",
      "Akbank Özel Bankacılık olarak, teknolojinin ve dijital bankacılığın sağladığı olanakları en verimli şekilde kullanıyoruz. Müşterilerimizin yatırım ürünlerine ulaşabilecekleri, şubeye gitmeden sözleşmelerini onaylayarak birçok işlemi anında gerçekleştirebilecekleri teknolojik altyapılar oluşturarak, bu yenilikleri dijital kanallarımız olan İnternet ve Mobil Şubelerimizden de sunuyoruz.",
      "https://www.akbank.com/tr-tr/hizmetler/Sayfalar/Hakkimizda.aspx"
    )
    this.addBank(
      "assets/images/bank-logos/denizbank-logo.png",
      "Denizbank",
      "http://www.denizbank.com",
      "0850 222 08 00",
      "https://www.denizbank.com/denizbank-musterisi-olmak-istiyorum",
      "DenizBank, 1997 yılında bir bankacılık lisansı olarak Zorlu Holding tarafından Özelleştirme İdaresi’nde satın alınarak yolculuğuna başlamıştır. 25 yıllık kısa tarihçesine üç hissedar değişimi ve bir halka arz sığdıran Banka; Ekim 2006’da Avrupa’nın önde gelen finans gruplarından Dexia bünyesine katılmasının ardından, Rusya’nın Türkiye’ye bir seferde gerçekleştirdiği en büyük yatırıma konu olarak, 28 Eylül 2012 itibarıyla Avrupa’nın en büyük bankalarından Sberbank çatısı altında hizmet vermeye başlamıştır. Banka’nın payları son olarak 31 Temmuz 2019 itibarıyla, MENAT Bölgesi’nin lider bankacılık grubu Emirates NBD’ye devrolmuştur.",
      "https://www.denizbank.com/hakkimizda"
    )
    this.addBank(
      "assets/images/bank-logos/yapikredi-logo.png",
      "Yapıkredi Bankası",
      "https://www.yapikredi.com.tr/",
      "0850 222 04 44",
      "https://www.yapikredi.com.tr/banka-hesabi-ac",
      "Türkiye finans sektörünün iki güçlü ve köklü kurumu olan Yapı ve Kredi Bankası A.Ş. ve Koçbank A.Ş.'nin güçlerini, tecrübelerini ve kaynaklarını bir araya getirerek daha iyisini sunmak için yarattığı birliktelikle yeni oluşumunu 2006 yılında tamamlayan Yapı Kredi, bugün her iki kurumun tarihini ve ortak değerlerini içeren bir finans devi haline gelmiştir.",
      "https://www.yapikredi.com.tr/yapi-kredi-hakkinda/"
    )
    this.addBank(
      "assets/images/bank-logos/ziraat-logo.png",
      "Ziraat Bankası",
      "https://www.ziraatbank.com.tr/tr",
      "0850 220 00 00",
      "https://www.ziraatbank.com.tr/tr/bankamiz/basin-odasi/ziraatten-yenilikler/musterimiz-olun",
      "19. yüzyılın ilk yarısında Osmanlı İmparatorluğu'nda, ticaret ve finansmanda batılı modellerin benimsenmesiyle birlikte, yabancı bankalar ülke toprakları içinde faaliyet göstermeye başlamıştı. O dönemlerde ülkede henüz, ulusal niteliğe sahip bir bankacılık sisteminin kurulması için yeterli sermaye birikimi oluşmamıştı ve bir kaynak oluşturma aracı olarak milli bankaların varlığından söz edilemiyordu.",
      "https://www.ziraatbank.com.tr/tr/bankamiz/hakkimizda/bankamiz-tarihcesi"
    )
    this.addBank(
      "assets/images/bank-logos/garanti-logo.png",
      "Garanti Bankası",
      "https://www.garantibbva.com.tr/",
      "0850 222 03 33",
      "https://www.garantibbva.com.tr/dijital-bankacilik/musterimiz-olun",
      "1946 yılında Ankara’da kurulan Garanti Bankası, 31 Mart 2019 tarihi itibarıyla 423 milyar Türk Lirası’nı aşan konsolide aktif büyüklüğü ile Türkiye'nin en büyük ikinci özel bankası konumunda. Garanti 2010 yılından bu yana ana hissedarı BBVA ile yaratılan sinerjiyle Türkiye ekonomisine değer katıyor. Banka, Haziran 2019 tarihinden itibaren faaliyetlerini “Garanti BBVA” markasıyla sürdürüyor.",
      "https://www.garantibbva.com.tr/hakkimizda"
    )
    this.addBank(
      "assets/images/bank-logos/halkbank-logo.png",
      "Halk Bankası",
      "https://www.halkbank.com.tr/",
      "0850 222 04 00",
      "https://www.halkbank.com.tr/tr/dijital-bankacilik/mobil-bankacilik/musteri-olmak-istiyorum.html",
      "1. Dünya Savaşı, Kurtuluş Savaşı ve 1929 Dünya Ekonomik Buhranı; ülkemizi mal darlığı, hayat pahalılığı ve yüksek faiz baskısı altında ağır ekonomik şartların yaşandığı bir ortama sürükler. Öncelikle dengeli bir toplum yapısının gereğinin bilincinde olan genç Türkiye Cumhuriyeti, küçük esnaf ve sanatkârların desteklenmesini ve halk bankacılığının geliştirilmesini bu doğrultudaki hedefler olarak benimser. Ancak, cumhuriyetin ilk yıllarında sermaye birikimi, üretim alanlarının kıtlığı, özel sektörün yetersizliği nedeniyle yaşanan ekonomik güçlükler, esnaf-sanatkâr ve küçük meslek sahibini teşvik edici kredi kurumlarının ortaya çıkışını engeller.",
      "https://www.halkbank.com.tr/tr/bankamiz.html"
    )
    this.addBank(
      "assets/images/bank-logos/isbanka-logo.png",
      "İş Bankası",
      "https://www.isbank.com.tr/",
      "0850 724 07 24",
      "https://www.isbank.com.tr/musteri-olmak-istiyorum",
      "Kurtuluş Savaşı sona ermiş, Cumhuriyet ilan edilmişti. Şimdi, yeni Türkiye devletini, aşılması gereken ekonomik ve sosyal sorunlar bekliyordu. Bu dönemde tasarrufu teşvik ederek toplanacak fonlarla bütün ekonomik faaliyet kollarını finanse edebilecek, gerektiğinde çeşitli alanlarda sanayileşme hareketinin başlatılmasına kendi kaynaklarıyla katılabilecek milli bir kuruluşun doğması ve milli bankacılık sisteminin oluşturulması ihtiyacı derin bir şekilde hissediliyordu.",
      "https://www.isbank.com.tr/bankamizi-taniyin/hakkimizda"
    )
  }

  addBank(imgSrc: string, name: string, homePage: string, phoneNum: string, beCusPage: string, aboutText: string, abputPage: string) {
    let newBank: BankStatic = {
      bankImgSrc: imgSrc,
      bankName: name,
      bankHomePage: homePage,
      bankPhoneNum: phoneNum,
      bankBeCusPage: beCusPage,
      bankAboutText: aboutText,
      bankAboutPage: abputPage
    };
    this.bankArray.push(newBank);
  }

}
