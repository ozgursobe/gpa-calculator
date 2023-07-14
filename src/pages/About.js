import { useState } from "react"
import { FAQ } from "../components/FAQ"

export const About = () => {

    const [faq, setFAQ] = useState([
        {
            id : 0,
            question : "1- SPA nasıl hesaplanır ?",
            
            answer : <> 
            <p className="mt-3"> <span className="font-semibold">1- Her dersten aldığınız harf notlarını elde edin:</span>  Örneğin, Matematik dersinden BB, Tarih dersinden BA ve İngilizce dersinden AA aldınız. </p>

            <p className="mt-3">
            <span className="font-semibold"> 2- Derslerin kredi değerlerini belirleyin:</span> Her dersin kredi değerlerini öğrenin. Bu değerler genellikle dersin saat sayısı veya zorluk düzeyine göre belirlenen bir sayıdır. Örneğin, Matematik dersinin kredi değeri 3, Tarih dersinin kredi değeri 4 ve İngilizce dersinin kredi değeri 2 olsun.
            </p>

            <p className="mt-3">
            <span className="font-semibold">3- Ders notlarını kredi değerleriyle çarpın: </span> Her dersin final notunu, dersin kredi değeriyle çarparak ağırlıklı notunu bulun. Bu, dersin başarı düzeyine göre ağırlığını belirler. Örneğin, Matematik dersi için ağırlıklı not (BB)- 3 x 3 = 9, Tarih dersi için ağırlıklı not (BA)- 3.5 x 4 = 14 ve İngilizce dersi için ağırlıklı not (AA)- 4 x 2 = 8 olur.
            </p>

            <p className="mt-3">
            <span className="font-semibold">4- Tüm derslerin ağırlıklı notlarını toplayın:</span> Tüm derslerin ağırlıklı notlarını toplayarak yarıyıl boyunca aldığınız derslerin ağırlıklı toplamını elde edin. Bu, tüm derslerin başarı düzeyini bir araya getirir. Örneğin, 9 + 14 + 8 = 31 olur.</p>
            <p className="mt-3">
            <span className="font-semibold"> 5- Kredi toplamını hesaplayın:</span> Tüm derslerin kredi değerlerini toplayarak yarıyıl boyunca aldığınız derslerin kredi toplamını bulun. Örneğin, 3 + 4 + 2 = 9 olur.
            </p>
            <p className="mt-3">
            <span className="font-semibold"> 6- Ağırlıklı notları kredi toplamına bölün:</span> Elde ettiğiniz ağırlıklı toplamı, derslerin kredi toplamına bölerek <span className="text-red-500">yarıyıl ortalamasını (SPA)</span> hesaplayın. Bu, derslerin ağırlıklı notlarının genel kredilendirmeye oranlanmasıyla yapılır. Örneğin, 31 / 9 = 3.44 olur.
            </p>
             </>  ,

            active : false
        },
        {
            id : 1,
            question : "2- GPA nasıl hesaplanır ?",

            answer : <> 
            <p className="mt-3"> <span className="font-semibold">1- Her dönemdeki derslerin harf notlarını ve kredi değerlerini belirleyin:</span>  İlk adım, her dönemde aldığınız derslerin harf notlarını ve derslerin kredi değerlerini belirlemektir. Örneğin, 1. dönemde Matematik dersinden BB, Tarih dersinden AA ve İngilizce dersinden CB aldığınızı varsayalım. Ayrıca, her dersin kredi değerlerini de belirleyin. </p>

            <p className="mt-3">
            <span className="font-semibold"> 2- Her dersin ağırlıklı değerini hesaplayın:</span> Her bir dersin harf notunu, dersin kredi değeriyle çarpın ve ağırlıklı değerini bulun. Örneğin, Matematik dersinden aldığınız BB notunu dersin kredi değeriyle çarparak ağırlıklı değeri bulun. Benzer şekilde, diğer dersler için de ağırlıklı değerleri hesaplayın.
            </p>

            <p className="mt-3">
            <span className="font-semibold">3- Her dönemdeki toplam ağırlıklı değeri hesaplayın:</span> Her dersin ağırlıklı değerini toplayarak her dönem için toplam ağırlıklı değeri bulun.
            </p>

            <p className="mt-3">
            <span className="font-semibold">4- Her dönemdeki toplam kredi değerini hesaplayın:</span> Her dönemde aldığınız derslerin kredi değerlerini toplayarak her dönem için toplam kredi değerini bulun.
            </p>

            
            <p className="mt-3">
            <span className="font-semibold"> 5- Tüm dönemlerin ağırlıklı değerlerini (harf notu x kredi) toplayın:</span> Tüm dönemlerin ağırlıklı değerlerini toplayarak toplam ağırlıklı değerleri bulun.
            </p>
            <p className="mt-3">
            <span className="font-semibold"> 6- Tüm dönemlerin kredilerini toplayın:</span> Tüm dönemlerin kredi değerlerini toplayarak toplam krediyi bulun.
            </p>

            <p className="mt-3">
            <span className="font-semibold"> 7- Toplam ağırlıklı değeri toplam krediye bölün:</span> Toplam ağırlıklı değeri toplam kredi değerine böldüğünüzde <span className="text-red-500">GPA'yi</span> elde edersiniz.
            </p>
             </> 
            ,
            active : false
        },
        {
            id : 2,
            question : "3- Ağırlıklı ortalama nasıl hesaplanır ?",
            answer : <> 
            <p className="mt-3"> <span className="font-semibold">1- Her bir bileşenin notunu ve ağırlık yüzdesini belirleyin:</span>    İlk adım, dersin içeriğine göre her bir bileşenin (sınavlar, quizler, ödevler vb.) aldığınız notlarını ve ders içindeki ağırlık yüzdelerini belirlemektir. Örneğin, sınavlar için %50, quizler için %30 ve ödevler için %20 ağırlık verildiğini varsayalım. </p>

            <p className="mt-3">
            <span className="font-semibold"> 2- Her bileşenin ağırlıklı değerini hesaplayın:</span> Her bir bileşenin notunu, ağırlık yüzdesiyle çarparak ağırlıklı değerlerini bulun. Örneğin, sınavlardan aldığınız notun ağırlıklı değeri, sınav notu x %50 olur. Benzer şekilde, quizler ve ödevler için de ağırlıklı değerleri hesaplayın.
            </p>

            <p className="mt-3">
            <span className="font-semibold">3- Tüm bileşenlerin ağırlıklı değerlerini toplayın: </span> Her bileşenin ağırlıklı değerini bulduktan sonra, tüm bileşenlerin ağırlıklı değerlerini toplayın. Bu, dersin <span className="text-red-500">toplam ağırlıklı notunu</span> verecektir.
            </p>

            <p className="mt-3">
            <span className="font-semibold ml-1">Not: Toplam ağırlığı kontrol edin:</span> Ağırlık yüzdelerinin toplamının %100 olduğundan emin olun. Eğer toplam ağırlık yüzdesi %100'den farklı ise, ağırlıkları yeniden gözden geçirin ve doğru olduğundan emin olun.</p>
           
             </>  ,
            active : false
        },

    ])


    return (
        <div className=" my-[70px] " >
            <h3 className="flex justify-center text-xl mx-auto ">Nasıl Hesaplanır</h3>

            <div className=" mt-8 w-[330px] sm:w-[600px] md:w-[700px] lg:w-[800px] mx-auto ">
               
               { faq.map( item => (
                   <FAQ item={ item } faq = { faq } setFAQ = { setFAQ } key = { item.id } /> 
                )) }
             

             
            </div>

        </div>
    )
}