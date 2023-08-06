// import '../All/Car.css'
// const Car = ({ carImg, carCompany, carModel, carYear, }) => {
//     return (
//         <div className="shadow-md p-1 m-2 rounded-sm bg-cyan-600 text-stone-800">
//             <div className="Cristiano">
//             <div className="KDB">
//             <div className="italicMen">{carImg}</div>      
//             <div className="italic">Отель: {carModel}</div>
//             <div className="italic">Тип: {carModel}</div>
//             <div className="italic">Цена: 1200$</div>
//             </div>
//             <div className="KDB">
//             <div className="italicMen2" >{carImg}</div>
//             <div className="italic">Отель: Armion Hotel</div>
//             <div className="italic">Тип: {carCompany}</div>
//             <div className="italic">Цена: 1300$</div>
//             </div>
//             <div className="KDB">
//             <div className="italicMen3" >{carImg}</div>
//             <div className="italic3">Отель: Kalexos Hotel</div>
//             <div className="italic">Тип: {carCompany}</div>
//             <div className="italic">Цена: 1100$</div>
//             </div>
//             <div className="KDB">
//             <div className="italicMen4">{carImg}</div>
//             <div className="italic">Отель: Irasko Hotel</div>
//             <div className="italic">Тип: {carCompany}</div>
//             <div className="italic">Цена: 1200$</div>
//             </div>
//             <div className="KDB">
//             <div className="italicMen5  ">{carImg}</div>
//             <div className="italic">Отель: Ilkay Hotel</div>
//             <div className="italic">Тип: {carCompany}</div>
//             <div className="italic">Цена: 990$</div>
//             </div>
//         </div>
//         </div>
//     );
// }

// export default Car;
const Car = ({ carImg, carCompany, carModel, carYear, }) => {
    return (
        <div className="shadow-md p-1 m-2 rounded-sm bg-cyan-600 text-stone-800">
            <div className="italicMen">{carImg}</div>
            <div className="italic">Производитель: {carCompany}</div>
            <div className="italic">Модель: {carModel}</div>
            <div className="italic">Год: {carYear}</div>
            <div className="italicMen">{carImg}</div>
            <div className="italic">Производитель: {carCompany}</div>
            <div className="italic">Модель: {carModel}</div>
            <div className="italic">Год: {carYear}</div>
        </div>
    );
}

export default Car;