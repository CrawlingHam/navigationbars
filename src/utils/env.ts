import { Locations, ServiceLocations } from "@/types";

export const processEnvironmentVariables = (locations: Locations): ServiceLocations => {
    const { hasMissingVars, missingVars } = isMissingEnvironmentVariables(locations);

    if (hasMissingVars) {
        const message = `Missing required environment variables: ${missingVars.join(", ")}. Please check your .env file.`;
        throw new Error(message);
    }

    return { locations };
};

export const isMissingEnvironmentVariables = (locations: Locations) => {
    const missingVars = Object.entries(locations)
        .filter(([_, value]) => !value)
        .map(([key]) => `VITE_URL_${key}`);

    return {
        hasMissingVars: missingVars.length > 0,
        missingVars,
    };
};
