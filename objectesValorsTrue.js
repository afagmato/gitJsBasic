function solution(car) {
    car.drivingLicense = Boolean(car.licensePlate);
  
    return car;
  }

  // Input
  // Prueba 1
  solution({
    color: 'red',
    brand: 'Kia',
  });
  
  // Prueba 2
  solution({
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
  });
  
  // Prueba 3
  solution({
    licensePlate: 'RGB255',
  });

  /* 
  Output
  // Prueba 1
{
    color: 'red',
    brand: 'Kia',
    drivingLicense: false,
  }
  
  // Prueba 2
  {
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
    drivingLicense: true,
  }
  
  // Prueba 3
  {
    licensePlate: 'RGB255',
    drivingLicense: true,
  }
  */