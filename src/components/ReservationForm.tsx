import React, { useState } from 'react';

const ReservationForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formsubmit.co/info@boii.com.tr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.currentTarget.reset();
      } else {
        alert('Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <div className="text-green-500 text-6xl mb-4">✓</div>
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            Teşekkürler!
          </h3>
          <p className="text-gray-600">
            Rezervasyon talebiniz alındı. En kısa sürede size dönüş yapacağız.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 bg-warm-gray-800 text-white px-6 py-2 rounded hover:bg-warm-gray-700 transition-colors"
          >
            Yeni Rezervasyon
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-serif font-medium text-warm-gray-800 mb-6 text-center">
        Rezervasyon
      </h2>
      
      <form 
        action="https://formsubmit.co/info@boii.com.tr" 
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {/* Hidden fields */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Yeni Rezervasyon Talebi" />
        
        {/* Name field */}
        <div>
          <label htmlFor="isim" className="block text-sm font-medium text-warm-gray-700 mb-1">
            Ad Soyad *
          </label>
          <input
            type="text"
            id="isim"
            name="isim"
            required
            className="w-full px-3 py-2 border border-warm-gray-300 focus:border-warm-gray-500 focus:outline-none rounded"
            placeholder="Adınız ve soyadınız"
          />
        </div>

        {/* Email field */}
        <div>
          <label htmlFor="eposta" className="block text-sm font-medium text-warm-gray-700 mb-1">
            E-posta *
          </label>
          <input
            type="email"
            id="eposta"
            name="eposta"
            required
            className="w-full px-3 py-2 border border-warm-gray-300 focus:border-warm-gray-500 focus:outline-none rounded"
            placeholder="ornek@email.com"
          />
        </div>

        {/* Phone field */}
        <div>
          <label htmlFor="telefon" className="block text-sm font-medium text-warm-gray-700 mb-1">
            Telefon *
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            required
            className="w-full px-3 py-2 border border-warm-gray-300 focus:border-warm-gray-500 focus:outline-none rounded"
            placeholder="05XX XXX XX XX"
          />
        </div>

        {/* Number of guests field */}
        <div>
          <label htmlFor="kisi_sayisi" className="block text-sm font-medium text-warm-gray-700 mb-1">
            Kişi Sayısı *
          </label>
          <input
            type="text"
            id="kisi_sayisi"
            name="kisi_sayisi"
            required
            className="w-full px-3 py-2 border border-warm-gray-300 focus:border-warm-gray-500 focus:outline-none rounded"
            placeholder="Örn: 2"
          />
        </div>

        {/* Date and time field */}
        <div>
          <label htmlFor="tarih_saat" className="block text-sm font-medium text-warm-gray-700 mb-1">
            Tarih ve Saat *
          </label>
          <input
            type="datetime-local"
            id="tarih_saat"
            name="tarih_saat"
            required
            className="w-full px-3 py-2 border border-warm-gray-300 focus:border-warm-gray-500 focus:outline-none rounded"
          />
        </div>

        {/* Notes field */}
        <div>
          <label htmlFor="notlar" className="block text-sm font-medium text-warm-gray-700 mb-1">
            Notlar
          </label>
          <textarea
            id="notlar"
            name="notlar"
            rows={3}
            className="w-full px-3 py-2 border border-warm-gray-300 focus:border-warm-gray-500 focus:outline-none rounded resize-none"
            placeholder="Özel isteklerinizi buraya yazabilirsiniz..."
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-warm-gray-800 text-white py-3 px-4 rounded hover:bg-warm-gray-700 transition-colors duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Gönderiliyor...' : 'Rezervasyon Yap'}
        </button>
      </form>
    </div>
  );
};

export default ReservationForm; 