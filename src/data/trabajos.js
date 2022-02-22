import getImages from "../helpers/getImage";

export const jobs = [
    {
        name: "aire",
        tituloJobs: "Reparacion y mantenimineto de aire acondicionado",
        imgs: getImages(require.context('../assets/Trabajos/aire', false, /\.jpeg$/))
    },
    {
        name: "paredes",
        tituloJobs: "Resanamiento de paredes",
        imgs: getImages(require.context('../assets/Trabajos/paredes', false, /\.jpeg$/))
    },
    {
        name: "techo",
        tituloJobs: "Impermeabilizacion y fabricacion de techo",
        imgs: getImages(require.context('../assets/Trabajos/techo', false, /\.jpeg$/))
    },
    {
        name: "drywall",
        tituloJobs: "Fabricacion de Drywall",
        imgs: getImages(require.context('../assets/Trabajos/drywall', false, /\.jpeg$/))
    },
    {
        name: "ordenElec",
        tituloJobs: "Reordenamiento electrico",
        imgs: getImages(require.context('../assets/Trabajos/ordenElec', false, /\.jpeg$/))
    },
    {
        name: "puntoElec",
        tituloJobs: "Fabricacion de puntos electricos",
        imgs: getImages(require.context('../assets/Trabajos/puntoElec', false, /\.jpeg$/))
    },
    {
        name: "piso",
        tituloJobs: "Instalacion de piso laminado",
        imgs: getImages(require.context('../assets/Trabajos/piso', false, /\.jpeg$/))
    },
    {
        name: "puerta",
        tituloJobs: "Instalacion de puerta de vidrio",
        imgs: getImages(require.context('../assets/Trabajos/puerta', false, /\.jpeg$/))
    },
    {
        name: "agua",
        tituloJobs: "Fabricacion de puntos de agua e instalacion de bomba de agua",
        imgs: getImages(require.context('../assets/Trabajos/agua', false, /\.jpeg$/))
    }
]