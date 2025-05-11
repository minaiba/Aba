import React, { useState } from 'react'
import "dayjs/locale/ru";
import dayjs from 'dayjs';
import { translations } from '../Notice/Translations';

dayjs.locale("ru");

export default function Menu({ lang }) {
  const t = translations[lang];

  const today = dayjs();
  const initialMenu = Array.from({ length: 7 }, (_, i) => ({
    date: today.add(i, "day"),
    breakfast: "Омлет",
    lunch: "Гречка с курицей",
    afternoonSnack: "Фрукты с йогуртом",
    dinner: "Овощное рагу",
  }));

  const [menuData, setMenuData] = useState(initialMenu);
  const [selectedDayIndex, setSelectedDayIndex] = useState(null);
  const [modalValues, setModalValues] = useState({
    breakfast: "",
    lunch: "",
    afternoonSnack: "",
    dinner: "",
  });

  const openModal = (index) => {
    setSelectedDayIndex(index);
    setModalValues({
      breakfast: menuData[index].breakfast,
      lunch: menuData[index].lunch,
      afternoonSnack: menuData[index].afternoonSnack,
      dinner: menuData[index].dinner,
    });
  };

  const handleChange = (e) => {
    setModalValues({ ...modalValues, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    if (!modalValues.breakfast || !modalValues.lunch || !modalValues.afternoonSnack || !modalValues.dinner) {
      alert(t.fillAllFields);
      return;
    }

    const updated = [...menuData];
    updated[selectedDayIndex] = {
      ...updated[selectedDayIndex],
      ...modalValues,
    };
    setMenuData(updated);
    setSelectedDayIndex(null);
  };

  return (
    <div className='bg-blue-900'>
      <div className="text-white w-full max-w-[1200px] m-auto py-10 px-4">
        <h1 className="text-4xl text-center font-bold italic mb-8">{t.Menu}</h1>
        <div className="flex justify-center flex-wrap gap-4 max-w-6xl mx-auto">
          {menuData.map((day, index) => (
            <div
              key={day.date.format("YYYY-MM-DD")}
              className="bg-white text-blue-950 rounded-xl p-4 w-80 shadow hover:scale-[1.03] transition cursor-pointer"
              onClick={() => openModal(index)}
            >
              <h2 className="text-md font-bold text-center mb-1">
                {day.date.format("dd")}
              </h2>
              <p className="text-xs text-center text-gray-500 mb-3">
                {day.date.format("D MMMM")}
              </p>
              <div className="space-y-1 text-sm">
                <p><span className="font-semibold">🥣 {t.breakfast}:</span> {day.breakfast}</p>
                <p><span className="font-semibold">🍝 {t.lunch}:</span> {day.lunch}</p>
                <p><span className="font-semibold">🥪 {t.afternoonSnack}:</span> {day.afternoonSnack}</p>
                <p><span className="font-semibold">🥘 {t.dinner}:</span> {day.dinner}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedDayIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-[90%] max-w-md text-blue-950">
              <h2 className="text-xl font-bold mb-4">
                {t.editMenu}: {menuData[selectedDayIndex].date.format("dd, D MMMM")}
              </h2>
              <div className="space-y-4">
                <input
                  name="breakfast"
                  value={modalValues.breakfast}
                  onChange={handleChange}
                  placeholder={t.breakfast}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                <input
                  name="lunch"
                  value={modalValues.lunch}
                  onChange={handleChange}
                  placeholder={t.lunch}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                <input
                  name="afternoonSnack"
                  value={modalValues.afternoonSnack}
                  onChange={handleChange}
                  placeholder={t.afternoonSnack}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                <input
                  name="dinner"
                  value={modalValues.dinner}
                  onChange={handleChange}
                  placeholder={t.dinner}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={() => setSelectedDayIndex(null)}
                    className="px-4 py-2 border rounded hover:bg-gray-100"
                  >
                    {t.cancel}
                  </button>
                  <button
                    onClick={saveChanges}
                    className="px-4 py-2 bg-blue-950 text-white rounded hover:opacity-90"
                  >
                    {t.save}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

