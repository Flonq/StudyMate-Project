"use client";
import React from "react";
import { Calendar, Clock, ListTodo, PieChart } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Başlık Bölümü */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Hoş Geldiniz 👋</h1>
        <p className="text-gray-600">Çizelge takip sisteminizi yönetin</p>
      </div>

      {/* Ana Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* İstatistik Kartları */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Bugünkü Görevler</h3>
              <p className="text-2xl font-semibold">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <ListTodo className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Tamamlanan</h3>
              <p className="text-2xl font-semibold">85%</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Toplam Süre</h3>
              <p className="text-2xl font-semibold">24s</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <PieChart className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Verimlilik</h3>
              <p className="text-2xl font-semibold">92%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hızlı İşlemler */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-4">Hızlı İşlemler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-600 font-medium transition-colors">
            Yeni Görev Ekle
          </button>
          <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-green-600 font-medium transition-colors">
            Rapor Oluştur
          </button>
          <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-purple-600 font-medium transition-colors">
            Takvimi Görüntüle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
