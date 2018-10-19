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

    deltaDistanceKm: number;
}