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
