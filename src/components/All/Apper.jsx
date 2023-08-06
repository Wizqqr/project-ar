import { useState, useEffect } from "react";
import CarList from "./CarList";
import Byt1 from '../pictures/Byt1.jpg'
import MOCK_DATA from './MOCK_DATA.json';
import MOCK_DATA2 from './MOCK_DATA copy.json'
import MOCK_DATA3 from './MOCK_DATA copy 2.json'
import MOCK_DATA4 from './MOCK_DATA copy 3.json'
import MOCK_DATA5 from './MOCK_DATA copy 4.json'
import MOCK_DATA6 from './MOCK_DATA copy 5.json'
import MOCK_DATA7 from './MOCK_DATA copy 6.json'
import MOCK_DATA8 from './MOCK_DATA copy 7.json'
import MOCK_DATA9 from './MOCK_DATA copy 8.json'
import MOCK_DATA10 from './MOCK_DATA copy 9.json'
import '../All/Apper.css'
const filterCars = (searchText, listOfCars) => {
  if (!searchText) {
    return listOfCars;
  }
  return listOfCars.filter(({ car_model }) =>
    car_model.toLowerCase().includes(searchText.toLowerCase())
  );
}
const data = MOCK_DATA;
const data2 =MOCK_DATA2;
const data3 =MOCK_DATA3;
const data4 =MOCK_DATA4;
const data5 =MOCK_DATA5;
const data6 =MOCK_DATA6;
const data7 =MOCK_DATA7;
const data8 =MOCK_DATA8;
const data9 =MOCK_DATA9;
const data10 =MOCK_DATA10;

function Apper() {


  const [searchTerm, setSearchTerm] = useState('');
  const [carList, setCarList] = useState(data, data2);
  const [carList2, setCarList2] = useState(data2);
  const [carList3, setCarList3] = useState(data3);
  const [carList4, setCarList4] = useState(data4);
  const [carList5, setCarList5] = useState(data5);
  const [carList6, setCarList6] = useState(data6);
  const [carList7, setCarList7] = useState(data7);
  const [carList8, setCarList8] = useState(data8);
  const [carList9, setCarList9] = useState(data9);
  const [carList10, setCarList10] = useState(data10);
  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCars = filterCars(searchTerm, data);
      setCarList(filteredCars);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);
  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCars = filterCars(searchTerm, data2);
      setCarList2(filteredCars);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);
  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCars = filterCars(searchTerm, data3);
      setCarList3(filteredCars);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCars = filterCars(searchTerm, data4);
      setCarList4(filteredCars);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCars = filterCars(searchTerm, data5);
      setCarList5(filteredCars);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCars = filterCars(searchTerm, data6);
      setCarList6(filteredCars);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCars = filterCars(searchTerm, data7);
      setCarList7(filteredCars);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCars = filterCars(searchTerm, data8);
      setCarList8(filteredCars);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCars = filterCars(searchTerm, data9);
      setCarList9(filteredCars);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCars = filterCars(searchTerm, data10);
      setCarList10(filteredCars);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);


  return (
    <div className="container mx-auto font-mono">
      <div className="text-3xl text-center py-3">Живой Поиск</div>
      <div className="flex justify-center flex-col align-middle">
        <input
          autoFocus
          type="text"
          autoComplete="off"
          placeholder="Поиск машины по модели"
          onChange={(e) => setSearchTerm(e.target.value)}
    
          className="w-100 text-stone-900 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-sm py-2 px-3 shadow-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mx-auto"
          srtyle={{
            width: '600px',
          }}
        />

        <CarList carList={carList} />
        <CarList carList={carList2} />
        <CarList carList={carList3} />
        <CarList carList={carList4} />
        <CarList carList={carList5} />
        <CarList carList={carList6} />
        <CarList carList={carList7} />
        <CarList carList={carList8} />
        <CarList carList={carList9} />
        <CarList carList={carList10} />
      </div>
    </div>
  );
}

export default Apper;