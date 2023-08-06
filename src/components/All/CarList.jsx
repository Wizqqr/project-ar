import Car from './Car';

const CarList = ({ carList, searchTerm }) => {
    return (
        <div className="container-lg mx-auto grid-cols-3">
            {carList.map((car, index) => {
                return (
                    <Car
                        key={index}
                        carImg={car.car_img}
                        carCompany={car.car_company}
                        carModel={car.car_model}
                        carYear={car.car_year}
                    />
                )
            })}
        </div>
    );

}

export default CarList;