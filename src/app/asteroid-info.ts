export class Results {
    name: string;
    id: string;
    link: string;
}

export class Details {
    name: string;
    id: string;
    description: string;
    hazardous: boolean;
    first_observation_date: string;
    last_observation_date: string;
    diameter_feet_max: number;
    diameter_feet_min: number;
    diameter_miles_max: number;
    diameter_miles_min: number;
    diameter_meters_max: number;
    diameter_meters_min: number;
    diameter_kilometers_max: number;
    diameter_kilometers_min: number;
    velocity_kilometers_sec: string;
    velocity_kilometers_hour: string;
    velocity_miles_hour: string;
    miss_astronomical: string;
    miss_lunar: string;
    miss_kilometers: string;
    miss_miles: string;
    orbiting_body: string;
}

// ===================  ALL ASTEROID ID  =============================
export interface AllAsteroid{
    nbAstero: number;
    idAstero: number[];
    asteroName: string[];
}
export class AllIds implements AllAsteroid {
    nbAstero: number;
    idAstero: number[];
    asteroName: string[];
}
// ===================  ASTEROID ID  =============================
export interface AsteroidId{
    id: number;
}
export class MyId implements AsteroidId{
    id: number;
}
// ===================  ASTEROID IDENTITY  =============================
export interface AsteroidIdentity{
    id: number;
    name: string;
    hazardous: boolean;

    approchTime: number;

    maxMiles:number;
    minMiles:number;

    maxMeters:number;
    minMeters:number;

    maxKm:number;
    minKm:number;

    velocityKmh: number;
    velocityKms: number;
    velocityMilesh: number;

}

export class AsteroidInfo implements AsteroidIdentity{
    id: number;
    name: string;
    hazardous: boolean;

    approchTime: number;

    maxMiles:number;
    minMiles:number;

    maxMeters:number;
    minMeters:number;

    maxKm:number;
    minKm:number;

    velocityKmh: number;
    velocityKms: number;
    velocityMilesh: number;
}